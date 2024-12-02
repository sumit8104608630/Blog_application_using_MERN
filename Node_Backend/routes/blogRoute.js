const express=require("express");
const blogRoute=express.Router();
const path =require("path")
const {upload}=require("../middleWare/multer.middleware.js")
const {add_postFunction,get_all_blogs,get_all_blogs_by_like,get_all_blogs_by_user} =require("../controller/blogController.js")
const {blog_image_upload} =require("../middleWare/multer.middleware.js")



// setting the static path for blog image
blogRoute.use(express.static(path.resolve('./public')))
upload


blogRoute.post("/add_post",blog_image_upload.single("image"),add_postFunction);
blogRoute.get("/all_blog",get_all_blogs);
blogRoute.get("/all_blog_authenticated",get_all_blogs_by_user)
blogRoute.get("/all_blog_by_like",get_all_blogs_by_like);

 

module.exports= blogRoute
