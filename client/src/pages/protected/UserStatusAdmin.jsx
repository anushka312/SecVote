import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { CheckCircle2Icon, Clock1Icon } from 'lucide-react';

const API_BASE_URL = 'http://your-api-url/api';

const initialStatusSteps = [
    {
        id: 1,
        title: 'Document Verification',
        status: 'completed',
        date: null,
        time: null
    },
    {
        id: 2,
        title: 'Soft Verification',
        status: 'pending',
        date: null,
        time: null
    },
    {
        id: 3,
        title: 'Polling Booth Verification',
        status: 'pending',
        date: null,
        time: null
    },
    {
        id: 4,
        title: 'Voted',
        status: 'pending',
        date: null,
        time: null
    }
];

const UserCard = () => {
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

const Timeline = ({ statusSteps, onUpdateStatus }) => {
    const handleStatusUpdate = async (stepId) => {
        try {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            const formattedTime = currentDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });

            // Make API call to update status
            await axios.post(`${API_BASE_URL}/update-status`, {
                voterId: 'DL/07/123456',
                stepId,
                status: 'completed',
                date: formattedDate,
                time: formattedTime
            });

            onUpdateStatus(stepId, formattedDate, formattedTime);
            toast.success('Status updated successfully');
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('Failed to update status');
        }
    };

    return (
        <div className="space-y-8">
            {statusSteps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                    <div className="flex items-center h-16">
                        {step.status === 'completed' ? (
                            <CheckCircle2Icon className="w-8 h-8 text-green-500" />
                        ) : (
                            <Clock1Icon className="w-8 h-8 text-gray-400" />
                        )}
                        {index !== statusSteps.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-700 ml-4"></div>
                        )}
                    </div>
                    <div className="ml-4 flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                <div className="text-sm text-gray-400">
                                    <p>Date: {step.date || 'Not completed'}</p>
                                    <p>Time: {step.time || 'Not completed'}</p>
                                </div>
                                <div className="mt-2">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${step.status === 'completed'
                                            ? 'bg-green-900 text-green-300'
                                            : 'bg-gray-700 text-gray-300'
                                        }`}>
                                        {step.status === 'completed' ? 'Completed' : 'Pending'}
                                    </span>
                                </div>
                            </div>
                            {step.status !== 'completed' && (
                                <button
                                    onClick={() => handleStatusUpdate(step?.id)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    disabled={index > 0 && statusSteps[index - 1].status !== 'completed'}
                                >
                                    Mark as Complete
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

function UserStatusAdmin() {
    const [statusSteps, setStatusSteps] = useState(initialStatusSteps);

    const handleUpdateStatus = (stepId, date, time) => {
        setStatusSteps(prevSteps =>
            prevSteps.map(step =>
                step.id === stepId
                    ? { ...step, status: 'completed', date, time }
                    : step
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin - Voter Status Management</h1>
                </div>
                <UserCard />
                <Timeline
                    statusSteps={statusSteps}
                    onUpdateStatus={handleUpdateStatus}
                />
            </div>
            <Toaster position="top-right" />
        </div>
    );
}

export default UserStatusAdmin;