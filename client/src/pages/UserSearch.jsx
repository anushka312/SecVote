import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const users = [
    {
        name: "Rahul Sharma",
        voterId: "VOT123456",
        epicNumber: "EPIC789012",
        age: 32,
        gender: "Male",
    },
    {
        name: "Ananya Verma",
        voterId: "VOT654321",
        epicNumber: "EPIC345678",
        age: 28,
        gender: "Female",
    },
    {
        name: "Vikram Singh",
        voterId: "VOT987654",
        epicNumber: "EPIC567890",
        age: 45,
        gender: "Male",
    },
    {
        name: "Neha Patil",
        voterId: "VOT112233",
        epicNumber: "EPIC778899",
        age: 38,
        gender: "Female",
    },
    {
        name: "Amit Desai",
        voterId: "VOT445566",
        epicNumber: "EPIC990011",
        age: 29,
        gender: "Male",
    },
];


const API_BASE_URL = 'http://your-api-url/api';

function UserSearch() {
    const [voterId, setVoterId] = useState('');
    const [userData, setUserData] = useState(users);
    const [statusSteps, setStatusSteps] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!voterId.trim()) {
            toast.error('Please enter a Voter ID');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/voter/${voterId}`);
            setUserData(response.data.user);
            setStatusSteps(response.data.statusSteps);
            toast.success('User found successfully');
        } catch (error) {
            console.error('Error fetching user:', error);
            toast.error('User not found or error occurred');
            setUserData(null);
            setStatusSteps(null);
        } finally {
            setLoading(false);
        }
    };

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
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold text-white mb-6 text-center">Search Voter</h1>
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <input
                            type="text"
                            value={voterId}
                            onChange={(e) => setVoterId(e.target.value)}
                            placeholder="Enter Voter ID"
                            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>
                </div>

                {userData.map((data) => <UserCard userData={data} />)}
            </div>
        </div>
    );
}

function UserCard({ userData }) {
    return (
        <Link to={'/profile'} >
        <div className="bg-[#212121] rounded-lg p-6 mb-8 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{userData.name}</h3>
                    <div className="space-y-2">
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">Voter ID:</span> {userData.voterId}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-medium text-gray-400">EPIC Number:</span> {userData.epicNumber}
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">Age:</span> {userData.age}
                    </p>
                    <p className="text-gray-300">
                        <span className="font-medium text-gray-400">Gender:</span> {userData.gender}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
}


export default UserSearch;