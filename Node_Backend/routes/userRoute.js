const express=require("express");
const userRoute=express.Router();
const User=require("../model/userModel");
const {registerUser,login,uploadPhoto,logOut}=require("../controller/userController")
const path=require("path");
const multer =require ("multer");


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("./public/upload"))
    },
    filename:function(req,file,cb){
        const filename=`${Date.now()}-${file.originalname}`
        cb(null,filename)
    }

})

userRoute.use(express.static(path.resolve('./public')))
const upload=multer({storage:storage});



userRoute.post("/register",registerUser)
userRoute.post("/login",login);
userRoute.post("/upload",upload.single("profilePhoto"),uploadPhoto)
userRoute.get("/logout",logOut);

module.exports=userRoute ;