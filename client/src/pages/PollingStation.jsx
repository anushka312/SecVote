import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { MapPin, Vote, ClipboardList, CheckCircle, Settings, LogOut, Info, Calendar, UserCheck, Phone, Camera, Clock, FileText, IdCard, UsersRound, Car, Accessibility, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const station = {
    "id": "12345678",
    "AC": "12",
    "PS": "2",
    "name": "PM SHRI KENDRIYA VIDYALAYA NO-3",
    "address": {
        "street": "INDIRA MARKET NARAINA",
        "city": "New Delhi York",
        "state": "Delhi",
        "zip": "110010"
    },
    "image": "https://lh5.googleusercontent.com/p/AF1QipO4NJzwMlbb4LRkn9zFal3K5Wy65mr1meDN4ynU=w408-h526-k-no",
    "maplink": "https://www.google.co.in/maps/place/Kendriya+Vidyalaya+No.+3/@28.6158155,77.137163,20.65z/data=!4m6!3m5!1s0x390ce38a31d4c627:0x7b779c91989c1d73!8m2!3d28.6160253!4d77.1371917!16s%2Fg%2F1vkxkn8j?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"
    ,
    "voting_date": "18 April 2025",
    "voting_hours": {
        "start": "10:00 AM",
        "end": "05:30 PM"
    },
    "constituency": "New Delhi",
    "constituencyType": "Lok Sabha",
    "votingPhase": "Phase 3",
    "contact": {
        "phone": "+1 555-123-4567",
        "email": "info@pollstation.com"
    },
    "facilities": ["Wheelchair Accessible", "Parking Available", "Waiting Area"],
    "required_documents": ["Voter ID", "Government Issued ID"],
    "live_status": {
        "queue_length": "Moderate",
        "wait_time": "30 minutes"
    },
}


const PollingStation = () => {

    return (
        <>
            <div className="p-8 md:p-16 mx-auto bg-[#121212] text-white">
                <h1 className="text-center p-2 text-4xl font-bold text-gray-200">Polling Station information</h1>

                <div className="flex flex-col justify-start gap-4">
                    {/*Polling Station Info */}
                    <div className="bg-[#1b1b1b] p-6 rounded-2xl flex justify-start gap-12 space-y-5 w-full relative">
                        {/* Polling Station Picture Section */}
                        <div className="relative w-[20rem] aspect-square rounded-sm overflow-hidden">
                            {/* Profile Image with Placeholder and Background Color */}
                            <img
                                src={station?.image}
                                alt="Profile"
                                className="w-full h-full border-2 border-[#5d5d5d] bg-gray-800 object-fit"
                            />
                        </div>

                        {/* Polling Station Details */}
                        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg text-2xl flex flex-col justify-start items-start gap-1">
                            <h2 className="text-3xl font-bold mb-4 text-center">{station.name}</h2>
                            <p className="text-gray-400">Assembly Constituency: <span className="font-semibold text-white">{station.AC}</span></p>
                            <p className="text-gray-400">Polling Station: <span className="font-semibold text-white">{station.PS}</span></p>
                            <p className="text-gray-400">Constituency: <span className="font-semibold text-white">{station.constituency}</span></p>
                            <p className="text-gray-400">Election Type: <span className="font-semibold text-white">{station.constituencyType}</span></p>
                            <p className="text-gray-400">Voting Phase: <span className="font-semibold text-white">{station.votingPhase}</span></p>
                        </div>

                        {/* Polling Station Location */}
                        <div className="flex-1 p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
                            <div className="flex gap-2">
                                <MapPin className="w-8 h-8 text-[#FFD166]" />
                                <h2 className="text-2xl font-semibold pb-2">Location</h2>
                            </div>

                            <div className="flex items-center gap-4 bg-[#252525] p-4 rounded-lg">
                                <div>
                                    <p className="text-lg font-semibold">{station.address.street}</p>
                                    <p className="text-lg font-semibold">{station.address.city}</p>
                                    <p className="text-lg font-semibold">{station.address.state}</p>
                                    <p className="text-lg font-semibold">{station.address.zip}</p>
                                </div>
                            </div>
                            <Button className="mt-4 bg-[#3d7ac9] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#7D67D2]"
                            >
                                <a href={station?.maplink}>View On Map</a>
                            </Button>
                        </div>
                    </div>

                    <div className="p-8 bg-[#181818] rounded-xl grid grid-cols-2 gap-8">

                        {/* Polling Timings Details */}
                        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
                            <div className="flex gap-2">
                                <Clock className="w-8 h-8 text-[#257a2b]" />
                                <h2 className="text-2xl font-semibold pb-2">Timings</h2>
                            </div>
                            <div className="p-6 bg-[#262626] rounded-xl shadow-lg text-xl flex flex-col gap-1">
                                <p className="text-gray-400">Voting Date: <span className="font-semibold text-white">{station.voting_date}</span></p>
                                <p className="text-gray-400">Voting Starts At: <span className="font-semibold text-white">{station.voting_hours.start}</span></p>
                                <p className="text-gray-400">Voting Ends At: <span className="font-semibold text-white">{station.voting_hours.end}</span></p>
                            </div>
                        </div>

                        {/* Polling Information Details */}
                        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
                            <div className="flex gap-2">
                                <UsersRound className="w-8 h-8 text-[#711b1b]" />
                                <h2 className="text-2xl font-semibold pb-2">Live Status</h2>
                            </div>
                            <div className="p-6 bg-[#262626] rounded-xl shadow-lg text-xl flex flex-col gap-1">
                                <p className="text-gray-400">Queue Length: <span className="font-semibold text-white">{station.live_status.queue_length}</span></p>
                                <p className="text-gray-400">Average Wait Time: <span className="font-semibold text-white">{station.live_status.wait_time}</span></p>
                            </div>
                        </div>

                        {/* Polling Documents Details */}
                        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
                            <div className="flex gap-1">
                                <FileText className="w-8 h-8 text-[#ad31a3]" />
                                <h2 className="text-2xl font-semibold pb-2">Documents Required</h2>
                            </div>
                            <div className="p-6 bg-[#262626] rounded-xl shadow-lg text-2xl flex flex-col justify-start items-start gap-1">
                                {
                                    station?.required_documents.map((doc, index) => (
                                        <div className="flex gap-4">
                                            <IdCard className="w-6 h-6 text-gray-400" />
                                            <span className="text-xl font-semibold text-white">{doc}</span></div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Polling Station Facilities */}
                        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
                            <div className="flex gap-1">
                                <FileText className="w-8 h-8 text-[#3527a5]" />
                                <h2 className="text-2xl font-semibold pb-2">Facilities</h2>
                            </div>
                            <div className="p-6 bg-[#262626] rounded-xl shadow-lg text-2xl flex flex-col justify-start items-start gap-1">
                                {/* {
                                station?.required_documents.map((doc, index) => ( */}

                                <div className="flex gap-4">
                                    <UsersRound className="w-6 h-6 text-gray-400" />
                                    <span className="text-xl font-semibold text-white">Waiting Area</span>
                                </div>
                                <div className="flex gap-4">
                                    <Car className="w-6 h-6 text-gray-400" />
                                    <span className="text-xl font-semibold text-white">Parking Available</span>
                                </div>
                                <div className="flex gap-4">
                                    <Accessibility className="w-6 h-6 text-gray-400" />
                                    <span className="text-xl font-semibold text-white">Wheelchair Accessible</span>
                                </div>
                                {/* ))
                            } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PollingStation