import React from "react";
import { Vote, ShieldCheck, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-transparent to-black opacity-20 blur-2xl"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h1 className="text-6xl font-extrabold text-[#FFD166] leading-tight drop-shadow-lg">
          Secure. Transparent. <span className="text-[#5A96E3] glow">Empowered.</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Vote with confidence using <span className="text-[#7D67D2] font-semibold">SecVote</span>, India's most secure and transparent digital voting system.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105">
            <Vote className="w-5 h-5" />
            Vote Now
          </Button>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105">
            <ShieldCheck className="w-5 h-5" />
            Learn More
          </Button>
        </div>
      </div>

      {/* Floating Icons for Style */}
      <div className="absolute top-20 left-16 opacity-30 animate-pulse">
        <Lock className="w-20 h-20 text-gray-700" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-30 animate-pulse">
        <CheckCircle className="w-20 h-20 text-gray-700" />
      </div>
    </section>
  );
};

export default Hero;
