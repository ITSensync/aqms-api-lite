import { particulateService } from "../services/particulate.service.js";

async function getLastData(req, res) {
  const result = await particulateService.getLast();
  res.status(result.status).send(result);
}

async function getData(req, res) {
  const result = await particulateService.get(req.query.tanggal);
  res.status(result.status).send(result);
}

async function getPaginationData(req, res) {
  const result = await particulateService.getPagination(req.query.page, req.query.limit);
  res.status(result.status).send(result);
}

async function getPaginationGasData(req, res) {
  const result = await particulateService.getPaginationGas(req.query.page, req.query.limit);
  res.status(result.status).send(result);
}
async function getPaginationO3Data(req, res) {
  const result = await particulateService.getPaginationO3(req.query.page, req.query.limit);
  res.status(result.status).send(result);
}
async function getPaginationPMData(req, res) {
  const result = await particulateService.getPaginationPM(req.query.page, req.query.limit);
  res.status(result.status).send(result);
}

export const particulateController = {
  getLastData,
  getData,
  getPaginationData,
  getPaginationGasData,
  getPaginationPMData,
  getPaginationO3Data,
};
