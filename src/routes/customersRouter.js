const express = require("express");

const router = express.Router();
const customerController = require("../app/controllers/CustomerController");

router.post("/register", customerController.register);
router.get("/", customerController.getList);

module.exports = router;
