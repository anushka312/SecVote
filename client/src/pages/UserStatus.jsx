import React from 'react';
import { CheckCircle2Icon, Clock2Icon } from 'lucide-react';

const statusSteps = [
    {
        title: 'Document Verification',
        status: 'completed',
        date: '2024-01-15',
        time: '10:30 AM'
    },
    {
        title: 'Soft Verification',
        status: 'completed',
        date: '2024-01-16',
        time: '2:45 PM'
    },
    {
        title: 'Polling Booth Verification',
        status: 'completed',
        date: '2024-01-20',
        time: '11:15 AM'
    },
    {
        title: 'Voted',
        status: 'pending',
        date: 'Scheduled',
        time: 'Feb 15, 2024'
    }
];

const UserCard = ({ voter }) => {
    return (
        <div className="bg-[#212121] rounded-lg p-6 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Voter Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Aditya Kumar Jha</h3>
                    <div className="space-y-2">
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">Voter ID:</span> DL/07/123456
                        </p>
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">EPIC Number:</span> EPIC123456789
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">Age:</span> 20
                    </p>
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">Gender:</span> Male
                    </p>
                </div>
            </div>
        </div>
    );
};

const Timeline = ({ voter }) => {
    return (
        <div className="space-y-8">
            {statusSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                    <div className="flex items-center h-16">
                        {voter.statusTimeline.step > index ? (
                            <CheckCircle2Icon className="w-8 h-8 text-green-500" />
                        ) : (
                            <Clock2Icon className="w-8 h-8 text-gray-400" />
                        )}
                        {voter.statusTimeline.step > index && (
                            <div className="h-full w-0.5 bg-gray-700 ml-4"></div>
                        )}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{step.title}</h3>
                        {voter.statusTimeline.step > index ? (
                            <div className="text-sm text-gray-400">
                                <p>Date: {voter.statusTimeline.date}</p>
                                <p>Time: {voter.statusTimeline.time}</p>
                            </div>)
                        :
                        (<div className="text-sm text-gray-400">
                            <p>Date: {step.date}</p>
                            <p>Time: {step.time}</p>
                        </div>
                        )}

                        <div className="mt-2">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${voter.statusTimeline.step > index
                                ? 'bg-green-900 text-green-300'
                                : 'bg-gray-700 text-gray-300'
                                }`}>
                                {voter.statusTimeline.step > index ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

function UserStatus({ voter }) {
    return (
        <div className="bg-[#212121] p-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-center text-xl font-bold text-white mb-8">Voter Activity Timeline</h1>
                {/* <UserCard /> */}
                <Timeline voter={voter} />
            </div>
        </div>
    );
}

export default UserStatus;