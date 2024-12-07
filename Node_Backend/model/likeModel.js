const mongoose=require("mongoose")

// let's create mode for like for better abroach

const likeSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        index:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog",
        index:true
    }
},{
    timestamps:true,
})
// creating a model for manipulation 
const like=mongoose.model("like",likeSchema);
// export the model
module.exports=like