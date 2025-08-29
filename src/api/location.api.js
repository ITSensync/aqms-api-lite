import express from "express";
import { locationController } from "../controllers/location.controller.js";

const router = express.Router();

router.post("/", locationController.addLocation);
router.get("/latest", locationController.getLastLocation);

export default router;
