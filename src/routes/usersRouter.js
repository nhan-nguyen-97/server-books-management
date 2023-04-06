const express = require("express");

const router = express.Router();
const userController = require("../app/controllers/UserController");

router.post("/login", userController.login);
router.get("/profile/:id", userController.profile);
router.put("/profile/update/:id", userController.updateProfile);
router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);
// router.put("/profile/changePassword", userController.changePassword);
router.get("/", userController.getList);

module.exports = router;
