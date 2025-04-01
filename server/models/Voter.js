import mongoose, { Schema } from "mongoose";


const VoterSchema = new Schema({
    voterId: { type: String, required: true, unique: true },
    epicNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true, default: Date.now},
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    constituency: { type: String, required: true },
    electionType: { type: String, required: true },
    votingPhase: { type: String, required: true },
    statusTimeline: {
        step: { type: Number, required: true, default: 0 },
        date: { type: Date, required: true, default: Date.now},
        time: { type: String, required: true, default: () => new Date().toLocaleTimeString("en-US", { hour12: false }) },
        status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
    },
});


export const Voter = mongoose.model("Voter", VoterSchema);