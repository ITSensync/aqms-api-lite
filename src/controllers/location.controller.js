import { locationService } from "../services/location.service.js";

async function addLocation(req, res) {
  const result = await locationService.add(req.body);
  res.status(result.status).send(result);
};

async function getLastLocation(req, res) {
  const result = await locationService.getLast();
  res.status(result.status).send(result);
}

export const locationController = {
  addLocation,
  getLastLocation,
};
