// about.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8 md:p-16">
      {/* Content Card */}
      <div className="max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl shadow-xl p-8 mb-12">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-3">What is SecVote?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            SecVote is our Automated Voter Verification Management System—a comprehensive digital platform designed to handle voter verification, crowd management, slot booking, and real-time tracking for polling booths. It replaces traditional manual processes with a secure, efficient, and scalable solution that ensures smooth operations on election day.
          </p>
        </section>
        <div className="max-w-lg mx-auto">
        
        <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1fFU8jEgZY_gyxTee5L47JdUddeYra7LZ/preview"
            title="SecVote Demo"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-3">Motivation</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The traditional system suffers from long queues, error-prone manual checks, difficulties integrating new voter data, and ineffective grievance handling. SecVote was built to automate these challenges—providing fast, secure, and transparent processes for modern elections.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold text-indigo-300 mb-3">Aspirations & Solutions</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            SecVote aspires to revolutionize voter management by offering:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li><strong>Automated Verification:</strong> QR code scanning and biometric authentication for reliable identification.</li>
            <li><strong>Efficient Slot Booking:</strong> Pre-assigned voting time slots to reduce congestion.</li>
            <li><strong>Fresh Voter Integration:</strong> Seamless validation of new voter records against state rolls.</li>
            <li><strong>Robust Grievance Handling:</strong> A Gemini API–powered chat assistant and a dedicated admin dashboard.</li>
            <li><strong>Real-Time Tracking:</strong> Live updates for both voters and administrators for complete transparency.</li>
          </ul>
        </section>
      </div>
      
      {/* Embedded Demo Video */}
     
    </div>
  );
};

export default About;
