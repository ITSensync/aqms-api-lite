import { Particulate } from "../models/Particulate.model.js";

export async function getLast() {
  try {
    const dataResult = await Particulate.findOne({
      order: [
        ["tanggal", "desc"],
        ["jam", "desc"],
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
    // eslint-disable-next-line no-console
    console.log(error);
    return {
      status: error.status || 500,
      message: error.message,
    };
  }
}
