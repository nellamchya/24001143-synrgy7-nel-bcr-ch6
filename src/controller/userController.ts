import { NextFunction, Request, Response } from "express";
import usersService from "../service/usersService";

interface JwtPayload {
  id: string;
  role: string;
}

export const getInfoUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any).user as JwtPayload;

    const infoUser = await usersService.getUserById(user.id);

    if (!infoUser) {
      res.status(400).json({ status: false, message: "Failed to retrieve data user" });
    }
    res.status(200).json({ message: `Get current user successfully`, data: infoUser });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
