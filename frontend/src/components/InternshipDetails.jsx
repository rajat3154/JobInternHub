import React from "react";

const InternshipDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 overflow-x-hidden overflow-y-hidden">
      <div className="container px-4 ml-8 mr-10">
        {/* Internship Title */}
        <div className="flex items-center justify-between mb-6 mr-7">
          <h1 className="text-3xl font-bold">Frontend Developer Intern</h1>
        </div>

        {/* Internship Info Badges */}
        <div className="flex gap-4 mb-6">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-md">
            6 Months
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">
            ₹15,000/month
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-bold rounded-md">
            Remote
          </span>
        </div>

        {/* Internship Description */}
        <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
          Internship Details
        </h2>
        <div className="space-y-4 mb-12">
          <h1 className="font-bold text-lg">
            Role:{" "}
            <span className="font-normal text-gray-300">
              Frontend Developer Intern
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Location:{" "}
            <span className="font-normal text-gray-300">Bangalore, India</span>
          </h1>
          <h1 className="font-bold text-lg">
            Description:{" "}
            <span className="font-normal text-gray-300">
              Build dynamic user interfaces using React and Tailwind.
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Duration:{" "}
            <span className="font-normal text-gray-300">6 Months</span>
          </h1>
          <h1 className="font-bold text-lg">
            Stipend:{" "}
            <span className="font-normal text-gray-300">₹15,000/month</span>
          </h1>
          <h1 className="font-bold text-lg">
            Type: <span className="font-normal text-gray-300">Remote</span>
          </h1>
          <h1 className="font-bold text-lg">
            Required Skills:{" "}
            <span className="font-normal text-gray-300">
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "Tailwind", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700 text-white text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Total Applicants:{" "}
            <span className="font-normal text-gray-300">25</span>
          </h1>
          <h1 className="font-bold text-lg">
            Posted Date:{" "}
            <span className="font-normal text-gray-300">2024-03-12</span>
          </h1>
        </div>

        {/* Applicants Table */}
        <div className="mt-12">
          <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
            Applicants
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-600">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Resume</th>
                  <th className="pb-3">Applied Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Applicant Data */}
                <tr className="border-b border-gray-600">
                  <td className="py-4">John Doe</td>
                  <td>john.doe@email.com</td>
                  <td>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
                      Pending Review
                    </span>
                  </td>
                  <td>
                    <a href="#" className="text-blue-400 hover:underline">
                      View PDF
                    </a>
                  </td>
                  <td>2024-03-20</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-4">Jane Smith</td>
                  <td>jane.smith@email.com</td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                      Shortlisted
                    </span>
                  </td>
                  <td>
                    <a href="#" className="text-blue-400 hover:underline">
                      View PDF
                    </a>
                  </td>
                  <td>2024-03-21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
