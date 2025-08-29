import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Location = db.define("location", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  lat: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  long: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});
