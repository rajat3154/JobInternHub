import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import profilePic from "../assets/a.jpg";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";


const Navbar = () => {
   const { user } = useSelector((store) => store.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
  //  let user = { role: "student" }; // Mocked user object for testing
 const logoutHandler = async () => {
   try {
     const res = await axios.get(`${USER_API_END_POINT}/logout`, {
       withCredentials: true,
     });
     if (res.data.success) {
       dispatch(setUser(null));
       navigate("/");
       toast.success(res.data.message);
     }
   } catch (error) {
     console.error(error);
     toast.error(
       error.response?.data?.message || "An unexpected error occurred."
     );
   }
 };
  return (
    <div className="bg-black bg-opacity-90 backdrop-blur-lg shadow-lg border-b border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-8xl h-20 px-6">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <h1 className="text-white font-extrabold tracking-wide text-lg md:text-2xl lg:text-3xl">
            JobIntern<span className="text-blue-500">Hub</span>
          </h1>
        </div>

        {/* NAV ITEMS */}
        <div className="flex items-center gap-6 ml-auto">
          <ul className="hidden md:flex items-center gap-6 text-gray-300 text-base">
            <li>
              <Link to="/" className="hover:text-white text-lg md:text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-white text-lg md:text-xl">
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/internships"
                className="hover:text-white text-lg md:text-xl"
              >
                Internships
              </Link>
            </li>
          </ul>

          {/* AUTH BUTTONS */}
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-gray-500 text-white hover:bg-gray-700 px-4 py-3"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              {/* FIX: Wrap Avatar in div to ensure proper trigger */}
              <PopoverTrigger asChild>
                <div className="cursor-pointer">
                  <Avatar className="w-10 h-10 rounded-full border border-gray-500">
                    <AvatarImage src={profilePic} alt="profile image" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
              </PopoverTrigger>

              {/* FIX: Add portal={false} to prevent positioning issues */}
              <PopoverContent
                portal={false}
                className="w-64 p-4 bg-black border-gray-700 text-gray-300 rounded-lg"
              >
                {/* User Profile Info */}
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

                {/* Menu Options */}
                <div className="space-y-2">
                  {user.role === "student" && (
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
                      className="text-gray-300 hover:text-white cursor-pointer"
                      onClick={logoutHandler}
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
