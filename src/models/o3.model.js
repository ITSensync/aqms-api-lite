import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const O3 = db.define(`o3tb`, {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  waktu: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  o3: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  raw_o3: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temp_o3: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ppm_o3: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
