import React from "react";
import { ClipboardList, UserCheck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#1b1b1b] text-white text-center">
      <h2 className="text-4xl font-extrabold text-[#FFD166]">How SecVote Works</h2>
      <p className="text-gray-400 mt-2">A simple 3-step process for secure voting</p>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-10">
        {/* Step 1 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <UserCheck className="w-12 h-12 text-[#5A96E3] mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Verify Your Identity</h3>
          <p className="text-gray-400 mt-2">Securely log in with Aadhaar-linked verification.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <ClipboardList className="w-12 h-12 text-[#FFD166] mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Choose Your Candidate</h3>
          <p className="text-gray-400 mt-2">Review candidates and make an informed choice.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Vote & Confirm</h3>
          <p className="text-gray-400 mt-2">Submit your vote with complete encryption and anonymity.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
