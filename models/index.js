"use strict";

var _User = _interopRequireDefault(require("./User"));

var _Products = _interopRequireDefault(require("./Products"));

var _DashboardFolder = _interopRequireDefault(require("./DashboardFolder"));

var _Dashboards = _interopRequireDefault(require("./Dashboards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var User = (0, _User["default"])(sequelize, Sequelize);
var Products = (0, _Products["default"])(sequelize, Sequelize);
var DashboardFolder = (0, _DashboardFolder["default"])(sequelize, Sequelize);
var Dashboards = (0, _Dashboards["default"])(sequelize, Sequelize);
module.exports = {
  sequelize: sequelize,
  User: User,
  Products: Products,
  DashboardFolder: DashboardFolder,
  Dashboards: Dashboards
};