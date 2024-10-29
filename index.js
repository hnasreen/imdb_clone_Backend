import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js'
import connectdb from './db.js'
import cors from 'cors'
import morgan from 'morgan'
// import path from 'path';
// import { fileURLToPath } from 'url';

const app=express();
dotenv.config()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}));

app.use(express.json())
app.use(morgan('dev'))

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',authRoutes)
connectdb();
app.get('/',(req,res)=>{
res.send("<h1>BackEnd</h1>")
})
const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log('Application is running on the port:',PORT)
})

