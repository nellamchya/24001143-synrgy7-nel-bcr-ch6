import { NextFunction, Request, Response } from "express";
import carsService from "../service/carsService";
import { v4 as uuidv4 } from "uuid";

export const getCars = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = (req as any).user;

    if (user.role == "user") {
      const cars = await carsService.getAllAvailableCars();
      if (!cars) res.status(404).json({ status: false, message: "Data Cars Empty", data: cars });
      res.status(200).json({ status: true, message: "Get all available cars successfully", data: cars });
    } else {
      const cars = await carsService.getAllCars();
      if (!cars) res.status(404).json({ status: false, message: "Data Cars Empty", data: cars });
      res.status(200).json({ status: true, message: "Get all cars successfully", data: cars });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

export const getCarById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id;
    const car = await carsService.getCarById(id);

    if (!car) res.status(404).json({ status: false, message: "Data car is empty" });
    res.status(200).json({ status: true, message: `Get car with id ${id} successfully`, data: car });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

export const createCar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const payload: any = req.body;
    const user = (req as any).user;

    const item = {
      ...payload,
      id: uuidv4(),
      created_by_id: user.id,
    };

    const car = await carsService.createCar(item);
    if (!car) res.status(400).json({ status: false, message: "Something Went Wrong" });
    res.status(200).json({ status: true, message: `Create new car successfully`, data: car });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
export const updateCarById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id;
    const payload: any = req.body;
    const user = (req as any).user;
    const updated_at = new Date();

    const updatedCar = await carsService.updateCarById(id, user.id, updated_at, payload);
    if (!updatedCar) res.status(400).json({ status: false, message: "Something Went Wrong" });
    res.status(200).json({ status: true, message: `Update car with id ${id} successfully`, data: updatedCar });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

export const deleteCarById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id;
    const user = (req as any).user;
    const deleted_at = new Date();

    const car = await carsService.deleteCarById(id, user.id, deleted_at);

    if (!car) res.status(404).json({ status: false, message: "Car not found" });
    res.status(200).json({ status: true, message: `Delete car with id ${id} successfully`, data: car });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
