import React from "react";

const LatestInternshipCards = ({ internship }) => {
  return (
    <div className="relative p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 overflow-hidden">
      {/* Apply Now Button */}
      <button className="absolute top-4 right-4 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out px-4 py-2 rounded-md cursor-pointer">
        Apply Now
      </button>

      {/* Header with Date */}
      <div className="flex justify-between mb-4">
        <p className="text-sm text-gray-400">
          {new Date(internship.createdAt).toDateString()}
        </p>
      </div>

      {/* Company Info */}
      <div className="flex gap-3 mb-4 items-start">
        <img
          src={internship.company.logo}
          alt={`${internship.company.name} Logo`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h1 className="font-semibold text-lg">{internship.company.name}</h1>
          <p className="text-sm text-gray-400">{internship.location}</p>
        </div>
      </div>

      {/* Internship Title & Description (Left Aligned) */}
      <div className="mb-3 text-left">
        <h1 className="font-bold text-xl">{internship.title}</h1>
        {internship.description && (
          <p className="text-sm text-gray-300 mt-1">{internship.description}</p>
        )}
      </div>

      {/* Internship Tags (Duration, Stipend, and Type) */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-2 py-1 bg-blue-400 text-black text-sm font-bold rounded-md">
          {internship.duration}
        </span>
        <span className="px-2 py-1 bg-green-500 text-black text-sm font-bold rounded-md">
          {internship.stipend}
        </span>
        {/* Internship Type Badge (Remote/In-office) */}
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

      {/* Required Skills (Left Aligned) */}
      <div className="mt-3 text-left">
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
  );
};

export default LatestInternshipCards;
