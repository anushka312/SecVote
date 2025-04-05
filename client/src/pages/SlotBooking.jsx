import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Search } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // Import toast
import { Link } from "react-router-dom";
import profileIcon from "../assets/profile.png"; // Import profile icon
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // replace with your backend URL


export default function SlotBooking() {
  const [slots, setSlots] = useState([]);
  const [voterId, setVoterId] = useState("");
  const [message, setMessage] = useState("");

  const fetchSlots = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/slots`);
      setSlots(response.data.slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  }

  const handleBooking = async ({ slot }) => {
    if (!voterId) return setMessage("Please enter your Voter ID.");

    try {
      const res = await axios.post(`${API_BASE_URL}/book-slot`, {
        voterId,
        slot,
      });
      setMessage(res.data.message);
      toast.success("Slot Booked Sucessfully You Will Receive Confirmation")
      setConfirmSlot(null);
      setVoterId("");
      // window.location.reload()
    } catch (error) {
      setMessage(error.response?.data?.message || "Booking failed.");
      toast.success("Error Booking Slot Retry In A While")
    }
  };


  const [registeredSlot, setRegisteredSlot] = useState(null);
  const [confirmSlot, setConfirmSlot] = useState(null);

  // const [searchTerm, setSearchTerm] = useState("");
  // const [registrationCounts, setRegistrationCounts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("registrationCounts")) || {};
  // });
  // const [totalRegistrations, setTotalRegistrations] = useState(() => {
  //   return parseInt(localStorage.getItem("totalRegistrations")) || 0;
  // });


  const handleRegister = (slot) => {
    if (!registeredSlot) {
      setConfirmSlot(slot);
    } else {
      toast.error("You have already registered for a slot!", { duration: 5000, style: { background: "#333", color: "#fff" } });
    }
  };

  // const confirmRegistration = () => {
  //   if (confirmSlot && !registeredSlot) {
  //     setRegisteredSlot(confirmSlot);
  //     localStorage.setItem("registeredSlot", confirmSlot);
  //     setConfirmSlot(null);

  //     setRegistrationCounts((prevCounts) => {
  //       const newCounts = { ...prevCounts, [confirmSlot]: (prevCounts[confirmSlot] || 0) + 1 };
  //       localStorage.setItem("registrationCounts", JSON.stringify(newCounts));
  //       return newCounts;
  //     });

  //     setTotalRegistrations((prevTotal) => {
  //       const newTotal = prevTotal + 1;
  //       localStorage.setItem("totalRegistrations", newTotal);
  //       return newTotal;
  //     });

  //     toast.success(`Successfully registered for ${confirmSlot}!`, { duration: 5000, style: { background: "#333", color: "#fff" } });
  //   }
  // };

  // const filteredSlots = slots.filter((slot) =>
  //   slot.slot.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  useEffect(() => {
    fetchSlots()
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-0 bg-[#121212] text-white">
      <Toaster position="top-right" toastOptions={{ duration: 5000, style: { background: "#333", color: "#fff" } }} />

      {/* Hero Section */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold">Book Your Slot</h1>
        <p className="text-lg text-gray-300 mt-2">Skip The Queue Secure Slot For FastTrack Voting!</p>
      </div>

      {/* Stats & Search Bar */}
      {/* <div className="w-full max-w-3xl mb-6">
        <div className="flex justify-between items-center bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-white">
            Total Registrations: {totalRegistrations}
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search slots..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#2C2F42] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A96E3]"
            />
          </div>
        </div>
      </div> */}

      {/* Slot List */}
      <div className="w-full max-w-3xl space-y-4">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between p-5 border rounded-lg shadow-md bg-[#1e1e1e] transition-transform transform hover:scale-105 border-gray-600"
              // , registeredSlot === slot ? "border-[#7D67D2] bg-[#2C2F42]" : "border-gray-600"
            )}
          >
            <div className="flex items-center gap-3">
              <Clock className="text-gray-400" size={20} />
              <span className="text-lg font-medium">{slot?.slot}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Slots Left: {50 - slot?.registrationCount}</span>
              <Button
                onClick={() => handleRegister(slot)}
                disabled={50 - slot?.registrationCount <= 0}
                className="bg-[#5A96E3] hover:bg-[#E6C155]"
              >
                Register
              </Button>
            </div>
            {/* <div className="flex items-center gap-4">
              <span className="text-gray-300">Registrations: {registrationCounts[slot] || 0}</span>
              {registeredSlot === slot ? (
                <div className="flex items-center gap-2 text-[#3FB950] font-semibold">
                  <CheckCircle size={20} /> Registered
                </div>
              ) : (
                <Button
                  onClick={() => handleRegister(slot)}
                  disabled={!!registeredSlot}
                  className="bg-[#5A96E3] hover:bg-[#E6C155]"
                >
                  Register
                </Button>
              )}
            </div> */}
          </div>
        ))}


        {/* Confirmation Modal */}
        {confirmSlot && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center flex flex-col justify-center gap-6">
              <p className="mb-4 text-lg font-semibold">Confirm Registration For: {confirmSlot.slot}?</p>
              <input
                type="text"
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                placeholder="Enter Voter ID"
                className="border bg-gray-800 px-3 py-2 rounded w-full mb-2"
              />
              <div className="flex justify-center space-x-4">
                <Button onClick={() => handleBooking(confirmSlot)} className="bg-[#3FB950] hover:bg-[#3fb94fcc]">Yes, Register</Button>
                <Button variant="outline" onClick={() => setConfirmSlot(null)} className="border-gray-500 bg-[#D72638] text-white hover:bg-[#d72638c6]">Cancel</Button>
              </div>
              {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}