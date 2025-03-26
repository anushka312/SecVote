import React from "react";
import { ShieldCheck, Twitter, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-10 text-gray-400">
      <div className="container mx-auto px-6 text-center">
        {/* Logo & Tagline */}
        <div className="flex justify-center items-center gap-2 text-white text-xl font-bold">
          <ShieldCheck className="w-6 h-6 text-[#FFD166]" />
          SecVote
        </div>
        <p className="text-gray-500 mt-2">India's Secure Digital Voting System</p>

        {/* Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition"><Globe className="w-5 h-5" /></a>
        </div>

        <p className="text-gray-500 mt-6 text-sm">&copy; {new Date().getFullYear()} SecVote. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
