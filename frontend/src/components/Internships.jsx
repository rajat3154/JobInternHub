import React from "react";
import Navbar from "./shared/Navbar";
import profilePic from "./assets/a.jpg";

const Internships = () => {
  const filterInternships = [
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
    },
    {
      id: 3,
      title: "Data Science Intern",
      description: "Analyze datasets and develop predictive models.",
      location: "Hyderabad, India",
      company: { name: "TCS", logo: profilePic },
      createdAt: "2024-03-07T12:00:00Z",
      duration: "4 Months",
      stipend: "₹18,000/month",
      skills: ["Python", "Machine Learning", "SQL"],
    },
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
    },
    {
      id: 3,
      title: "Data Science Intern",
      description: "Analyze datasets and develop predictive models.",
      location: "Hyderabad, India",
      company: { name: "TCS", logo: profilePic },
      createdAt: "2024-03-07T12:00:00Z",
      duration: "4 Months",
      stipend: "₹18,000/month",
      skills: ["Python", "Machine Learning", "SQL"],
    },
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
    },
    {
      id: 3,
      title: "Data Science Intern",
      description: "Analyze datasets and develop predictive models.",
      location: "Hyderabad, India",
      company: { name: "TCS", logo: profilePic },
      createdAt: "2024-03-07T12:00:00Z",
      duration: "4 Months",
      stipend: "₹18,000/month",
      skills: ["Python", "Machine Learning", "SQL"],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-3 text-blue-500">
          Explore Internships
        </h1>
        <p className="text-lg text-gray-300">
          Gain hands-on experience and kickstart your career!
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex gap-6 px-4 .no-scrollbar overflow-hidden">
        {/* Internships Listing Section */}
        <div className="flex-1 h-[88vh] overflow-y-auto pb-5 no-scrollbar ">
          {filterInternships.length <= 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-xl font-medium">
                No internships found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 overflow-hidden"
                >
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
