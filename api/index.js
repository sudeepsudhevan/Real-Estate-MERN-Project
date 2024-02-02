import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB!!!');
}).catch((err) => {
    console.log(err);
})

app.use("/api/user", userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})