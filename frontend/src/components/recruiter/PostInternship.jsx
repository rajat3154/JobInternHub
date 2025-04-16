import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { INTERNSHIP_API_END_POINT } from "@/utils/constant";

const PostInternship = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    stipend: "",
    location: "",
    skills: "",
    type: "Remote",
    recruiterId: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(`Field changed: ${e.target.name}, Value: ${e.target.value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    setLoading(true);

    try {
      const res = await axios.post(
        `${INTERNSHIP_API_END_POINT}/post`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Response received:", res.data);

      if (res.data.success) {
        toast.success("Internship posted successfully!");
        onSuccess(res.data.internship);
      }
    } catch (error) {
      console.error("Error posting internship:", error.response || error);
      toast.error(error.response?.data?.message || "Failed to post internship");
    } finally {
      setLoading(false);
      console.log("Form submission completed.");
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-8 w-full max-w-2xl border border-blue-500 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X className="h-6 w-6" />
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Post New Internship
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Title</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Duration</Label>
            <Input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Stipend</Label>
            <Input
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Location</Label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Type</Label>
            <Select
              value={formData.type}
              onValueChange={(value) =>
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="In-office">In-office</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Skills (comma separated)</Label>
            <Input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Python, Marketing..."
              required
            />
          </div>

          <div>
            <Label>Recruiter ID</Label>
            <Input
              name="recruiterId"
              value={formData.recruiterId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-full">
            <Label>Description</Label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {loading ? (
          <Button className="w-full" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Posting...
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Post Internship
          </Button>
        )}
      </form>
    </div>
  );
};

export default PostInternship;
