import React from "react";
import { Link } from "react-router-dom";
import LatestJobCards from "./LatestJobCards";

const staticJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$110k - $140k",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Facebook",
    location: "New York, NY",
    salary: "$130k - $160k",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Tesla",
    location: "Austin, TX",
    salary: "$140k - $170k",
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$90k - $110k",
  },
];

const LatestJobs = () => {
  return (
    <div className="bg-black text-white py-16">
      {/* Container */}
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10">
          <span className="text-blue-500 text-3xl">Latest and Top </span >Job Openings
        </h1>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticJobs.map((job) => (
            <LatestJobCards key={job.id} job={job} />
          ))}

          {/* View More Button (6th Card) */}
          <Link
            to="/jobs"
            className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-blue-400">View More Jobs</h2>
            <p className="mt-2 text-gray-300 text-lg">
              Explore all job openings
            </p>

            {/* Circular Forward Button */}
            <div className="mt-6 flex justify-center">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-400 text-2xl cursor-pointer hover:text-white transition duration-300">
                ➡️
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
