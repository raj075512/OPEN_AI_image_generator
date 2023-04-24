import mongoose from "mongoose";
//used for search fucnionalty //

const connectDB =(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
    .then(()=>console.log('mongoDB connect '))
    .catch((err)=>console.log(`mongoDB disconnected  ,${err} `))

}

export default connectDB;



