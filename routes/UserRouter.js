const Users = require("../models/UserModel");
const UserController = require("../controllers/user-controller");
const router = require("express").Router();

router.post("/register", UserController.register);

module.exports = router;
