import { Voter } from "../models/Voter.js";

export const updateStatusTimeline = async (req, res) => {
    try {
        const { voterId, statusTimeline } = req.body;
        if (!voterId || !statusTimeline) {
            return res.status(400).json({ error: "voterId and statusTimeline are required." });
        }

        // Validate all fields inside statusTimeline
        const { step, date, time, status } = statusTimeline;
        if (step == null || !date || !time || !status) {
            return res.status(400).json({ error: "Incomplete statusTimeline fields." });
        }

        // Find and update the voter
        const updatedVoter = await Voter.findOneAndUpdate(
            { voterId },
            { $set: { statusTimeline } },
            { new: true }
        );
        if (!updatedVoter) {
            return res.status(404).json({ error: "Voter not found." });
        }
        res.status(200).json({ message: "Status updated successfully", voter: updatedVoter });
    } catch (error) {
        console.error("Error updating statusTimeline:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
