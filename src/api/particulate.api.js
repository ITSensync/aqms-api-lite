import express from "express";
import { getLastData } from "../controllers/particulate.controller.js";

const router = express.Router();

router.get("/latest", getLastData);

export default router;
