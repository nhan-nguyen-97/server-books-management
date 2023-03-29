const express = require("express");

const router = express.Router();
const bookController = require("../app/controllers/BookController");

router.get("/", bookController.getList)

module.exports = router