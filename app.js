"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./routes/index"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import usersRouter from "./routes/users";
// import adminRouter from "./routes/admin";
var app = (0, _express["default"])();

var cors = require("cors");

app.use(cors({
  origin: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev")); // app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", _index["default"]); // app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/admin", adminRouter);

var _default = app;
exports["default"] = _default;