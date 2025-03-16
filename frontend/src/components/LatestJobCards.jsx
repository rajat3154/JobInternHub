import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import profilePic from "./assets/a.jpg";
import { Button } from "./ui/button";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

const LatestJobCards = ({ job }) => {
  return (
    <SpotlightCard className="relative p-6  shadow-lg bg-black text-white border-[2px] border-solid border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 overflow-hidden">
      {/* Apply Now Button with Glow */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-3 right-4 text-white bg-green-500 border-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-md cursor-pointer shadow-lg hover:shadow-green-400"
      >
        Apply Now
      </Button>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-12 h-12 border border-gray-500">
          <AvatarImage src={profilePic} alt="profile image" />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg text-white">{job.company}</h1>
          <p className="text-sm text-gray-400">{job.location}</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div>
        <h1 className="font-extrabold text-xl mb-3 text-white">{job.title}</h1>
        <p className="text-sm text-gray-300 line-clamp-3">
          Exciting opportunity at {job.company}. Join us as a {job.title}!
        </p>
      </div>

      {/* Job Details */}
      <div className="flex items-center gap-3 mt-6 flex-wrap">
        <Badge className="px-3 py-1 bg-blue-400 text-black text-sm font-bold rounded-lg shadow-md">
          1 Position
        </Badge>
        <Badge className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg shadow-md">
          Full-time
        </Badge>
        <Badge className="px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-lg shadow-md">
          {job.salary}
        </Badge>
      </div>
    </SpotlightCard>
  );
};

export default LatestJobCards;
