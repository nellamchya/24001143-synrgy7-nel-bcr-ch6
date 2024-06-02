import { CarsModels } from "../model/cars.model";
import carsRepository from "../repository/carsRepository";

class CarsService {
  async getAllCars() {
    return carsRepository.findAll();
  }

  async getAllAvailableCars() {
    return carsRepository.findAllAvailable();
  }

  async getCarById(id: string) {
    return carsRepository.findById(id);
  }

  async createCar(payload: CarsModels) {
    return carsRepository.createCar(payload);
  }

  async updateCarById(id_car: string, id_admin:string, updated_at: Date, payload: CarsModels){
    return carsRepository.updateCarById(id_car, id_admin, updated_at, payload)
  }

  async deleteCarById(id_car: string, id_admin: string, deleted_at: Date) {
    return carsRepository.deleteCarById(id_car, id_admin, deleted_at);
  }
}

export default new CarsService();
