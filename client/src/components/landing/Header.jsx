import React from "react";
import { Menu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <ShieldCheck className="w-6 h-6 text-[#FFD166]" />
          SecVote
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#cta" className="hover:text-white transition">Vote Now</a>
        </nav>

        {/* Mobile Menu */}
        <Button className="md:hidden bg-gray-800 hover:bg-gray-700 text-white">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
