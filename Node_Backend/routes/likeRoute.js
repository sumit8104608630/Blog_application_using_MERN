const express=require("express");
const likeRouter=express.Router();
const {getLikeByPostId}=require("../controller/likeController.js");
//creating route for like 
likeRouter.post("/like/:id",getLikeByPostId);
// exporting likeRouter 
module.exports=likeRouter;

