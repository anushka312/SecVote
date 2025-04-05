import mongoose from "mongoose";

const SlotSchema = new mongoose.Schema({
    slot: {
        type: String,
        required: true,
        unique: true,
    },
    registrationCount: {
        type: Number,
        required: true,
        default: 0,
    },
});

export const Slot = mongoose.model("Slot", SlotSchema);
