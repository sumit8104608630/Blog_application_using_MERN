const { model } = require("mongoose");
const blog=require("../model/blogModel.js")
const {uploadFile}=require("../utility/cloudinary.js")
const path=require("path");



// writing controller for creating blog 

const add_postFunction=async(req,res,next)=>{
 try{
    if(!req.body){
        return res.status(400).json({message:"Please provide all the fields"})
    }
    const {title,type,date,Content,}=req.body;


 }
 catch(error){
    return res.status(400).json({message:error.message})
 }



}


// exporting all function

module.exports={
    add_postFunction
}