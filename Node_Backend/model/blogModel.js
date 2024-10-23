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
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  Content:{
    type:String,
    required:true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }

},{
    timestamps:true
})

// creating model for interaction with database
const  blog=mongoose.model("blog",blogSchema);
//let export the model
module.exports=blog;
