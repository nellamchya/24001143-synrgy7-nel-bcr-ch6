import { Model, ModelObject } from "objection";
import { CarsModels } from "./cars.model";

enum RoleUser {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  USER = "user",
}

export class UsersModel extends Model {
  id!: string;
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  role!: RoleUser;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      created_cars: {
        relation: Model.HasManyRelation,
        modelClass: CarsModels,
        join: {
          from: 'users.id',
          to: 'cars.created_by_id',
        },
      },
      updated_cars: {
        relation: Model.HasManyRelation,
        modelClass: CarsModels,
        join: {
          from: 'users.id',
          to: 'cars.updated_by_id',
        },
      },
      deleted_cars: {
        relation: Model.HasManyRelation,
        modelClass: CarsModels,
        join: {
          from: 'users.id',
          to: 'cars.deleted_by_id',
        },
      },
    };
  }
}

export type Users = ModelObject<UsersModel>;
