import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const BASE_USER = process.env.BASE_USER;
const BASE_PASSWORD = process.env.BASE_PASSWORD;
const BASE_NAME = process.env.DN_BASE;


// Middleware

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: "all right"})
})

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${BASE_USER}:${BASE_PASSWORD}@cluster0.b9enozc.mongodb.net/${BASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('База подключена');
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

start();