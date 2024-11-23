const express=require("express");
const blogRoute=express.Router();
const path =require("path")
const {upload}=require("../middleWare/multer.middleware.js")
const {add_postFunction} =require("../controller/blogController.js")




// setting the static path for blog image
blogRoute.use(express.static(path.resolve('./public')))
upload


blogRoute.post("/add_post",add_postFunction)



module.exports= blogRoute
