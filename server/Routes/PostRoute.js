
import  express, { application }  from 'express';
import *as dotenv from 'dotenv';
import {v2  as cloudinary } from "cloudinary";
import Post from '../dataBases/Models/Post.js';

dotenv.config();
const router=express.Router();
 
router.route('/').get((req,res)=>{
    res.send('connect to backend with Post - Routes ');
})

export default router;