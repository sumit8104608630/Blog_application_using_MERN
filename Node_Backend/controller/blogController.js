const { model } = require("mongoose");
const blog=require("../model/blogModel.js")
const User = require("../model/userModel.js");
const {uploadFile}=require("../utility/cloudinary.js")
const path=require("path");



// writing controller for creating blog 

const add_postFunction=async(req,res,next)=>{
//console.log(req.user);
//console.log(req.body);    
 try{
    if(!req.body){
        return res.status(400).json({message:"Please provide all the fields"})
    } 

    const {title,type,date,Content,}=req.body;

    const blogImageFile=req.file.filename
    if(!blogImageFile){
        return res.status(400).json({message:"Please provide an image"})
    }

    // it is used for setting the directory
    const local_path=path.join(__dirname,`../public/blog_images/${blogImageFile}`)

    const blog_image_url=await uploadFile(local_path);
    if(!blog_image_url){
        return res.status(400).json({message:"Failed to upload image"})
    }
    // it will create data collection in mongodb
    const create_blog={
        title,
        blogImage:blog_image_url.url,
        type, 
        date, 
        Content:req.body.content,
        author:req.user._id,
    }
   // console.log(create_blog)
    // let's now put this data in database in mongodb
    const blog_data=await blog.create(create_blog)
    console.log(blog_data)
    res.status(202).json({
        message:"Blog created successfully",
        blog_data
    })
 }
 catch(error){
    return res.status(404).json({message:error.message})
 }



}
// getting all post for ui representation

const get_all_blogs_by_like=async(req,res)=>{
    try{
        const  blogs=await blog.find().populate('author',"-password -email").sort({likeCount:-1});
        if(!blogs || blogs.length===0){
            return res.status(404).json({message:"No blogs found"})
        }
        res.status(200).json({blogs})
    }
    catch(error){
        return res.status(404).json({message:error.message})
    }
}

const get_all_blogs=async(req,res)=>{
    try{
       all_blogs=await blog.find()
        .populate('author',"-password -email") // Populate user details in the blog
      if(!all_blogs || all_blogs.length===0){
        return res.status(404).json({message:"No blogs found"})
      }
      res.status(200).json({all_blogs})
    }
    catch(error){
        return res.status(404).json({message:error.message})
    }
}


//getting all blog of authenticated user
const get_all_blogs_by_user=async(req,res)=>{
    try{
        const user_id =req.user._id;
        const blogs=await blog.find({author:user_id}).populate("author","-password -email");
        if(!blogs || blogs.length===0){
            return res.status(404).json({message:"No blogs found"})
        }
        res.status(200).json({blogs})
    }
    catch(error){
        return res.status(504).json({message:error.message})
    }
}



// exporting all function

module.exports={
    add_postFunction,
    get_all_blogs_by_like,
    get_all_blogs,
    get_all_blogs_by_user
}