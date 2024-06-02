import express from "express";
import { createCar, deleteCarById, getCarById, getCars, updateCarById } from "../controller/carsController";
import { checkAuth, isAdmin } from "../middlewares/auth";

export const carsRouter = express.Router();

carsRouter.get("/", checkAuth, getCars);
carsRouter.get("/:id", checkAuth, isAdmin, getCarById);
carsRouter.post("/", checkAuth, isAdmin , createCar);
carsRouter.delete("/:id", checkAuth, isAdmin, deleteCarById);
carsRouter.put("/:id", checkAuth, isAdmin, updateCarById);
