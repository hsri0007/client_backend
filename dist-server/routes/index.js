"use strict";

var express = require("express");

var router = express.Router();

var IndexControllers = require("../controllers/indexControllers/indexController");

router.get("/products", IndexControllers.getAllproducts);
router.get("/users/verify", IndexControllers.verifyuserToken);
router.get("/reset", IndexControllers.resetToken);
router.post("/products/add", IndexControllers.postProducts);
router.post("/products/update", IndexControllers.updateProducts);
router.get("/products/admin", IndexControllers.getAllproductsbyAdmin);
router.post("/auth/createuser", IndexControllers.createUser);
router.post("/auth/loginuser", IndexControllers.loginUser);
router.post("/auth/updateuser", IndexControllers.updateUser);
router.post("/auth/updatepass", IndexControllers.updatePass);
router.post("/auth/updatepassbyemail", IndexControllers.updatePassbyemail);
router.get("/dashboard_folders", IndexControllers.getAllDashBoardFolders);
router.get("/dashboard_folders/admin", IndexControllers.getAllDashBoardsFoldersforAdmin);
router.post("/dashboard_folders/add", IndexControllers.postDashBoardFolders);
router.post("/dashboard_folders/update", IndexControllers.updateDashBoardFolders);
router.get("/users/admin", IndexControllers.getUsersforAdmin);
router.post("/users/update", IndexControllers.updateUser);
router.get("/dashboards", IndexControllers.getAllDashBoards);
router.get("/dashboards/:id", IndexControllers.getSingleDashBoards); // router.get("/dashboards/admin", IndexControllers.getAllDashBoardsforAdmin);

router.post("/dashboards/add", IndexControllers.postDashBoard);
router.post("/dashboards/update", IndexControllers.updateDashBoard);
module.exports = router;