const express = require("express");

const router = express.Router();
const bookController = require("../app/controllers/BookController");

router.post("/create", bookController.create);
router.put("/update/:id", bookController.update);
router.delete("/delete/:id", bookController.delete);
router.get("/", bookController.getList);

module.exports = router;
