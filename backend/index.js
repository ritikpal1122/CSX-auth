import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
});




const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, ()=>{
console.log(`server is running on port ${PORT}`)
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});