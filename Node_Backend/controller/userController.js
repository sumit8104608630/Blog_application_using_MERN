const User=require("../model/userModel")
const {uploadFile}=require("../utility/cloudinary.js")
const path=require("path");



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
            secure:true,
        });
        res.status(200).json({ message: 'successful' });
    } catch (error) {
        console.log(error); // Log error for debugging
        res.status(400).json({ message: 'Invalid email or password' });
    }
}

async function uploadPhoto(req, res){
   // console.log(req.file.filename)
let {userName}=req.body;
//console.log(req.body.userName,req.file.filename)

if(userName==""){
    userName=req.user.userName
} 
const email=req.user.email;
try{
    console.log(req.file)
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
   // console.log(`../public/upload/${req.file.filename}`)

   
const local_path=path.join(__dirname,`../public/upload/${req.file.filename}`)
const upload=await uploadFile(local_path);
console.log(upload.secure_url)
 await User.updateOne({
    email:email
 },   
{$set:{
        userName:userName,
        profileImage:`${upload.secure_url}` 
      }
}).then((result)=>{
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