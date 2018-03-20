const express = require("express");
const users = require("../controllers/userController");
const userRouter = express.Router();


//Users register
userRouter.post("/register",users.saveUser);
module.exports = userRouter;