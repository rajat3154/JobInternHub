import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import profilePic from "./assets/a.jpg";
import AppliedInternships from "./AppliedInternships";

const appliedInternships = [
  {
    id: 1,
    company: "Google",
    role: "AI Research Intern",
    duration: "3 Months",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Software Engineer Intern",
    duration: "6 Months",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Data Science Intern",
    duration: "4 Months",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-black p-4">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-black bg-opacity-90 text-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={profilePic}
                alt="profile image"
                className="h-24 w-24 rounded-full border-4 border-blue-600"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl text-blue-400 ">
                Rajat Ranvir
              </h1>
              <p className="text-white">Software Engineer | AIML Enthusiast</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white bg-black border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            <Pen className="text-white" />
          </Button>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            <span>rajaturanvir31@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-green-400" />
            <span>8896547512</span>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Skills</h2>
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-500 text-white">Python</Badge>
            <Badge className="bg-blue-500 text-white">MERN Stack</Badge>
            <Badge className="bg-blue-500 text-white">Data Analysis</Badge>
            <Badge className="bg-blue-500 text-white">Machine Learning</Badge>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Resume</h2>
          <a
            target="_blank"
            href="https://example.com/resume.pdf"
            className="text-white hover:underline"
          >
            Rajat_Resume.pdf
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-black bg-opacity-90 rounded-lg shadow-lg p-4 my-2">
        <h1 className="font-bold text-2xl text-blue-400 mb-7">
          Applied Jobs & Internships
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black-900 p-4 rounded-lg">
            <h2 className="font-semibold text-xl text-blue-300 mb-3">
              All Applied Jobs
            </h2>
            <AppliedJobTable />
          </div>
          <div className="bg-black p-4 rounded-lg">
            <h2 className="font-semibold text-xl text-blue-300 mb-3">
              All Applied Internships
            </h2>
            <AppliedInternships />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
