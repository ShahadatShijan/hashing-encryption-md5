const express = require("express");
const { homePage, createUser, loginuser, } = require("../controllers/user.controller");
const router = express.Router();


router.get("/", homePage);
router.post("/register", createUser);
router.post("/login", loginuser)

module.exports = router;