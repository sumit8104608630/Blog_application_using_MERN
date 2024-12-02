const like=require("../model/likeModel.js");
// also updating to blog data
const blog=require("../model/blogModel.js");



// creating functionality with post id 
const getLikeByPostId=async (req,res)=>{
    try{
        const user_id=req.user._id;
        const post_id=req.params.id;
        if(!user_id){
            return res.status(400).json({message:"User not found"})
        }
           
        if(!post_id){
            return res.status(400).json({message:"Post not found"})
        }

        const blog_present=await blog.findById(post_id);
        if(!blog_present){
            return res.status(404).json({message:"Blog not found"});
        }

        const likeExist=await like.findOne({userId:user_id,postId:post_id});
        if(likeExist){
            await like.deleteOne({userId:user_id,postId:post_id});
            await blog.findByIdAndUpdate(post_id,{$inc:{likeCount:-1}});
           return res.status(200).json({message:"user unlike successfully",});
        }
        else{
            await like.create({userId:user_id,postId:post_id});
            await blog.findByIdAndUpdate(post_id,{$inc:{likeCount:+1}});
            return res.status(200).json({message:"user liked successfully"})
        }
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

//get all likes 
const getAllLikes=async (req,res)=>{
    try{
        const likes=await like.find();
        res.status(200).json(likes);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports={
    getLikeByPostId,
    getAllLikes
}
