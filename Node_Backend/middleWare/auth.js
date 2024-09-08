const {getUser} =require("../service/auth");

const User =require("../model/userModel");


// create function which check the authentication

function checkAuthenticationCookie(cookieName){
    return async function (req,res,next) {
        const cookie=req.cookies[cookieName];
        if(cookie){
            const user=await getUser(cookie);
            const currentUserDetail=await  User.findById(user.id).select("-password").select("-salt");
           // req.user=currentUserDetail
            res.json({
            "user":currentUserDetail
            }) 
            console.log()
            return next()
        }
        else{
            return next()
        }
    }

}
module.exports={
    checkAuthenticationCookie
} 