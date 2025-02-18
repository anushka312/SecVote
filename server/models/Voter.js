import mongoose, { Schema } from "mongoose";


const VoterSchema = new Schema({
    voterid: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    parentname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    electoralregistration: {
        type: {
            address: {
                type: String,
                required: true,
            },
            office: {
                type: String,
                required: true,
            },
            constituency: {
                type: String,
                required: true,
            },
            pincode: {
                type: Number,
                required: true,
            }
        },
        required: true,
    },
    address: {
        type: {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            pincode: {
                type: Number,
                required: true,
            },
            country: {
                type: String,
                required: true,
            }
        },
        required: true,
    }
});

export const Voter = mongoose.model("Voter", VoterSchema);