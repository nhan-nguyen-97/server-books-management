const express = require("express");

const router = express.Router();
const authorController = require("../app/controllers/AuthorController");

router.post("/create", authorController.create);
router.put("/update/:id", authorController.update);
router.delete("/delete/:id", authorController.delete)
router.get("/", authorController.getList);

module.exports = router;
