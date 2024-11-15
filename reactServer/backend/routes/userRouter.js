const express = require("express")
const {getallusers,signup} = require("../controllers/userController")

const userRouter = express()

//api

//signup
userRouter.post("/signup",signup)

// get users
userRouter.get("/all",getallusers)

module.exports = { userRouter }