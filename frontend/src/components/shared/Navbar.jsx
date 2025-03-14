import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import profilePic from "../assets/a.jpg";

const Navbar = () => {
  let user = false;
  return (
    <div className="bg-black bg-opacity-90 backdrop-blur-lg shadow-lg border-b border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        <div>
          <h1 className="text-white text-3xl font-extrabold tracking-wide">
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
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-gray-500 text-white hover:bg-gray-700 hover:text-white cursor-pointer"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white cursor-pointer">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-8 h-8 rounded-full cursor-pointer border border-gray-500">
                  <AvatarImage src={profilePic} alt="profile image" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 bg-black border-gray-700 text-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Avatar className="w-10 h-10 rounded-full border border-gray-500">
                    <AvatarImage src={profilePic} alt="profile image" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="link" className="text-gray-300">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  {user && user.role === "student" && (
                    <div className="flex items-center gap-2 cursor-pointer">
                      <User2 className="text-gray-300" />
                      <Button variant="link" className="text-gray-300">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer">
                    <LogOut className="text-gray-300" />
                    <Button
                      variant="link"
                      className="text-gray-300 hover:text-white"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
