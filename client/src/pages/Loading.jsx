import React from "react";
import "tailwindcss/tailwind.css";

const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#121212]">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;