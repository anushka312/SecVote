import React from "react";
import { Lock, ShieldCheck, Globe } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-[#121212] text-white text-center">
      <h2 className="text-4xl font-extrabold text-[#5A96E3]">Why Choose SecVote?</h2>
      <p className="text-gray-400 mt-2">Our platform ensures security, transparency, and accessibility.</p>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-10">
        {/* Feature 1 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <Lock className="w-12 h-12 text-green-500 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">End-to-End Encryption</h3>
          <p className="text-gray-400 mt-2">Your vote is secure and tamper-proof with our encryption technology.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <ShieldCheck className="w-12 h-12 text-yellow-400 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Fraud Protection</h3>
          <p className="text-gray-400 mt-2">Multiple security layers prevent fake voting and manipulation.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <Globe className="w-12 h-12 text-blue-400 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Vote Anytime, Anywhere</h3>
          <p className="text-gray-400 mt-2">A secure and accessible platform for all Indian citizens.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
