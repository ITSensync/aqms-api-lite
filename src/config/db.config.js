/* eslint-disable node/no-process-env */
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development",
});
