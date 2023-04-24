import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
const port = 8080;

dotenv.config();

const app = express();

//middleware //

app.use(cors());

app.use(express({ limit: "50mb" })); // middleware limits //

app.get("/", async (req, res) => {
  res.send("hello backend");
});


const serverStart = async () => {
  app.listen(port,async()=>{
    console.log(`the backend has been started on port ${port} `)
  })
};


serverStart();