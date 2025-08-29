import express from "express";
import location from "./location.api.js";
import particulate from "./particulate.api.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - AQMS LITE VERSION",
  });
});

router.use("/particulate", particulate);
router.use("/location", location);

export default router;
