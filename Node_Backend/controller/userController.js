const User=require("../model/userModel")

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

module.exports={
    registerUser,
    login
}