const mongoose=require("mongoose")

function connect(url){
   return mongoose.connect(url.trim())
}


module.exports={connect};