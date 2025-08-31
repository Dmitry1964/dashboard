import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://nosdm64:ichbeen1964@cluster0.b9enozc.mongodb.net/DN_BASE?retryWrites=true&w=majority&appName=Cluster0')
        console.log('База подключена');
        app.listen(port, () => {
            try {
               console.log('Сервер ОК');
                
            } catch (error) {
                console.log('Ошибка сервера');
                
            }
        })
    } catch (error) {
        console.log(error)
    }
}

start();