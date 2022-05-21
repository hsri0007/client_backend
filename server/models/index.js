import UserModel from "./User";
import ProductsModel from "./Products"
import DashboardFolderModel from "./DashboardFolder"
import DashboardsModel from "./Dashboards"
const Sequelize = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env
console.log(process.env);

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  const User = UserModel(sequelize, Sequelize);
  const Products = ProductsModel(sequelize, Sequelize);
  const DashboardFolder = DashboardFolderModel(sequelize, Sequelize);
  const Dashboards = DashboardsModel(sequelize, Sequelize);

  module.exports = {
    sequelize,
    User,
    Products,
    DashboardFolder,
    Dashboards
  }