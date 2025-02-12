import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

dotenv.config({path: './.env'})

mongoose
    .connect(`${process.env.MONGOBD_URI}/civic`)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());


import userRouter from './routes/user.routes.js'


app.use('/api/user/', userRouter)


app.get('/', async (req, res) => {
    res.send("Server is running");
});


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));