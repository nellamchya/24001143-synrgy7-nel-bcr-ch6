import { CarsModels } from "../model/cars.model";

class CarsRepository {
  async findAll() {
    return CarsModels.query().withGraphFetched("[created_by(selectName), deleted_by(selectName), updated_by(selectName)]").modifiers({
      selectName: (builder) => {
        return builder.select("name", "username", "email", "role")
      }
    });
  }

  async findAllAvailable () {
    return CarsModels.query().where({available: true, deleted_at: null});
  }

  async findById(id: string) {
    return CarsModels.query().findById(id).withGraphFetched("[created_by(selectName), deleted_by(selectName), updated_by(selectName)]").modifiers({
      selectName: (builder) => {
        return builder.select("name", "username", "email", "role")
      }
    });
  }

  async createCar (payload: CarsModels) {
    return CarsModels.query().insert(payload);
  }

  async updateCarById(id_car: string, id_admin: string, updated_at: Date, payload: CarsModels){
    return CarsModels.query().findById(id_car).update({
        ...payload,
        updated_by_id: id_admin,
        updated_at
    })
  }

  async deleteCarById(id_car: string, id_admin: string, deleted_at: Date) {
    return CarsModels.query().findById(id_car).update({
      deleted_by_id: id_admin,
      deleted_at,
    });
  }
}

export default new CarsRepository();
