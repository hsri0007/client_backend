"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { Op, Sequelize, QueryTypes, query } from "sequelize";
var dotenv = require("dotenv");

var nodemailer = require("nodemailer");

var gpc = require("generate-pincode");

dotenv.config();

var _require = require("../../models"),
    User = _require.User,
    sequelize = _require.sequelize,
    Products = _require.Products,
    DashboardFolder = _require.DashboardFolder,
    Dashboards = _require.Dashboards;

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var saltRounds = 10;
var secret = "sri";
module.exports = {
  getAllproducts: function getAllproducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              return _context.abrupt("return", Products.findAll({
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
  resetToken: function resetToken(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var pin, data, transporter, mailOptions;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pin = gpc(4);
              _context2.prev = 1;
              _context2.next = 4;
              return User.findOne({
                where: {
                  email: req.query.email
                }
              });

            case 4:
              data = _context2.sent;

              if (data) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.status(500).json({
                success: false,
                message: "user Not found"
              }));

            case 7:
              transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "candyreddy1995@gmail.com",
                  pass: "9963009324"
                }
              });
              mailOptions = {
                from: "candyreddy@gmail.com",
                to: req.query.email,
                subject: "Dont Share this Code",
                text: pin
              };
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
              return _context2.abrupt("return", res.status(200).json({
                success: true,
                message: "Products",
                code: pin
              }));

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              return _context2.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 13]]);
    }))();
  },
  verifyuserToken: function verifyuserToken(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(req.query.token);
              _context4.prev = 1;
              jwt.verify(req.query.token, secret, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, decoded) {
                  var data;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!err) {
                            _context3.next = 2;
                            break;
                          }

                          return _context3.abrupt("return", res.status(401).send({
                            message: "Unauthorized!"
                          }));

                        case 2:
                          _context3.next = 4;
                          return User.findOne({
                            where: {
                              id: decoded.id
                            }
                          });

                        case 4:
                          data = _context3.sent;
                          return _context3.abrupt("return", res.status(200).json({
                            success: true,
                            message: "user",
                            final_obj: data
                          }));

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context4.next = 9;
              break;

            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);
              return _context4.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 5]]);
    }))();
  },
  getAllproductsbyAdmin: function getAllproductsbyAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              return _context5.abrupt("return", Products.findAll().then(function (user) {
                return res.status(200).json({
                  success: true,
                  message: "Products",
                  final_obj: user
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context5.prev = 4;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              return _context5.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 4]]);
    }))();
  },
  updateProducts: function updateProducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return Products.update(req.body, {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context6.sent;
              return _context6.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);
              return _context6.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 7]]);
    }))();
  },
  updateDashBoard: function updateDashBoard(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return Dashboards.update(req.body, {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context7.sent;
              return _context7.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);
              return _context7.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 7]]);
    }))();
  },
  updateDashBoardFolders: function updateDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return DashboardFolder.update(_objectSpread(_objectSpread({}, req.body), {}, {
                created_at: sequelize.literal("CURRENT_TIMESTAMP")
              }), {
                where: {
                  id: req.body.id
                }
              }).then(function (resp) {
                console.log(resp);
                return resp;
              });

            case 3:
              data = _context8.sent;
              return _context8.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: data
              }));

            case 7:
              _context8.prev = 7;
              _context8.t0 = _context8["catch"](0);
              console.log(_context8.t0);
              return _context8.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 7]]);
    }))();
  },
  postProducts: function postProducts(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              return _context9.abrupt("return", Products.create(req.body).then(function (user) {
                return res.status(200).json({
                  success: true
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
  postDashBoard: function postDashBoard(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              return _context10.abrupt("return", Dashboards.create(req.body).then(function (user) {
                return res.status(200).json({
                  success: true
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
  postDashBoardFolders: function postDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              return _context11.abrupt("return", DashboardFolder.create(_objectSpread(_objectSpread({}, req.body), {}, {
                created_at: sequelize.literal("CURRENT_TIMESTAMP")
              })).then(function (user) {
                return res.status(200).json({
                  success: true
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
  getAllDashBoardFolders: function getAllDashBoardFolders(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              return _context12.abrupt("return", DashboardFolder.findAll({
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
  getAllDashBoards: function getAllDashBoards(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              return _context13.abrupt("return", Dashboards.findAll({
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
              _context13.prev = 4;
              _context13.t0 = _context13["catch"](0);
              console.log(_context13.t0);
              return _context13.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[0, 4]]);
    }))();
  },
  getSingleDashBoards: function getSingleDashBoards(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              return _context14.abrupt("return", Dashboards.findOne({
                where: {
                  is_active: 1,
                  id: req.params.id
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
              _context14.prev = 4;
              _context14.t0 = _context14["catch"](0);
              console.log(_context14.t0);
              return _context14.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[0, 4]]);
    }))();
  },
  getAllDashBoardsforAdmin: function getAllDashBoardsforAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              _context15.next = 7;
              break;

            case 3:
              _context15.prev = 3;
              _context15.t0 = _context15["catch"](0);
              console.log(_context15.t0);
              return _context15.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 7:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[0, 3]]);
    }))();
  },
  getUsersforAdmin: function getUsersforAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              return _context16.abrupt("return", User.findAll().then(function (usersdata) {
                return res.status(200).json({
                  success: true,
                  message: "Users",
                  final_obj: usersdata
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context16.prev = 4;
              _context16.t0 = _context16["catch"](0);
              console.log(_context16.t0);
              return _context16.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[0, 4]]);
    }))();
  },
  getAllDashBoardsFoldersforAdmin: function getAllDashBoardsFoldersforAdmin(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              return _context17.abrupt("return", DashboardFolder.findAll().then(function (dashboard) {
                return res.status(200).json({
                  success: true,
                  message: "Dashboards Folders",
                  final_obj: dashboard
                });
              })["catch"](function (error) {
                return console.log(error);
              }));

            case 4:
              _context17.prev = 4;
              _context17.t0 = _context17["catch"](0);
              console.log(_context17.t0);
              return _context17.abrupt("return", res.status(500).json({
                success: false,
                message: "Some error occured"
              }));

            case 8:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[0, 4]]);
    }))();
  },
  createUser: function createUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var final_obj, password, hash, exist, data, token;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.prev = 0;
              password = req.body.password;
              _context18.next = 4;
              return bcrypt.hash(password, saltRounds);

            case 4:
              hash = _context18.sent;
              _context18.next = 7;
              return User.findOne({
                email: req.body.email
              });

            case 7:
              exist = _context18.sent;

              if (!exist) {
                _context18.next = 10;
                break;
              }

              return _context18.abrupt("return", res.status(409).json({
                status: 409,
                success: false,
                message: "error"
              }));

            case 10:
              _context18.next = 12;
              return User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                type: "TRIAL",
                is_active: 1,
                trial_date: req.body.trial_date,
                is_admin: "false"
              });

            case 12:
              data = _context18.sent;
              token = jwt.sign({
                id: data.id,
                email: req.body.email
              }, secret);
              return _context18.abrupt("return", res.status(200).json({
                id: data.id,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                type: data.type,
                trial_date: data === null || data === void 0 ? void 0 : data.trial_date,
                accessToken: token,
                is_admin: data.is_admin
              }));

            case 17:
              _context18.prev = 17;
              _context18.t0 = _context18["catch"](0);
              console.log(_context18.t0);
              return _context18.abrupt("return", res.status(500).json({
                success: false,
                message: _context18.t0
              }));

            case 21:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, null, [[0, 17]]);
    }))();
  },
  loginUser: function loginUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", User.findOne({
                where: {
                  email: req.body.email
                }
              }).then(function (user) {
                if (!user) {
                  return res.status(404).send({
                    message: "User Not found."
                  });
                }

                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

                if (!passwordIsValid) {
                  return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                  });
                } // req.session.user = user;


                var token = jwt.sign({
                  id: user.id,
                  email: req.body.email
                }, secret);
                console.log(user);
                return res.status(200).json({
                  id: user.id,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                  type: user.type,
                  accessToken: token,
                  trial_date: user === null || user === void 0 ? void 0 : user.trial_date,
                  is_admin: user.is_admin
                });
              })["catch"](function (err) {
                console.log(err);
                res.status(500).send({
                  message: err.message
                });
              }));

            case 1:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }))();
  },
  updateUser: function updateUser(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var body, data;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              console.log(req);
              _context20.prev = 1;
              body = req.body;
              _context20.next = 5;
              return User.update(body, {
                where: {
                  id: req.body.id
                }
              });

            case 5:
              data = _context20.sent;
              return _context20.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: []
              }));

            case 9:
              _context20.prev = 9;
              _context20.t0 = _context20["catch"](1);
              console.log(_context20.t0);
              return _context20.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 13:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, null, [[1, 9]]);
    }))();
  },
  updatePass: function updatePass(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var password, hash, data;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              console.log(req);
              _context21.prev = 1;
              password = req.body.password;
              _context21.next = 5;
              return bcrypt.hash(password, saltRounds);

            case 5:
              hash = _context21.sent;
              _context21.next = 8;
              return User.update({
                password: hash
              }, {
                where: {
                  id: req.body.id
                }
              });

            case 8:
              data = _context21.sent;
              return _context21.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: []
              }));

            case 12:
              _context21.prev = 12;
              _context21.t0 = _context21["catch"](1);
              console.log(_context21.t0);
              return _context21.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 16:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, null, [[1, 12]]);
    }))();
  },
  updatePassbyemail: function updatePassbyemail(req, res) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var password, hash, data;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              console.log(req);
              _context22.prev = 1;
              password = req.body.newPassword;
              _context22.next = 5;
              return bcrypt.hash(password, saltRounds);

            case 5:
              hash = _context22.sent;
              _context22.next = 8;
              return User.update({
                password: hash
              }, {
                where: {
                  email: req.body.email
                }
              });

            case 8:
              data = _context22.sent;
              return _context22.abrupt("return", res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: []
              }));

            case 12:
              _context22.prev = 12;
              _context22.t0 = _context22["catch"](1);
              console.log(_context22.t0);
              return _context22.abrupt("return", res.status(500).json({
                success: false,
                message: "Form data Invalid"
              }));

            case 16:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, null, [[1, 12]]);
    }))();
  }
};