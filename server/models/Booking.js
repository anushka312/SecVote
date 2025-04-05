import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    voterId: { type: String, required: true, unique: true },
    slot: { type: String, required: true },
    bookedAt: { type: Date, default: Date.now }
});

export const Booking = mongoose.model("Booking", BookingSchema);
