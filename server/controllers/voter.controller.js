import Request from "../models/Request.js";
import { Voter } from "../models/Voter.js";


const getVoterById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "Voter ID or EPIC Number is required." });
        }

        // Find voter by unique epicNumber
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

        const searchRegex = new RegExp(query, "i"); // Case-insensitive search

        // Search Parameters
        const searchConditions = {
            $or: [
                { name: searchRegex },
                { voterId: searchRegex },
                { epicNumber: searchRegex },
            ]
        };
        // Fetch matching voters
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

        const newRequest = await Request.create({ epic, name, email, issue });
        res.status(201).json({ message: "Issue submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getIssues = async (req, res) => {
    try {
        const issues = await Request.find().sort({ createdAt: -1 }); // Fetch latest issues first
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export {
    searchVoters,
    getVoterById,
    submitIssue,
    getIssues
}