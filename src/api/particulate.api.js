import express from "express";
import { particulateController } from "../controllers/particulate.controller.js";

const router = express.Router();

router.get("/latest", particulateController.getLastData);
router.get("/", particulateController.getData);
router.get("/pagination", particulateController.getPaginationData);
router.get("/pagination/gas", particulateController.getPaginationGasData);
router.get("/pagination/o3", particulateController.getPaginationO3Data);
router.get("/pagination/pm", particulateController.getPaginationPMData);

export default router;
