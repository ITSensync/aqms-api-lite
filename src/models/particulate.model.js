import { DataTypes } from "sequelize";
import { db } from "../config/db.config.js";

export const Particulate = db.define(`maintb`, {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  tanggal: {
    allowNull: true,
    type: DataTypes.DATEONLY,
  },
  jam: {
    allowNull: true,
    type: DataTypes.TIME,
  },
  o3: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  hc: {
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
  co: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pm10: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pm25: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  ws: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  wd: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  humidity: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  temperature: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  pressure: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  sr: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  uv: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  rain_intensity: {
    allowNull: true,
    type: DataTypes.FLOAT,
  },
  stat_conn: {
    allowNull: true,
    type: DataTypes.STRING(20),
  },
  feedback: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  feedback2: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
