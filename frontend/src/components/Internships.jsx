import React from "react";
import Navbar from "./shared/Navbar";
import profilePic from "./assets/a.jpg";
import FilterCard from "./FilterCard";

const Internships = () => {
  const staticInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      description: "Build dynamic user interfaces using React and Tailwind.",
      location: "Bangalore, India",
      company: { name: "Infosys", logo: profilePic },
      createdAt: "2024-03-12T12:00:00Z",
      duration: "6 Months",
      stipend: "₹15,000/month",
      skills: ["React", "Tailwind", "JavaScript"],
      type: "Remote",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
    {
      id: 2,
      title: "Marketing Intern",
      description: "Assist in social media campaigns and digital strategies.",
      location: "Mumbai, India",
      company: { name: "Flipkart", logo: profilePic },
      createdAt: "2024-03-09T12:00:00Z",
      duration: "3 Months",
      stipend: "₹10,000/month",
      skills: ["SEO", "Content Writing", "Social Media"],
      type: "In-office",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold mb-3 text-blue-500">
          Explore <span className="text-white text-4xl">Internships</span>
        </h1>
        <p className="text-lg text-gray-300">
          Gain hands-on experience and kickstart your career!
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex gap-6 px-4">
        {/* Filters Section */}
        <div className="w-1/5 bg-black p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold text-blue-400 mb-4">
            Filter Jobs
          </h2>
          <FilterCard />
        </div>

        {/* Internships Listing Section */}
        <div className="flex-1 overflow-y-auto pb-5">
          {staticInternships.length <= 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-xl font-medium">
                No internships found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {staticInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="relative p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300"
                >
                  {/* Apply Now Button */}
                  <button className="absolute top-4 right-4 z-10 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out px-4 py-2 rounded-md">
                    Apply Now
                  </button>

                  {/* Header with Date */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-400">
                      {new Date(internship.createdAt).toDateString()}
                    </p>
                  </div>

                  {/* Company Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={internship.company.logo}
                      alt="Company Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold text-lg">
                        {internship.company.name}
                      </h1>
                      <p className="text-sm text-gray-400">
                        {internship.location}
                      </p>
                    </div>
                  </div>

                  {/* Internship Details */}
                  <div className="mb-3">
                    <h1 className="font-bold text-xl">{internship.title}</h1>
                    <p className="text-sm text-gray-300 mt-1">
                      {internship.description}
                    </p>
                  </div>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-400 text-black text-sm font-bold rounded-md">
                      {internship.duration}
                    </span>
                    <span className="px-2 py-1 bg-green-500 text-black text-sm font-bold rounded-md">
                      {internship.stipend}
                    </span>
                    <span
                      className={`px-2 py-1 text-sm font-bold rounded-md ${
                        internship.type === "Remote"
                          ? "bg-yellow-500 text-black"
                          : "bg-purple-700 text-white"
                      }`}
                    >
                      {internship.type}
                    </span>
                  </div>

                  {/* Required Skills */}
                  <div className="mt-3">
                    <p className="text-gray-300 text-sm font-semibold mb-2">
                      Required Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-white text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Internships;
