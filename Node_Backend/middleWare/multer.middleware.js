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

const upload=multer({storage:storage});
module.exports= upload  