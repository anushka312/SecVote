import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { CheckCircle2Icon, Clock1Icon } from 'lucide-react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../Loading.jsx';
import { Button } from '@/components/ui/button.jsx';

const API = import.meta.env.VITE_API_URL;
const API_BASE_URL = `${API}/api`;


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

const UserCard = ({ voter }) => {
    return (
        <div className="bg-[#212121] rounded-lg p-6 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Voter Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{voter?.name}</h3>
                    <div className="space-y-2">
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">Voter ID:</span>{voter?.voterId}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">EPIC Number:</span> {voter?.epicNumber}
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">DOB:</span> {voter?.dob}
                    </p>
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">Gender:</span> {voter?.gender}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Timeline = ({ statusSteps, onUpdateStatus, voter }) => {
    const handleStatusUpdate = async (index) => {
        try {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            const formattedTime = currentDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });

            // Make API call to update status
            const response = await axios.post(`${API_BASE_URL}/update-status`, {
                "voterId": voter.voterId,
                "statusTimeline": {
                    "step": index + 1,
                    "date": formattedDate,
                    "time": formattedTime,
                    "status": "Completed"
                }
            });
            // console.log(response.data.voter);
            onUpdateStatus(response.data.voter);
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
                        {index <= voter?.statusTimeline.step - 1 ? (
                            <CheckCircle2Icon className="w-8 h-8 text-green-500" />
                        ) : (
                            <Clock1Icon className="w-8 h-8 text-gray-400" />
                        )}
                        {index <= voter?.statusTimeline.step - 1 && (
                            <div className="h-full w-0.5 bg-gray-700 ml-4"></div>
                        )}
                    </div>
                    <div className="ml-4 flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                {
                                    index <= voter?.statusTimeline.step - 1 ?
                                        <div className="text-sm text-gray-400">
                                            <p>Date: {voter?.statusTimeline.date}</p>
                                            <p>Time: {voter?.statusTimeline.time}</p>
                                        </div>
                                        :
                                        <div className="text-sm text-gray-400">
                                            <p>Date: {'Not completed'}</p>
                                            <p>Time: {'Not completed'}</p>
                                        </div>
                                }
                                <div className="mt-2">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${index <= voter?.statusTimeline.step - 1
                                        ? 'bg-green-900 text-green-300'
                                        : 'bg-gray-700 text-gray-300'
                                        }`}>
                                        {index <= voter?.statusTimeline.step-1 ? 'Completed' : 'Pending'}
                                    </span>
                                </div>
                            </div>
                            {index === voter?.statusTimeline.step && (
                                <Button
                                    onClick={() => handleStatusUpdate(index)}
                                    className="bg-gray-600/30 hover:bg-gray-600/20 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                                    disabled={index > voter?.statusTimeline.step}
                                >
                                    Mark as Complete
                                </Button>
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
    const { id } = useParams();

    const [voter, setVoter] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchVoter = async () => {
        // if (!query.trim()) {
        //     toast.error('Please enter a Voter ID');
        //     return;
        // }
        try {
            const response = await axios.get(`${API_BASE_URL}/getvoter/${id}`);
            setVoter(response.data.voter);
            toast.success('Voter Info Fetched');
        } catch (error) {
            console.error('Error fetching voters:', error);
            toast.error('voter not found or error occurred');
            setVoter(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVoter();
    }, [id])

    if (voter === null || loading) {
        return <LoadingScreen />
    }

    const handleUpdateStatus = (voter) => {
        setVoter(voter);
    };

    return (
        <div className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin - Voter Status Management</h1>
                </div>
                <UserCard voter={voter} />
                <Timeline
                    voter={voter}
                    statusSteps={statusSteps}
                    onUpdateStatus={handleUpdateStatus}
                />
            </div>
            <Toaster position="top-right" />
        </div>
    );
}

export default UserStatusAdmin;