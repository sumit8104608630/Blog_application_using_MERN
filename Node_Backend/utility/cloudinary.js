const { v2: cloudinary } = require("cloudinary");
const fs=require("fs");


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRETE, // Click 'View API Keys' above to copy your API secret
});




// uploading a folder of image 
const uploadFile=async(localFilePath)=>{
    try{
    if(!localFilePath){return("please provide local file path");}
    const uploaded=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto",
    })
    console.log("response",uploaded.url)
    return uploaded;
    }
    catch(error){
        fs.unlinkSync(localFilePath)// remove locally save temporary file 
        console.log(error.message);
    }
}




module.exports= {
    uploadFile
}