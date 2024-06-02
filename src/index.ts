import express, { Express } from "express";
import dotenv from "dotenv";
import config from "../knexfile";
import knex from "knex";
import router from "./routes";
import { Model } from "objection";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swaggerConfig.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({ extended: false }));
app.locals.baseURL = `${process.env.BASE_URL}:${port}`;

// Koneksi Express & Knex
const knexInstance = knex(config["development"]);
Model.knex(knexInstance);

/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
