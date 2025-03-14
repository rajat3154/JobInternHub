import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";

const Job = ({ job }) => {
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="relative bg-black text-white p-6 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
      {/* Apply Now Button */}
      <button className="absolute top-4 right-4 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out px-4 py-2 rounded-md">
        Apply Now
      </button>

      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-400">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full text-black"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Company Section */}
      <div className="flex items-center gap-3 mb-6">
        <Avatar>
          <AvatarImage
            src={job?.company?.logo}
            className="w-12 h-12 rounded-full"
          />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-400">India</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-4">
        <h1 className="font-bold text-xl mb-3">{job?.title}</h1>
        <p className="text-sm text-gray-300">{job?.description}</p>
      </div>

      {/* Badges Section */}
      <div className="flex items-center gap-3 mb-3">
        <span className="px-2 py-1 bg-blue-400 text-black text-sm font-bold rounded-md">
          {job?.position} Positions
        </span>
        <span className="px-2 py-1 bg-red-600 text-white text-sm font-bold rounded-md">
          {job?.jobType}
        </span>
        <span className="px-2 py-1 bg-green-500 text-black text-sm font-bold rounded-md">
          {job?.salary} LPA
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mt-7">
        <Button
          variant="outline"
          className="px-2 py-1 bg-blue-500 text-white text-sm font-bold rounded-md hover:bg-blue-600"
        >
          Details
        </Button>
        <Button className="px-2 py-1 bg-[#7209b7] text-white text-sm font-bold rounded-md hover:bg-purple-800">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
