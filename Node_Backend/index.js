const express=require("express")
const mongoose=require("mongoose")
const {connect}=require("./connect")
const User=require("./model/userModel")
const app=express();
require('dotenv').config();
const userRoute=require("./routes/userRoute")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const {checkAuthenticationCookie}=require("./middleWare/auth")
// if you are using different port for backend and frontend you need to add middleWare cors 
app.use(cors({
  origin: 'http://localhost:5173', // Update with your client’s origin
  credentials: true,
}));

app.use(cookieParser());
 
// port of server 
const port=process.env.PORT_NO||800;  
// all requirement or you can say uses 
app.use(express.json());
//check authentication 
app.use(checkAuthenticationCookie("token"));
// all router which will use app.use("/user",userRoute);
app.use("/user",userRoute);


app.get("/user/author",(req,res)=>{ 
  res.json({
    "user":req.user 
    })
}) 
 
connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{  
    console.log("Error connecting to MongoDB",err)
})


app.listen(port,()=>{console.log(`server is running at port ${port}`)})