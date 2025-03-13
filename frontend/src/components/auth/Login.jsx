import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.role) {
      toast.error("Please select a role");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        console.log("User data:", res.data.user);
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Inline styles for the floating animation and shaded corner border
  const formStyle = {
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    animation: "floating 3s ease-in-out infinite",
  };

  const borderStyle = {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    borderRadius: "10px",
    border: "2px solid #3182ce", // Blue border color
    zIndex: -1,
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-black min-h-screen px-1">
        {" "}
        {/* Adjusted padding */}
        <form
          onSubmit={submitHandler}
          style={formStyle}
          className="w-full max-w-md bg-black bg-opacity-90 text-white border border-blue-600 rounded-lg shadow-lg p-6 mb-0"
        >
          <div style={borderStyle}></div>
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
            Login
          </h1>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <RadioGroup className="flex justify-between my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                required
              />
              <Label className="text-sm text-blue-300 cursor-pointer">
                Student
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                required
              />
              <Label className="text-sm text-blue-300 cursor-pointer">
                Recruiter
              </Label>
            </div>
          </RadioGroup>

          {loading ? (
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300"
            >
              Login
            </Button>
          )}

          <p className="mt-4 text-sm text-center text-white font-bold">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-400 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
