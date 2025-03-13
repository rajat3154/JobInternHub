import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-90 backdrop-blur-lg shadow-lg border-b border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-14 px-6">
        <div>
          <h1 className="text-white text-2xl font-extrabold tracking-wide">
            JobIntern<span className="text-blue-500">Hub</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-gray-300 ">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className="hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/internships"
                className="hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Internships
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-white text-gray-300 px-6 py-2  hover:bg-gray-800 hover:text-white transition-all transform hover:scale-105 shadow-md cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 px-6 py-2  text-white font-semibold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
