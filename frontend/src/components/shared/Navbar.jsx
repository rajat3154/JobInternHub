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
    <div className="bg-black ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Aspire<span className="text-blue-500">Next</span>
          </h1>
        </div>

        {/* Navigation and User Actions */}
        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-5 text-gray-300">
            {user && user.role === "recruiter" && (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-white transition duration-300"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-white transition duration-300"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            )}
            {user && user.role === "student" && (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-white transition duration-300"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-white transition duration-300"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-gray-500 text-black hover:bg-gray-700 hover:text-white"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-8 h-8 rounded-full cursor-pointer border border-gray-500">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile Picture"
                  />
                  <AvatarFallback>
                    {user?.fullname
                      ?.split(" ")
                      ?.map((name) => name[0])
                      ?.join("")
                      ?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 bg-black border-gray-700 text-gray-300 rounded-lg">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-10 h-10 rounded-full border border-gray-500">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="Profile Picture"
                    />
                    <AvatarFallback>
                      {user?.fullname
                        ?.split(" ")
                        ?.map((name) => name[0])
                        ?.join("")
                        ?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-lg text-white">
                      {user?.fullname}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {user?.profile?.bio}
                    </p>
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
                      onClick={logoutHandler}
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
