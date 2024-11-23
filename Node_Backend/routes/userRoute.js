const express=require("express");
const userRoute=express.Router();
//const User=require("../model/userModel");
const {registerUser,login,uploadPhoto,logOut}=require("../controller/userController")
const path=require("path");
const multer =require ("multer");
const upload =require("../middleWare/multer.middleware")



userRoute.use(express.static(path.resolve('./public')))
 upload



userRoute.post("/register",registerUser)
userRoute.post("/login",login);
userRoute.post("/upload",upload.single("profilePhoto"),uploadPhoto)// middleware is just use before the url 
userRoute.get("/logout",logOut);

module.exports=userRoute ;