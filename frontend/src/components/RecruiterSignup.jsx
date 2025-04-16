import { setLoading } from "@/redux/authSlice";
import { RECRUITER_API_END_POINT, USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const RecruiterSignup = () => {
  const [input, setInput] = useState({
    companyname: "",
    email: "",
    cinnumber: "",
    companyaddress: "",
    companystatus: "",
    password: "",
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
    formData.append("companyname", input.companyname);
    formData.append("email", input.email);
    formData.append("cinnumber", input.cinnumber);
    formData.append("companyaddress", input.companyaddress);
    formData.append("companystatus", input.companystatus);
    formData.append("password", input.password);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${RECRUITER_API_END_POINT}/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        // navigate("/login");
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
      {/* <Navbar /> */}
      {/* <div className="flex items-center justify-center bg-black min-h-screen p-4"> */}
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-black bg-opacity-90 text-white border border-blue-600 rounded-lg shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
            Recruiter Sign Up
          </h1>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Company Name</Label>
            <Input
              type="text"
              placeholder="Enter your company name"
              value={input.companyname}
              name="companyname"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Email</Label>
            <Input
              type="email"
              placeholder="Enter your company email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">
              Company Identification Number (CIN)
            </Label>
            <Input
              type="number"
              placeholder="Enter your company CIN"
              value={input.cinnumber}
              name="cinnumber"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Company Address</Label>
            <Input
              type="text"
              placeholder="Enter your company address"
              value={input.companyaddress}
              name="companyaddress"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
          </div>

          <div className="mb-4">
            <Label className="text-sm font-semibold">Company Status</Label>
            <Input
              type="text"
              placeholder="Enter your company status (e.g., Active, Inactive)"
              value={input.companystatus}
              name="companystatus"
              onChange={changeEventHandler}
              required
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
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
              className="mt-1 w-full p-3 bg-gray-900 text-white rounded-lg border border-blue-600"
            />
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
      {/* </div> */}
    </>
  );
};

export default RecruiterSignup;
