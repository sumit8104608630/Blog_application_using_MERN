const express=require("express");
const likeRouter=express.Router();
const {getLikeByPostId,getAllLikes}=require("../controller/likeController.js");
//creating route for like 
likeRouter.post("/like/:id",getLikeByPostId);
likeRouter.get("/all_like",getAllLikes)
// exporting likeRouter 
module.exports=likeRouter;

