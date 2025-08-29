import { getLast } from "../services/particulate.service.js";

export async function getLastData(req, res) {
  const result = await getLast();
  res.status(result.status).send(result);
}
