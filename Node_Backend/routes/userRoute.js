const express=require("express");
const userRoute=express.Router();
const User=require("../model/userModel");
const {registerUser,login}=require("../controller/userController")


userRoute.post("/register",registerUser)
userRoute.post("/login",login);

module.exports=userRoute ;