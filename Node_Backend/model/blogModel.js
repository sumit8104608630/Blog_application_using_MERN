const mongoose=require("mongoose");


const blogSchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  blogImage:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true,
    index:true
  },
  date:{
    type:String,
    required:true
  },
  Content:{
    type:String,
    required:true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
    index:true,
  },
  likeCount:{
    type:Number,
    default:0,
    index:true,
  }
  
},{
    timestamps:true
})

// creating model for interaction with database
const  blog=mongoose.model("blog",blogSchema);
//let export the model
module.exports=blog;
