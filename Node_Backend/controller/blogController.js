const { model } = require("mongoose");
const blog=require("../model/blogModel.js")
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
    // it will create data collection in mongodb
    const create_blog={
        title,
        blogIMage:blog_image_url.url,
        type, 
        date, 
        Content:req.body.content,
        author:req.user._id,
    }
    console.log(create_blog)
    res.status(202).json({
        message:"Blog created successfully",
    })
 }
 catch(error){
    return res.status(404).json({message:error.message})
 }



}


// exporting all function

module.exports={
    add_postFunction
}