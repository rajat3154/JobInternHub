import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import profilePic from "./assets/a.jpg";
const LatestJobCards = ({ job }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300">
      {/* Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={profilePic} alt="profile image" />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">{job.company}</h1>
          <p className="text-sm text-gray-400">{job.location}</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div>
        <h1 className="font-bold text-xl mb-4 text-blue-500">{job.title}</h1>
        <p className="text-sm text-gray-300 line-clamp-3">
          Exciting opportunity at {job.company}. Join us as a {job.title}!
        </p>
      </div>

      {/* Job Details */}
      <div className="flex items-center gap-3 mt-7 flex-wrap">
        <Badge className="text-black font-bold bg-blue-400 border-blue-400">
          1 Position
        </Badge>
        <Badge className="text-white font-bold bg-red-600 border-[#F83002]">
          Full-time
        </Badge>
        <Badge className="text-black font-bold bg-green-500 border-green-500">
          {job.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
