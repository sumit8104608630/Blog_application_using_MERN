const mongoose=require("mongoose");
const {setUser}=require("../service/auth")
const {createHmac,randomBytes} = require('node:crypto');



// creating schema for user database handling 


const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    salt:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:"User-Avatar.png",
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    },
    
},{timestamps:true});


userSchema.pre("save",function(next){
    const user=this;
    if(!user.isModified("password")){
        return
    }
    const salt=randomBytes(16).toString().trim()
    const hashAlgorithm=createHmac("sha256",salt).update(user.password).digest("hex")
    this.salt=salt
    this.password=hashAlgorithm
    next()
})

userSchema.static("matchPasswordGenerateToken",async function(email,password){
    const user=await this.findOne({email})
    if(!user)return new Error("user does not exist");
    const salt=user.salt;
    const hashAlgorithm=createHmac("sha256",salt).update(password).digest("hex");
    if(hashAlgorithm!=user.password){
        return throws ("password is incorrect please enter the right password")
    }
    const token=setUser(user);
    return token;

})  
 
 


const User=mongoose.model("user",userSchema);

module.exports=User;
