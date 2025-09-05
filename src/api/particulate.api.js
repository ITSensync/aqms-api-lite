import express from "express";
import { particulateController } from "../controllers/particulate.controller.js";

const router = express.Router();

router.get("/latest", particulateController.getLastData);
router.get("/", particulateController.getData);
router.get("/pagination", particulateController.getPaginationData);

export default router;
