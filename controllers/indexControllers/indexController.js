"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../../models");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { Op, Sequelize, QueryTypes, query } from "sequelize";
require("dotenv").config();

var jwt = require("jsonwebtoken");

var saltRounds = 10;
var secret = "sri";
var _default = {
  getAllproducts: function getAllproducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              return _context.abrupt("return", _models.Products.findAll({
                where: {
                  is_active: 1
                }
              }).then(function (user) {
                return res.status(200).json({
                  success: true,
                  message: "Products",
                  final_obj: user
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context.prev = 4;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              return _context.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 4]]);
    }))();
  },
  getAllproductsbyAdmin: function getAllproductsbyAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.abrupt("return", _models.Products.findAll().then(function (user) {
                return res.status(200).json({
                  success: true,
                  message: "Products",
                  final_obj: user
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context2.prev = 4;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              return _context2.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 4]]);
    }))();
  },
  updateProducts: function updateProducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models.Products.update(req.body, {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context3.sent;
              return _context3.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              return _context3.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }))();
  },
  updateDashBoard: function updateDashBoard(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models.Dashboards.update(req.body, {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context4.sent;
              return _context4.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              return _context4.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }))();
  },
  updateDashBoardFolders: function updateDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var data;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _models.DashboardFolder.update(_objectSpread(_objectSpread({}, req.body), {}, {
                created_at: _models.sequelize.literal('CURRENT_TIMESTAMP')
              }), {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context5.sent;
              return _context5.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              return _context5.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }))();
  },
  postProducts: function postProducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              return _context6.abrupt("return", _models.Products.create(req.body).then(function (user) {
                return res.status(200).json({
                  success: true
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context6.prev = 4;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);
              return _context6.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 4]]);
    }))();
  },
  postDashBoard: function postDashBoard(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              return _context7.abrupt("return", _models.Dashboards.create(req.body).then(function (user) {
                return res.status(200).json({
                  success: true
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context7.prev = 4;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);
              return _context7.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 4]]);
    }))();
  },
  postDashBoardFolders: function postDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              return _context8.abrupt("return", _models.DashboardFolder.create(_objectSpread(_objectSpread({}, req.body), {}, {
                created_at: _models.sequelize.literal('CURRENT_TIMESTAMP')
              })).then(function (user) {
                return res.status(200).json({
                  success: true
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context8.prev = 4;
              _context8.t0 = _context8["catch"](0);
              console.log(_context8.t0);
              return _context8.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 4]]);
    }))();
  },
  getAllDashBoardFolders: function getAllDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              return _context9.abrupt("return", _models.DashboardFolder.findAll({
                where: {
                  is_active: 1
                }
              }).then(function (dashboard) {
                return res.status(200).json({
                  success: true,
                  message: "DashboardFolders",
                  final_obj: dashboard
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context9.prev = 4;
              _context9.t0 = _context9["catch"](0);
              console.log(_context9.t0);
              return _context9.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 4]]);
    }))();
  },
  getAllDashBoards: function getAllDashBoards(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              return _context10.abrupt("return", _models.Dashboards.findAll({
                where: {
                  is_active: 1
                }
              }).then(function (dashboard) {
                return res.status(200).json({
                  success: true,
                  message: "Dashboards",
                  final_obj: dashboard
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context10.prev = 4;
              _context10.t0 = _context10["catch"](0);
              console.log(_context10.t0);
              return _context10.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 4]]);
    }))();
  },
  getAllDashBoardsforAdmin: function getAllDashBoardsforAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              return _context11.abrupt("return", _models.Dashboards.findAll().then(function (dashboard) {
                return res.status(200).json({
                  success: true,
                  message: "Dashboards",
                  final_obj: dashboard
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context11.prev = 4;
              _context11.t0 = _context11["catch"](0);
              console.log(_context11.t0);
              return _context11.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 4]]);
    }))();
  },
  getAllDashBoardsFoldersforAdmin: function getAllDashBoardsFoldersforAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              return _context12.abrupt("return", _models.DashboardFolder.findAll().then(function (dashboard) {
                return res.status(200).json({
                  success: true,
                  message: "Dashboards Folders",
                  final_obj: dashboard
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context12.prev = 4;
              _context12.t0 = _context12["catch"](0);
              console.log(_context12.t0);
              return _context12.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[0, 4]]);
    }))();
  },
  createUser: function createUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
      var final_obj, password, hash, data, token;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              password = req.body.password;
              _context13.next = 4;
              return _bcrypt["default"].hash(password, saltRounds);

            case 4:
              hash = _context13.sent;
              _context13.next = 7;
              return _models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                type: "TRIAL",
                is_active: 1,
                trial_date: req.body.trial_date
              });

            case 7:
              data = _context13.sent;
              token = jwt.sign({
                id: data.id,
                email: req.body.email
              }, secret);
              final_obj = data;
              final_obj["accessToken"] = token;
              return _context13.abrupt("return", res.status(200).json({
                success: true,
                message: "User created",
                data: final_obj
              }));

            case 14:
              _context13.prev = 14;
              _context13.t0 = _context13["catch"](0);
              console.log(_context13.t0);
              return _context13.abrupt("return", res.status(500).json({
                success: false,
                message: _context13.t0
              }));

            case 18:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[0, 14]]);
    }))();
  },
  loginUser: function loginUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", _models.User.findOne({
                where: {
                  email: req.body.email
                }
              }).then(function (user) {
                if (!user) {
                  return res.status(404).send({
                    message: "User Not found."
                  });
                }

                var passwordIsValid = _bcrypt["default"].compareSync(req.body.password, user.password);

                if (!passwordIsValid) {
                  return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                  });
                } // req.session.user = user;


                // req.session.user = user;
                var token = jwt.sign({
                  id: user.id,
                  email: req.body.email
                }, secret);
                console.log(user);
                return res.status(200).json({
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  type: user.type,
                  accessToken: token,
                  trial_date: user === null || user === void 0 ? void 0 : user.trial_date
                });
              })["catch"](function (err) {
                console.log(err);
                res.status(500).send({
                  message: err.message
                });
              }));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  },
  updateUser: function updateUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
      var body, data;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              console.log(req);
              _context15.prev = 1;
              body = req.body;
              _context15.next = 5;
              return _models.User.update(body, {
                where: {
                  id: req.body.id
                }
              });

            case 5:
              data = _context15.sent;
              return _context15.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: []
              }));

            case 9:
              _context15.prev = 9;
              _context15.t0 = _context15["catch"](1);
              console.log(_context15.t0);
              return _context15.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 13:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[1, 9]]);
    }))();
  }
};
exports["default"] = _default;