"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IndexController = _interopRequireDefault(require("../controllers/indexControllers/IndexController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/products", _IndexController["default"].getAllproducts);
router.post("/products/add", _IndexController["default"].postProducts);
router.post("/products/update", _IndexController["default"].updateProducts);
router.get("/products/admin", _IndexController["default"].getAllproductsbyAdmin);
router.post("/auth/createuser", _IndexController["default"].createUser);
router.post("/auth/loginuser", _IndexController["default"].loginUser);
router.post("/auth/updateuser", _IndexController["default"].updateUser);
router.get("/dashboard_folders", _IndexController["default"].getAllDashBoardFolders);
router.get("/dashboard_folders/admin", _IndexController["default"].getAllDashBoardsFoldersforAdmin);
router.post("/dashboard_folders/add", _IndexController["default"].postDashBoardFolders);
router.post("/dashboard_folders/update", _IndexController["default"].updateDashBoardFolders);
router.get("/dashboards", _IndexController["default"].getAllDashBoards);
router.get("/dashboards/admin", _IndexController["default"].getAllDashBoardsforAdmin);
router.post("/dashboards/add", _IndexController["default"].postDashBoard);
router.post("/dashboards/update", _IndexController["default"].updateDashBoard);
var _default = router;
exports["default"] = _default;