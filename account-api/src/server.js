import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import accountRouter from './routes/account-routes.js';
import { MONGO_CONFIG } from './config/mongo-config.js'
import RabbitMQSetup from './provider/rabbitmq-setup.js';

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(accountRouter);

app.listen(SERVER_PORT, async () => {
    await mongoose.connect(MONGO_CONFIG.DB_CONTEXT);
    await RabbitMQSetup.init();
    console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});