import { Booking } from "../models/Booking.js";
import Issue from "../models/Request.js";
import { Slot } from "../models/Slot.js";
import { Voter } from "../models/Voter.js";

const getVoterById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Voter ID or EPIC Number is required." });
    }
    const voter = await Voter.findOne({ epicNumber: id });
    if (!voter) {
      return res.status(404).json({ error: "Voter not found." });
    }
    res.status(200).json({ voter });
  } catch (error) {
    console.error("Error fetching voter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const searchVoters = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || query.trim() === "") {
      return res.status(400).json({ error: "Search query cannot be empty." });
    }
    const searchRegex = new RegExp(query, "i");
    const searchConditions = {
      $or: [
        { name: searchRegex },
        { voterId: searchRegex },
        { epicNumber: searchRegex },
      ],
    };
    const voters = await Voter.find(searchConditions);
    res.status(200).json({ voters });
  } catch (error) {
    console.error("Error searching voters:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const submitIssue = async (req, res) => {
  try {
    const { epic, name, email, issue } = req.body;
    if (!epic || !name || !email || !issue) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newIssue = await Issue.create({ epic, name, email, issue });
    res.status(201).json({ message: "Issue submitted successfully!" });
  } catch (error) {
    console.error("Error in submitIssue:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    // Return the issues as stored (only the fields defined in the schema)
    res.status(200).json(issues);
  } catch (error) {
    console.error("Error fetching issues:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllSlots = async (req, res) => {
    try {
        const slots = await Slot.find().sort({ slot: 1 }); // sort chronologically
        res.status(200).json({ slots });
    } catch (error) {
        console.error("Error fetching slots:", error);
        res.status(500).json({ message: "Failed to fetch slots" });
    }
};


export const bookSlot = async (req, res) => {
    const { voterId, slot } = req.body;
    try {
        // Check if user already booked
        const existing = await Booking.findOne({ voterId });
        if (existing) {
            return res.status(400).json({ message: "Voter has already booked a slot." });
        }

        // Check slot capacity
        const selectedSlot = await Slot.findOne({ slot });
        if (!selectedSlot) return res.status(404).json({ message: "Slot not found." });

        if (selectedSlot.registrationCount >= 50) {
            return res.status(400).json({ message: "Slot is already full." });
        }

        // Book the slot
        await Booking.create({ voterId, slot });

        // Increment slot count
        selectedSlot.registrationCount += 1;
        await selectedSlot.save();

        res.status(201).json({ message: "Slot booked successfully." });
    } catch (err) {
        console.error("Booking error:", err);
        res.status(500).json({ message: "Server error." });
    }
};



export {
    searchVoters,
    getVoterById,
    submitIssue,
    getIssues,

    getAllSlots
};
