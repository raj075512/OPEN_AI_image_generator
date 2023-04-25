import express from "express";
import cors from "cors";
// import mongoose from "mongoose";
import * as dotenv from "dotenv";
import connectDB from "./dataBases/connect.js";
import PostRoutes from "./Routes/PostRoute.js"
import DallERoutes from "./Routes/DallERoutes.js"



dotenv.config();


const app = express();

//middleware //

app.use(cors());

app.use(express.json({ limit: '50mb' })); // middleware limits //

//api end points routes //
app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',DallERoutes);

// to check the backend server started or not //
app.get('/', async (req, res) => {
  res.send("hello backend");
});


const serverStart = async () => {
 
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('server has started ,live on https://localhost:8080') )
    }catch(error) {
    alert(`mongodb is not connected with {error}`);
    }
};


serverStart();