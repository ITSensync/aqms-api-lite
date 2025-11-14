/* eslint-disable style/quotes */
import { Sequelize } from "sequelize";
import { Gas } from "../models/gas.model.js";
import { O3 } from "../models/o3.model.js";
import { Particulate } from "../models/particulate.model.js";
import { PM } from "../models/pm.model.js";

async function getLast() {
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

async function get(date) {
  try {
    let queryDate = "";
    if (date) {
      queryDate = date;
    }
    const result = await Particulate.findAll({
      where: {
        tanggal: queryDate,
      },
    });

    return {
      status: 200,
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
}

async function getPagination(page, limit) {
  try {
    const queryPage = Number.parseInt(page) || 1;
    const queryLimit = Number.parseInt(limit) || 10;
    const offset = (queryPage - 1) * queryLimit;

    const today = new Date();
    const tanggal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const { count, rows } = await Particulate.findAndCountAll({
      limit: queryLimit,
      offset,
      where: {
        tanggal,
      },
      order: [['jam', 'desc']], // urutan data
    });

    return {
      status: 200,
      message: 'success get data particulate',
      pagination: {
        total_page: Math.ceil(count / queryLimit),
        total_item: count,
      },
      data: rows,
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

async function getPaginationGas(page, limit) {
  try {
    const queryPage = Number.parseInt(page) || 1;
    const queryLimit = Number.parseInt(limit) || 10;
    const offset = (queryPage - 1) * queryLimit;

    const today = new Date();
    const tanggal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const start = `${tanggal} 00:00:00`;
    const end = `${tanggal} 23:59:59`;

    const { count, rows } = await Gas.findAndCountAll({
      limit: queryLimit,
      offset,
      where: Sequelize.literal(`waktu BETWEEN '${start}' AND '${end}'`),
      order: [['waktu', 'DESC']], // urutan data
    });

    return {
      status: 200,
      message: 'success get raw data gas',
      pagination: {
        total_page: Math.ceil(count / queryLimit),
        total_item: count,
      },
      data: rows,
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
async function getPaginationO3(page, limit) {
  try {
    const queryPage = Number.parseInt(page) || 1;
    const queryLimit = Number.parseInt(limit) || 10;
    const offset = (queryPage - 1) * queryLimit;

    const today = new Date();
    const tanggal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const start = `${tanggal} 00:00:00`;
    const end = `${tanggal} 23:59:59`;

    const { count, rows } = await O3.findAndCountAll({
      limit: queryLimit,
      offset,
      where: Sequelize.literal(`waktu BETWEEN '${start}' AND '${end}'`),
      order: [['waktu', 'DESC']], // urutan data
    });

    return {
      status: 200,
      message: 'success get raw data gas',
      pagination: {
        total_page: Math.ceil(count / queryLimit),
        total_item: count,
      },
      data: rows,
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
async function getPaginationPM(page, limit) {
  try {
    const queryPage = Number.parseInt(page) || 1;
    const queryLimit = Number.parseInt(limit) || 10;
    const offset = (queryPage - 1) * queryLimit;

    const today = new Date();
    const tanggal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const start = `${tanggal} 00:00:00`;
    const end = `${tanggal} 23:59:59`;

    const { count, rows } = await PM.findAndCountAll({
      limit: queryLimit,
      offset,
      where: Sequelize.literal(`waktu BETWEEN '${start}' AND '${end}'`),
      order: [['waktu', 'DESC']], // urutan data
    });

    return {
      status: 200,
      message: 'success get raw data gas',
      pagination: {
        total_page: Math.ceil(count / queryLimit),
        total_item: count,
      },
      data: rows,
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

export const particulateService = {
  getLast,
  get,
  getPagination,
  getPaginationGas,
  getPaginationO3,
  getPaginationPM,
};
