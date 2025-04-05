import mongoose, { Schema } from "mongoose";

const issueSchema = new Schema({
    epic: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    issue: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Issue", issueSchema);
