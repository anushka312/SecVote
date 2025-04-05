import React from 'react';
import { Mail, CalendarClock, BadgeAlertIcon, AlertCircleIcon } from 'lucide-react';

const UserIssueCard = ({ issue }) => {
    const { epic, name, email, issue: userIssue, createdAt } = issue;

    const formattedDate = new Date(createdAt).toLocaleString();

    return (
        <div className="bg-[#121212] text-white shadow-md rounded-2xl p-5 max-w-xl w-full mx-auto my-4 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
                <BadgeAlertIcon size={20} className="text-blue-500" />
                {name}
            </h2>

            <div className="text-xl text-gray-100 mb-2 flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                {email}
            </div>

            <div className="text-xl text-gray-100 mb-2 flex items-center gap-2">
                <AlertCircleIcon size={16} className="text-yellow-500" />
                <span className="font-medium">Issue:</span> {userIssue}
            </div>

            <div className="text-xl text-gray-100 mb-2 flex items-center gap-2">
                <BadgeAlertIcon size={16} className="text-purple-500" />
                <span className="font-medium">EPIC No:</span> {epic}
            </div>

            <div className="text-xl text-gray-200 flex items-center gap-2 mt-4">
                <CalendarClock size={14} />
                {formattedDate}
            </div>
        </div>
    );
};

export default UserIssueCard;
