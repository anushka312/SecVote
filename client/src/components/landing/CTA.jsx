import React from "react";
import { Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative bg-[#121212] text-white py-24 flex flex-col items-center text-center">
      {/* Glowing Effect */}
      <div className="absolute inset-0 bg-opacity-10"></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold leading-tight text-gray-100">
          Make Your <span className="text-[#FFD166]">Vote</span> Count!
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Your voice shapes the future. Participate in the elections and bring the change you want to see.
        </p>

        {/* CTA Button - Now Centered */}
        <div className="mt-8 flex justify-center">
          <Button className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-3 text-lg transition-transform transform hover:scale-105">
            <Vote className="w-6 h-6" />
            Start Voting
          </Button>
        </div>
      </div>

      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-green-600 opacity-10 blur-3xl"></div>
    </section>
  );
};

export default CTA;
