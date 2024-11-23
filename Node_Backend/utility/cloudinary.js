require('dotenv').config();  // This should be the first line
const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");



cloudinary.config({ 
    cloud_name: 'dcsmp3yjk', 
        api_key: '739581534633893', 
        api_secret: 'Fw_5j7w56Q0lhJ7hRClTFoDg-SA'  // Click 'View API Keys' above to copy your API secret
});

require('dotenv').config();
// console.log('Cloud Name:', process.env.CLOUD_NAME);
// console.log('API Key:', process.env.API_KEY);
// console.log('API Secret:', process.env.API_SECRET);






// Uploading a file to Cloudinary
const uploadFile = async (localFilePath) => {
    try {
        console.log(localFilePath)
        if (!localFilePath) return "Please provide a local file path.";
        
        // Upload to Cloudinary
        const uploaded = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        console.log("Cloudinary upload successful. URL:", uploaded.url);
        return uploaded;
    } catch (error) {
        console.error("Cloudinary upload error:", error); 
        
        // Optional: Remove the file locally if the upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); 
            console.log("Local file deleted due to upload error.");
        }
    }
};

// Test the function with a file path
//uploadFile("../public/upload/1732351301170-WhatsApp, Image 2024-03-26 at 19.08.03_ab179175.jpg");




module.exports={uploadFile}
