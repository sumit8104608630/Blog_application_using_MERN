const mongoose=require("mongoose");

// creating model for comment
const commentSchema=new mongoose.Schema({
    text:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    }
},{
    timestamps:true
});

// creating model for comment
const Comment=mongoose.model("comment",commentSchema);
// exporting model for data manipulation
module.exports=Comment;
