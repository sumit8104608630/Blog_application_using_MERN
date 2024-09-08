const jwt=require("jsonwebtoken")
const secret="sumit@blog_app258";


function setUser(user){
    const payload={
        id:user._id,
        name:user.fullName,   
        email:user.email,
        profileImage:user.profileImage,
        role:user.role,     
    }; 
    const token=jwt.sign(payload,secret);
    return token
}

async function getUser(token){
    if(token){
        const payload=await jwt.verify(token,secret)
        return payload
    }
    else{
        return null
    }
} 

module.exports={
    setUser,
    getUser
} 