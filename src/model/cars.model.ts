import { Model, ModelObject } from "objection";
import { UsersModel } from "./users.model";

export class CarsModels extends Model {
  id!: string;
  plate!: string;
  manufacture!: string;
  model!: string;
  image!: string;
  rent_per_day!: number;
  capacity!: number;
  description!: string;
  available_at!: string;
  transmission!: string;
  available!: boolean;
  type!: string;
  year!: number;
  options!: string[];
  specs!: string[];
  created_by_id!: string;
  updated_by_id!: string;
  deleted_by_id!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;

  static get tableName() {
    return "cars";
  }

  static get relationMappings() {
    return {
      created_by: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.created_by_id",
          to: "users.id",
        },
      },
      updated_by: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.updated_by_id",
          to: "users.id",
        },
      },
      deleted_by: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.deleted_by_id",
          to: "users.id",
        },
      },
    };
  }
}

export type Cars = ModelObject<CarsModels>;
