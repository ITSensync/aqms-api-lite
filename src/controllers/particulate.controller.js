import { particulateService } from "../services/particulate.service.js";

async function getLastData(req, res) {
  const result = await particulateService.getLast();
  res.status(result.status).send(result);
}

async function getData(req, res) {
  const result = await particulateService.get(req.query.tanggal);
  res.status(result.status).send(result);
}

export const particulateController = {
  getLastData,
  getData,
};
