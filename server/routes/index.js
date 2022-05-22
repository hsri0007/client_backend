
const express = require("express");

const router = express.Router();
const IndexControllers = require("../controllers/indexControllers/indexController");

router.get("/products", IndexControllers.getAllproducts);
router.post("/users/verify", IndexControllers.verifyuserToken);
router.post("/products/add", IndexControllers.postProducts);
router.post("/products/update", IndexControllers.updateProducts);
router.get("/products/admin", IndexControllers.getAllproductsbyAdmin);
router.post("/auth/createuser", IndexControllers.createUser);
router.post("/auth/loginuser", IndexControllers.loginUser);
router.post("/auth/updateuser", IndexControllers.updateUser);
router.get("/dashboard_folders", IndexControllers.getAllDashBoardFolders);
router.get("/dashboard_folders/admin", IndexControllers.getAllDashBoardsFoldersforAdmin);
router.post("/dashboard_folders/add", IndexControllers.postDashBoardFolders);
router.post("/dashboard_folders/update", IndexControllers.updateDashBoardFolders);
router.get("/users/admin", IndexControllers.getUsersforAdmin);
router.post("/users/update", IndexControllers.updateUser);
router.get("/dashboards", IndexControllers.getAllDashBoards);
router.get("/dashboards/admin", IndexControllers.getAllDashBoardsforAdmin);
router.post("/dashboards/add", IndexControllers.postDashBoard);
router.post("/dashboards/update", IndexControllers.updateDashBoard);

module.exports= router;