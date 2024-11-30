const like=require("../model/likeModel.js");
// also updating to blog data
const blog=require("../model/blogModel.js");


// writing a function for getting all like for specific user by user id

const getAllUserLike=async (req,res)=>{
    try{
        const user_id=req.user._id;
        if(!user_id){
            return res.status(400).json({message:"User not found"})
        }
        const like=await like.find({userId:user_id});
        res.status(200).json({like:like});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
//creating like functionality whenever user like it will run this function 
const createLike=async (req,res)=>{
    try{
        const {user_id,post_id}=req.body;
        if(!user_id||!post_id){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        // creating like or you can say adding to database 
        const like=await like.create({userId:user_id,postId:post_id});
        // also updating blog model like array 


        res.status(201).json({message:"Like created successfully"});


    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

// creating functionality with post id 
const getLikeByPostId=async (req,res)=>{
    try{
        const user_id=req.user._id;
        const post_id=req.params.postId;
        if(!user_id){
            return res.status(400).json({message:"User not found"})
        }
        const likeExist=await like.findOne({userId:user_id,postId:post_id});
        if(likeExist){
            await like.deleteOne({userId:user_id,postId:post_id});
            await blog.findByIdAndUpdate(post_id,{$inc:{likeCount:-1}});

        }
        else{
            const like=await like.create({userId:user_id,postId:post_id});
        }
        res.status(200).json({message:"Like created successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const getAllLikeOfSpecificPost=async(req,res)=>{
    try{
        const {post_id}=req.body;
        const like=await like.find({postId:post_id});
        res.status(200).json({like:like});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports={
    getAllUserLike,
    createLike
}
