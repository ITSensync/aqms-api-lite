import express from "express";
import { particulateController } from "../controllers/particulate.controller.js";

const router = express.Router();

router.get("/latest", particulateController.getLastData);

export default router;
