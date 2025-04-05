import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Vote, ClipboardList, CheckCircle, Settings, LogOut, Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from '../../assets/profile.png';
// import voterStatus from "@/pages/voterStatus.jsx";
import LoadingScreen from "@/pages/Loading.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import UserStatus from "@/pages/UserStatus.jsx";


const API_BASE_URL = 'http://localhost:5000/api';

const blo =  {
  name: "Amit Verma",
  contact: "+91 98765 43210",
}

const pollingStation = {
  station: "Govt. School, Connaught Place",
  date: "April 15, 2025"
}


export default function ProfilePage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [voter, setVoter] = useState(null);

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
    // if (id) {
      fetchVoter();
    // }
  }, [id])

  if (voter === null || loading) {
    return <LoadingScreen />
  }


  return (
    <>
      <h1 className="text-2xl bg-[#121212] text-center font-bold pt-4 text-gray-100">Voter Profile</h1>
      <div className="p-8 md:p-16 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#121212] text-white">
        {/* Left Sidebar - voter Info & Settings */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl flex flex-col items-center space-y-5 w-full relative">
          {/* Profile Picture Section */}
          {/* <div className="relative w-32 h-32"> */}
            {/* Profile Image with Placeholder and Background Color */}
            {/* <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-[#FFD166] bg-gray-800 object-cover"
            /> */}

            {/* Edit Profile Button */}
            {/* <button className="absolute bottom-2 right-2 bg-[#5A96E3] p-2 rounded-full shadow-md hover:bg-[#7D67D2] transition">
              <Camera className="w-5 h-5 text-white" />
            </button> */}
          {/* </div> */}


          <h2 className="text-3xl font-bold">{voter?.name}</h2>
          <p className="text-gray-400">Voter ID: <span className="font-semibold text-white">{voter?.voterId}</span></p>
          <p className="text-gray-400">EPIC Number: <span className="font-semibold text-white">{voter?.epicNumber}</span></p>
          <p className="text-gray-400">DOB: <span className="font-semibold text-white">{voter?.dob}</span></p>
          <p className="text-gray-400">Gender: <span className="font-semibold text-white">{voter?.gender}</span></p>
          <p className="text-gray-400">Constituency: <span className="font-semibold text-white">{voter?.constituency}</span></p>
          <p className="text-gray-400">Election Type: <span className="font-semibold text-white">{voter?.constituencyType}</span></p>
          <p className="text-gray-400">Voting Phase: <span className="font-semibold text-white">{voter?.votingPhase}</span></p>

          {/* BLO Contact Details */}
          <div className="bg-[#252525] p-4 rounded-lg text-center w-full">
            <h3 className="text-lg font-semibold mb-2">Booth Level Officer</h3>
            <p className="text-gray-300">{blo.name}</p>
            <p className="flex items-center justify-center gap-2 text-[#FFD166]">
              <Phone className="w-4 h-4" /> {blo.contact}
            </p>
          </div>

          {/* Profile & Logout Buttons */}
          {/* <Button className="bg-[#5A96E3] hover:bg-[#7D67D2] text-white px-6 py-3 rounded-lg shadow-md w-full">
            <Settings className="w-5 h-5 mr-2" />
            Manage Profile
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md w-full">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button> */}
        </div>

        {/* Main Content - Voting Details */}
        <div className="col-span-1 lg:col-span-2">

          {/* Voting Status */}
          <div className="bg-[#212121] border-[2px] rounded-xl shadow-lg overflow-clip">
            {/* <h2 className="text-3xl font-semibold mb-6">Voting Status</h2>
          {voter.hasVoted ? (
            <div className="flex items-center gap-4 bg-[#252525] p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <p className="text-lg">You have successfully voted in the **2025 General Elections**.</p>
            </div>
          ) : (
            <div className="flex items-center gap-4 bg-[#252525] p-6 rounded-lg">
              <Info className="w-8 h-8 text-yellow-400" />
              <p className="text-lg">You have not voted yet. Your assigned polling date is <strong>{voter.pollingDate}</strong>.</p>
            </div>
          )} */}
            {/* <voterStatus /> */}
            <UserStatus voter={voter} />
          </div>

          {/* Polling Station Info */}
          <div className="mt-8 bg-[#1e1e1e] p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Polling Station Details</h2>
            <div className="flex items-center gap-4 bg-[#252525] p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-[#FFD166]" />
              <div>
                <p className="text-lg font-semibold">{pollingStation.station}</p>
                <p className="text-gray-400">Polling Date: {pollingStation.date}</p>
              </div>
            </div>
            <Link to="/station/2121212">
              <Button className="mt-4 bg-[#5A96E3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7D67D2]">
                View Polling Location
              </Button>
            </Link>
          </div>

          {/* Election Actions */}
          <div className="mt-8 bg-[#1e1e1e] p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Election Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <div className="bg-[#252525] p-6 rounded-lg flex items-center gap-4">
                <Vote className="w-8 h-8 text-green-400" />
                <p className="text-lg font-semibold">Cast Your Vote</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Vote Now
                </Button>
              </div> */}

              <div className="bg-[#252525] p-6 rounded-lg flex items-center gap-4">
                <ClipboardList className="w-8 h-8 text-blue-400" />
                <p className="text-lg font-semibold">Election Results</p>
                <Link to="/results">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    View Results
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
