import React from "react";
import { Link } from "react-router-dom";
import LatestInternshipCards from "./LatestInternshipCards";
import profilePic from "./assets/a.jpg"; 
const LatestInternships = () => {
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
     id: 3,
     title: "Data Science Intern",
     description: "Analyze datasets and develop predictive models.",
     location: "Hyderabad, India",
     company: { name: "TCS", logo: profilePic },
     createdAt: "2024-03-07T12:00:00Z",
     duration: "4 Months",
     stipend: "₹18,000/month",
     skills: ["Python", "Machine Learning", "SQL"],
     type: "Remote", 
   },
   {
     id: 4,
     title: "Backend Developer Intern",
     description: "Work on API development using Node.js and Express.",
     location: "Delhi, India",
     company: { name: "Amazon", logo: profilePic },
     createdAt: "2024-03-06T12:00:00Z",
     duration: "5 Months",
     stipend: "₹20,000/month",
     skills: ["Node.js", "Express", "MongoDB"],
     type: "Hybrid", 
   },
   {
     id: 5,
     title: "UI/UX Design Intern",
     description: "Create intuitive designs and wireframes using Figma.",
     location: "Pune, India",
     company: { name: "Microsoft", logo: profilePic },
     createdAt: "2024-03-05T12:00:00Z",
     duration: "3 Months",
     stipend: "₹12,000/month",
     skills: ["Figma", "Adobe XD", "User Research"],
     type: "Remote", 
   },
 ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-10">
          <span className="text-blue-500 text-3xl">Latest and Top </span>
          Internships
        </h1>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticInternships.map((internship) => (
            <LatestInternshipCards
              key={internship.id}
              internship={internship}
            />
          ))}

          {/* View More Jobs Card Styled Like Other Internship Cards */}
          <Link
            to="/internships"
            className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 overflow-hidden flex flex-col items-center justify-center text-center w-full"
            style={{ minHeight: "270px" }} // Match internship card height
          >
            <h2 className="text-2xl font-bold text-blue-400">
              View More Internships
            </h2>
            <p className="mt-2 text-gray-300 text-lg">
              Explore all Internships
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

export default LatestInternships;
