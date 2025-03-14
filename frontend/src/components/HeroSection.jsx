import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";


const HeroSection = () => {
  return (
    <div className="bg-black text-white py-20">
      {/* Container */}
      <div className="container mx-auto text-center px-4">
        {/* Tagline */}
        <span className="mx-auto px-5 py-3 rounded-full bg-white text-blue-500 font-medium mb-75 text-lg ">
          No.1 JobInternHub Website
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-5 mt-9">
          Search, Apply & <br className="mt-3" />
          Get Your <span className="text-blue-500 mt-6">Dream Jobs</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-10 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          exercitationem vero error consequatur nesciunt?
        </p>

        {/* Search Bar */}
        <div className="flex w-[60%] mx-auto shadow-lg border border-gray-200 rounded-full items-center gap-4 p-2">
          <input
            type="text"
            placeholder="Find Your Dream Job"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 pl-5 rounded-l-full bg-gray-900 text-white border-none focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Search Button */}
          <Button
            className="rounded-r-full bg-blue-500 text-white hover:bg-[#5a2a94] py-3 px-8"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
