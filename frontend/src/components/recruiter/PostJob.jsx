import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const PostJob = ({ onClose, onSuccess }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    recruiterId: "", // Assuming this will be filled manually or passed in props
  });

  const [loading, setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        onSuccess();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-8 w-full max-w-2xl border border-blue-600 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
      >
        &times;
      </button>

      <h1 className="text-2xl font-bold mb-8 text-center text-blue-400">
        Post a New Job
      </h1>

      <form onSubmit={submitHandler} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-sm font-medium mb-2 block">Title</Label>
            <Input
              name="title"
              value={input.title}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">
              Description
            </Label>
            <Input
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">
              Requirements
            </Label>
            <Input
              name="requirements"
              value={input.requirements}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Salary</Label>
            <Input
              name="salary"
              value={input.salary}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Location</Label>
            <Input
              name="location"
              value={input.location}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Job Type</Label>
            <Input
              name="jobType"
              value={input.jobType}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Experience</Label>
            <Input
              name="experience"
              value={input.experience}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Positions</Label>
            <Input
              type="number"
              name="position"
              value={input.position}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>

          <div className="col-span-full">
            <Label className="text-sm font-medium mb-2 block">
              Recruiter ID
            </Label>
            <Input
              name="recruiterId"
              value={input.recruiterId}
              onChange={changeEventHandler}
              className="bg-gray-800 border-gray-700 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Posting Job...
            </>
          ) : (
            "Post Job"
          )}
        </Button>
      </form>
    </div>
  );
};

export default PostJob;
