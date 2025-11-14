import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Gas = db.define(`gastb`, {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  waktu: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  co: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  so2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  no2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  hc: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  raw_so2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  raw_no2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  raw_co: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  raw_hc: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ppm_co: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ppm_hc: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ppm_so2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ppm_no2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temp_co: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temp_hc: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temp_so2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temp_no2: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
