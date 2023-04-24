// Format of post schema //
import mongoose from "mongoose";


 const PostModels=new mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    prompt : {
        type:String,
        required:true,
    },
    photo:{
        type:String ,
        required:true,
    },
 })

 const PostSchema=mongoose.model('PostModels',PostModels);
 export default PostSchema;
