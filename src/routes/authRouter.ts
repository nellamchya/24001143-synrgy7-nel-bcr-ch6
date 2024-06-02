import express from "express";
import { login, register } from "../controller/authController";
import { getInfoUser } from "../controller/userController";
import { checkAuth } from "../middlewares/auth";
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.use("/me", checkAuth, getInfoUser);

export default authRouter;
