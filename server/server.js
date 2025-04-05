import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

dotenv.config();
// console.log(`Hello : ${process.env.MONGODB_URI}`);

mongoose.connect(`${process.env.MONGODB_URI}/civic`)
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
import { bookSlot, getAllSlots, getIssues, getVoterById, searchVoters, submitIssue } from "./controllers/voter.controller.js";
import { updateStatusTimeline } from "./controllers/admin.controller.js";


app.use('/api/user/', userRouter);

// Voter - Routes
app.get('/api/getvoter/:id', getVoterById);

app.get('/api/voter/search', searchVoters);

app.get('/api/issues', getIssues);

app.post('/api/issues', submitIssue);

app.get('/api/slots', getAllSlots);

app.post('/api/book-slot', bookSlot);


// Admin - Routes
app.post('/api/update-status', updateStatusTimeline);


app.get('/', async (req, res) => {
    res.send("Server is running");
});


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));