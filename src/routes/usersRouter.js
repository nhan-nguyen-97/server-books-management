const express = require("express");

const router = express.Router();
const userController = require("../app/controllers/UserController");

router.get("/", userController.getList)

module.exports = router