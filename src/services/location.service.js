import { Location } from "../models/location.model.js";

async function add(body) {
  try {
    const { lat, long } = body;

    const result = await Location.create({
      lat,
      long,
    });

    return {
      status: 200,
      message: "Success insert new location coordinate",
      data: result,
    };
  }
  catch (error) {
    console.error(error);
    return {
      status: error.status || 500,
      message: error.message,
    };
  }
};

async function getLast() {
  try {
    const dataResult = await Location.findOne({
      order: [
        ["createdAt", "desc"],
      ],
    });

    if (!dataResult) {
      // eslint-disable-next-line no-throw-literal
      throw {
        status: 404,
        message: "LATEST DATA NOT FOUND",
      };
    }

    return {
      status: 200,
      data: dataResult,
    };
  }
  catch (error) {
    console.error(error);
    return {
      status: error.status || 500,
      message: error.message,
    };
  }
}

export const locationService = {
  add,
  getLast,
};
