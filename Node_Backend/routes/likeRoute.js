const express=require("express");
const likeRouter=express.Router();
const {getAllUserLike,createLike}=require("../controller/likeController.js");
//creating route for like 

likeRouter.get("/all_like/:id",getAllUserLike);
likeRouter.post("/like",createLike);
likeRouter.post("/like/:id");
// exporting likeRouter 
module.exports=likeRouter;

