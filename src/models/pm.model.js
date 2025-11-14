import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const PM = db.define(`pmtb`, {
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
  pm10: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pm25: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pm1: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pm4: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  status: {
    allowNull: true,
    type: DataTypes.STRING(255),
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
