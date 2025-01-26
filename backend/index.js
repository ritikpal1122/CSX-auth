import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
});

const app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
console.log(`server is running on port ${PORT}`)
})
