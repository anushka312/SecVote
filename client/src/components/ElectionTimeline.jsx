import React from 'react';
import { Calendar1Icon } from 'lucide-react';

const timeline = [
    {
        phase: "Announcement",
        date: "2024-04-01",
        description: "Election dates and guidelines officially announced by the Election Commission.",
    },
    {
        phase: "Nomination Filing",
        date: "2024-04-05 to 2024-04-10",
        description: "Candidates submit their nomination papers for the elections.",
    },
    {
        phase: "Scrutiny of Nominations",
        date: "2024-04-12",
        description: "Election Commission scrutinizes and verifies the candidates' nominations.",
    },
    {
        phase: "Last Date for Withdrawal",
        date: "2024-04-15",
        description: "Final date for candidates to withdraw their nominations from the elections.",
    },
    {
        phase: "Campaigning Period",
        date: "2024-04-16 to 2024-05-05",
        description: "Political parties and candidates campaign to gain voter support.",
    },
    {
        phase: "Voting Day",
        date: "2024-05-10",
        description: "Voters cast their votes at designated polling stations.",
    },
    {
        phase: "Vote Counting & Results",
        date: "2024-05-15",
        description: "Counting of votes begins, and election results are announced.",
    },
];



function ElectionTimeline() {
    return (
        <div className="rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Election Timeline</h2>
            <div className="space-y-8">
                {timeline.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex items-center h-24">
                            <div className="bg-blue-600 rounded-full p-2">
                                <Calendar1Icon className="w-6 h-6 text-white" />
                            </div>
                            {index !== timeline.length - 1 && (
                                <div className="h-full w-0.5 bg-gray-700 ml-4"></div>
                            )}
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="bg-[#212121] rounded-lg p-4">
                                <h3 className="text-lg font-medium text-white mb-1">{item.phase}</h3>
                                <p className="text-sm text-blue-400 mb-2">{item.date}</p>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ElectionTimeline;