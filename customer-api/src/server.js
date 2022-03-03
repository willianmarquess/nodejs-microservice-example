import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import express from 'express';
import { MONGO_CONFIG } from './config/mongo-config.js';
import customerRouter from './routes/customer-routes.js';
import RabbitMQSetup from './provider/rabbitmq-setup.js';

const { SERVER_PORT } = process.env;

const app = express(); 

app.use(express.json());  
app.use(customerRouter);

app.listen(SERVER_PORT, async () => { 
    await mongoose.connect(MONGO_CONFIG.DB_CONTEXT);
    await RabbitMQSetup.init();
    console.log(`Server is running on: http://localhost:${SERVER_PORT}`); 
});
