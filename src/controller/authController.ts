import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import authService from "../service/authService";
import jwt from "jsonwebtoken";
import usersService from "../service/usersService";

const encryptPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(hash);
    });
  });
};

const checkPassword = (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

// Login For Superadmin, Admin and User
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await authService.login(username);

    if (!user || !username || !password) {
      res.status(401).json({
        status: false,
        message: "Username or password wrong",
      });
      return;
    }

    const isPasswordMatch = await checkPassword(password, user.password);

    if (!isPasswordMatch) {
      res.status(401).json({
        status: false,
        message: "Username or password wrong",
      });
      return;
    } else {
      const payload = {
        id: user.id,
        role: user.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1d" });
      res.status(200).json({
        status: true,
        message: "Login Successfully",
        token,
        data: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// Register for new user
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, username, password, email } = req.body;
    const existingUser = await usersService.getUserByUsername(username);

    if (!username || !password || !name || !email) {
      res.status(400).json({
        status: false,
        message: "Username, password, email and name are required",
      });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({
        status: false,
        message: "Password must be at least 6 characters",
      });
      return;
    }

    if (existingUser) {
      res.status(400).json({
        status: false,
        message: "Username already exists",
      });
      return;
    }

    const hashedPassword = await encryptPassword(password);

    const payload = {
      ...req.body,
      id: uuidv4(),
      password: hashedPassword,
      role: "user",
    };

    const registerUser = await authService.register(payload);

    if (registerUser) {
      res.status(201).json({ status: true, message: "Register new user successfully", data: registerUser });
    } else {
      res.status(400).json({ status: false, message: "Failed to register user" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
