const express=require("express");
const blogRoute=express.Router();
const path =require("path")
const {upload}=require("../middleWare/multer.middleware.js")
const {add_postFunction,postLike_blog} =require("../controller/blogController.js")
const {blog_image_upload} =require("../middleWare/multer.middleware.js")



// setting the static path for blog image
blogRoute.use(express.static(path.resolve('./public')))
upload


blogRoute.post("/add_post",blog_image_upload.single("image"),add_postFunction);
blogRoute.post("/like",postLike_blog);

 

module.exports= blogRoute
