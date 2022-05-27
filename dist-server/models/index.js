"use strict";

var UserModel = require("./User.js");

var ProductsModel = require("./Products.js");

var DashboardFolderModel = require("./DashboardFolder.js");

var DashboardsModel = require("./Dashboards.js");

var Sequelize = require("sequelize");

var dotenv = require("dotenv");

dotenv.config();
var _process$env = process.env,
    DB_NAME = _process$env.DB_NAME,
    DB_USERNAME = _process$env.DB_USERNAME,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST;
console.log(process.env);
var sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  dialectModule: require('mysql2'),
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var User = UserModel(sequelize, Sequelize);
var Products = ProductsModel(sequelize, Sequelize);
var DashboardFolder = DashboardFolderModel(sequelize, Sequelize);
var Dashboards = DashboardsModel(sequelize, Sequelize);
module.exports = {
  sequelize: sequelize,
  User: User,
  Products: Products,
  DashboardFolder: DashboardFolder,
  Dashboards: Dashboards
};