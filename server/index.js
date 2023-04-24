import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import connectDB from "./dataBases/connect.js";
import PostRoutes from "./Routes/PostRoute.js"
import DallERoutes from "./Routes/DallERoutes.js"


const port = 8080;

dotenv.config();


const app = express();

//middleware //

app.use(cors());

app.use(express({ limit: "50mb" })); // middleware limits //

//api end points routes //
app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',DallERoutes);

// to check the backend server started or not //
app.get("/", async (req, res) => {
  res.send("hello backend");
});


const serverStart = async () => {
 
    try{
        connectDB(process.env.MONGODB_URL);

        app.listen(port,()=>{ console.log('server has started on https://localhost:8080') })
    }catch(error) {
    alert(`{error}`);
    }
};


serverStart();