import React from "react";
import Navbar from "./shared/Navbar";
import profilePic from "./assets/a.jpg";
const Jobs = () => {
  const filterJobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain web applications.",
      location: "New York, NY",
      company: { name: "Tech Corp", logo: profilePic },
      createdAt: "2024-03-10T12:00:00Z",
      position: 3,
      jobType: "Full-time",
      salary: "120K",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Lead product teams to success.",
      location: "San Francisco, CA",
      company: { name: "Innovate Ltd", logo: profilePic },
      createdAt: "2024-03-08T12:00:00Z",
      position: 2,
      jobType: "Full-time",
      salary: "110K",
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Analyze data and build models.",
      location: "Remote",
      company: { name: "AI Solutions", logo:  profilePic },
      createdAt: "2024-03-06T12:00:00Z",
      position: 1,
      jobType: "Part-time",
      salary: "90K",
    },
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain web applications.",
      location: "New York, NY",
      company: { name: "Tech Corp", logo: profilePic },
      createdAt: "2024-03-10T12:00:00Z",
      position: 3,
      jobType: "Full-time",
      salary: "120K",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Lead product teams to success.",
      location: "San Francisco, CA",
      company: { name: "Innovate Ltd", logo: profilePic },
      createdAt: "2024-03-08T12:00:00Z",
      position: 2,
      jobType: "Full-time",
      salary: "110K",
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Analyze data and build models.",
      location: "Remote",
      company: { name: "AI Solutions", logo:  profilePic },
      createdAt: "2024-03-06T12:00:00Z",
      position: 1,
      jobType: "Part-time",
      salary: "90K",
    },
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain web applications.",
      location: "New York, NY",
      company: { name: "Tech Corp", logo: profilePic },
      createdAt: "2024-03-10T12:00:00Z",
      position: 3,
      jobType: "Full-time",
      salary: "120K",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Lead product teams to success.",
      location: "San Francisco, CA",
      company: { name: "Innovate Ltd", logo: profilePic },
      createdAt: "2024-03-08T12:00:00Z",
      position: 2,
      jobType: "Full-time",
      salary: "110K",
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Analyze data and build models.",
      location: "Remote",
      company: { name: "AI Solutions", logo:  profilePic },
      createdAt: "2024-03-06T12:00:00Z",
      position: 1,
      jobType: "Part-time",
      salary: "90K",
    },
   
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-3 text-blue-500">
          Browse Job Listings
        </h1>
        <p className="text-lg text-gray-300">
          Find your dream job in just a few clicks!
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex gap-6 px-4">
        {/* Jobs Listing Section */}
        <div className="flex-1 h-[88vh] overflow-y-auto pb-5 ">
          {filterJobs.length <= 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-xl font-medium">
                No jobs found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 "
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-400">
                      {new Date(job.createdAt).toDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={job.company.logo}
                      alt="ABCD"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold text-lg">
                        {job.company.name}
                      </h1>
                      <p className="text-sm text-gray-400">{job.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h1 className="font-bold text-xl mb-3">{job.title}</h1>
                    <p className="text-sm text-gray-300">{job.description}</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-blue-400 text-black text-sm font-bold rounded-md">
                      {job.position} Positions
                    </span>
                    <span className="px-2 py-1 bg-red-600 text-white text-sm font-bold rounded-md">
                      {job.jobType}
                    </span>
                    <span className="px-2 py-1 bg-green-500 text-black text-sm font-bold rounded-md">
                      {job.salary} LPA
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
