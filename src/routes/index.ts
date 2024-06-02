import { Router } from "express";
import { carsRouter } from "./carsRouter";
import superadminAuthRouter from "./superadmin/authRouter";
import authRouter from "./authRouter";

const router = Router();

router.use("/cars", carsRouter);
router.use("/superadmin/auth", superadminAuthRouter);
router.use("/auth", authRouter);

export default router;
