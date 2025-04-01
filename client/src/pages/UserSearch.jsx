import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



const API_BASE_URL = 'http://localhost:5000/api';

function UserSearch() {
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSearch = async (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        if (!query.trim()) {
            toast.error('Please enter a Voter ID');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/voter/search/?query=${query}`);
            setUserData(response.data.voters);
            toast.success('Voters Fetched');
        } catch (error) {
            console.error('Error fetching voters:', error);
            toast.error('User not found or error occurred');
            setUserData(null);
        } finally {
            setLoading(false);
            // setQuery("");
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold text-white mb-6 text-center">Search Voter</h1>
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <input
                            type="text"
                            value={query}
                            // onChange={(e) => setQuery(e.target.value)}
                            onChange={(e) => handleSearch(e)}
                            placeholder="Enter Voter ID"
                            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-300 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>
                </div>
                {userData?.map((data) => <UserCard userData={data} />)}
            </div>
        </div>
    );
}

function UserCard({ userData }) {
    return (
        <Link to={`/profile/${userData.epicNumber}`} >
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
                        <span className="font-medium text-gray-400">DOB:</span> {userData.dob}
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