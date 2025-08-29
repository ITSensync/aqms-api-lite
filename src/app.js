/* eslint-disable no-console */
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import api from "./api/index.js";

import { db } from "./config/db.config.js";
import * as middlewares from "./middlewares.js";
import { Location } from "./models/location.model.js";
import { Particulate } from "./models/Particulate.model.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await db.authenticate();
    await Particulate.sync();
    await Location.sync();
    console.log("Connection to the database has been established successfully");
  }
  catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
