import { setLoading } from "@/redux/authSlice";
import { STUDENT_API_END_POINT, USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup } from "./ui/radio-group";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Calendar } from "./ui/calendar";

const StudentSignup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    dateofbirth: "",
    password: "",
    status: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("dateofbirth", input.dateofbirth);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("status", input.status);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${STUDENT_API_END_POINT}/signup`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-black min-h-screen p-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-black bg-opacity-90 text-white border border-blue-600 rounded-lg shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
            Student Sign Up
          </h1>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Date of Birth</Label>
            <Input
              type="date"
              value={input.dateofbirth}
              name="dateofbirth"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
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
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Status</Label>
            <RadioGroup className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="status"
                  value="fresher"
                  checked={input.status === "fresher"}
                  onChange={changeEventHandler}
                  required
                />
                <Label className="text-sm text-blue-300">Fresher</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="status"
                  value="experienced"
                  checked={input.status === "experienced"}
                  onChange={changeEventHandler}
                  required
                />
                <Label className="text-sm text-blue-300">Experienced</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <Button className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Sign Up
            </Button>
          )}

          <p className="mt-4 text-sm text-center text-white font-bold">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default StudentSignup;
