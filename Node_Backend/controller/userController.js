const User=require("../model/userModel")
const uploadFile=require("../utility/cloudinary.js")



async function registerUser(req,res){
    const {userName,email,password}=req.body;
    try{
        const userExist=await User.create({
            userName,email,password
        });
        res.status(202).json({message:"successful"})
        console.log(userExist)
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    console.log(req.user)
    try {
        const token = await User.matchPasswordGenerateToken(email, password);
        console.log(token);
        // Set the token in the cookie with proper options
        res.cookie('token', token, {
            httpOnly: true, // Prevent client-side JavaScript access
            // 1 day
        });
        res.status(200).json({ message: 'successful' });
    } catch (error) {
        console.log(error); // Log error for debugging
        res.status(400).json({ message: 'Invalid email or password' });
    }
}

async function uploadPhoto(req, res){
let {userName}=req.body;
if(userName==""){
    userName=req.user.userName
} 
const email=req.user.email;
try{
const upload=await uploadFile(req.file.filename)
 await User.updateOne({
    email:email
 },
{$set:{userName:userName,profileImage:`${upload.url}`}}).then((result)=>{
    res.status(200).json({message:"profile updated successfully",result:result})
}).catch((err)=>{
    res.status(400).json({message:err.message})
})
}catch(err){
    res.status(400).json({message:err.message});
}
}

async function logOut(req,res){
   res.clearCookie('token')
   res.send("token");
}

module.exports={
    registerUser,
    login,
    uploadPhoto,
    logOut
}