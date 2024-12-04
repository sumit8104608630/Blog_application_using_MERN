const multer=require("multer");
const path=require("path");



// middleware for file upload in multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("./public/upload"))
    },
    filename:function(req,file,cb){
        const filename=`${Date.now()}-${file.originalname}`
        cb(null,filename)
    }
 
}) 


//middleware for file uploading in different folder blogImage
const blog_storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("./public/blog_images"))
    },
    filename:function(req,file,cb){
        const filename=`${Date.now()}-${file.originalname}`
        cb(null,filename)
    }
 
})


const upload=multer({storage:storage})
const blog_image_upload=multer({storage:blog_storage})
module.exports={ upload,blog_image_upload }