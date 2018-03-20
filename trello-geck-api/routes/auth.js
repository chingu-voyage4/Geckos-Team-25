const express = require("express");
const users = require("../controllers/userController");
const authRouter = express.Router();


//Users auth
authRouter.post("/login",users.login);
//authRouter.post("/logout",users.logout);

module.exports = authRouter;