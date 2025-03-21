import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CloudCog, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { STUDENT_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { user, token: reduxToken } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phonenumber: user?.phonenumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills ? user.profile.skills.join(", ") : "",
    file: user?.profile?.resume || null,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phonenumber", input.phonenumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file && typeof input.file !== "string") {
      formData.append("profile", input.file);
    }

    try {
      setLoading(true);
      const token =
        reduxToken ||
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

      if (!token) {
        throw new Error("Authentication token missing");
      }

      const res = await axios.put(
        `${STUDENT_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      console.error("Update Profile Error:", error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-black bg-opacity-90 rounded-lg shadow-lg p-6 flex justify-center items-center mx-auto w-full max-w-md">
        <DialogHeader>
          <DialogTitle className="text-blue-400 text-center text-2xl font-bold">
            Update Profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler} className="w-full">
          <div className="grid gap-6 py-4">
            {["fullname", "email", "phonenumber", "bio"].map((field) => (
              <div key={field} className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor={field}
                  className="text-right text-sm font-semibold text-white"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={input[field]}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-900 text-white border border-blue-600 focus:ring-2 focus:ring-blue-500 rounded-lg p-3"
                  disabled={loading}
                />
              </div>
            ))}
            {/* Skills Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="skills"
                className="text-right text-sm font-semibold text-white"
              >
                Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                type="text"
                value={input.skills}
                onChange={(e) =>
                  setInput({
                    ...input,
                    skills: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                className="col-span-3 bg-gray-900 text-white border border-blue-600 focus:ring-2 focus:ring-blue-500 rounded-lg p-3"
                disabled={loading}
              />
            </div>
            {/* Resume Upload */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="file"
                className="text-right text-sm font-semibold text-white"
              >
                Resume
              </Label>
              <div className="col-span-3">
                {input.file && typeof input.file === "string" && (
                  <p className="text-sm text-gray-300 mb-2">
                    Current File: {input.file.split("/").pop()}
                  </p>
                )}
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="cursor-pointer bg-black text-white border border-blue-600 focus:ring-2 focus:ring-blue-500 rounded-lg p-3 w-full"
                  disabled={loading}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            {loading ? (
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center"
                disabled
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300"
              >
                Update
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
