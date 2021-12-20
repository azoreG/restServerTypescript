import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
  port: 33060,
});

export default db;
