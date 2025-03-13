import React from "react";
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
  {
    id: 6,
    title: "Software Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$115k - $145k",
  },
];

const LatestJobs = () => {
  return (
    <div className="bg-black text-white py-16">
      {/* Container */}
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10">
          <span className="text-blue-500">Latest and Top </span>Job Openings
        </h1>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticJobs.map((job) => (
            <LatestJobCards key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
