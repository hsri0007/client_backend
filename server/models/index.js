import UserModel from "./User.js";
import ProductsModel from "./Products.js"
import DashboardFolderModel from "./DashboardFolder.js"
import DashboardsModel from "./Dashboards.js"
import Sequelize from "sequelize";

import "dotenv/config";


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

  export  {
    sequelize,
    User,
    Products,
    DashboardFolder,
    Dashboards
  }