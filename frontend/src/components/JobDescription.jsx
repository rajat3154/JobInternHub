import { Badge } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const JobDescription = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 overflow-x-hidden overflow-y-hidden">
      <div className="container px-4 ml-8 mr-10">
        {/* Job Title and Apply Button in a Flex Container */}
        <div className="flex items-center justify-between mb-6 mr-7">
          <h1 className="text-3xl font-bold">Software Engineer</h1>
          {/* Apply Button */}
          <Button
            
            className="rounded-lg text-sm font-bold px-6 py-3 bg-green-600 cursor-pointer "
          >
            Apply Now
          </Button>
        </div>
        {/* Job Info Badges */}
        <div className="flex gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">
            3 Positions
          </span>
          <span className="px-3 py-1 bg-red-100 text-[#F83002] text-sm font-bold rounded-md">
            Full-Time
          </span>
          <span className="px-3 py-1 bg-purple-100 text-[#7209b7] text-sm font-bold rounded-md">
            10 LPA
          </span>
        </div>
        {/* Job Description */}
        <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
          Job Description
        </h2>
        <div className="space-y-4">
          <h1 className="font-bold text-lg">
            Role:{" "}
            <span className="font-normal text-gray-300">Software Engineer</span>
          </h1>
          <h1 className="font-bold text-lg">
            Location: <span className="font-normal text-gray-300">Remote</span>
          </h1>
          <h1 className="font-bold text-lg">
            Description:{" "}
            <span className="font-normal text-gray-300">
              Develop and maintain web applications.
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Experience:{" "}
            <span className="font-normal text-gray-300">2+ yrs</span>
          </h1>
          <h1 className="font-bold text-lg">
            Salary: <span className="font-normal text-gray-300">10 LPA</span>
          </h1>
          <h1 className="font-bold text-lg">
            Total Applicants:{" "}
            <span className="font-normal text-gray-300">25</span>
          </h1>
          <h1 className="font-bold text-lg">
            Posted Date:{" "}
            <span className="font-normal text-gray-300">2025-03-19</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
