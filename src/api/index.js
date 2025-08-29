import express from "express";
import particulate from "./particulate.api.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/particulate", particulate);

export default router;
