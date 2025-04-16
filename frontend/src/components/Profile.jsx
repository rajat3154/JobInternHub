import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import useGetAppliedJobs from "./hooks/useGetAppliedJobs";


const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-black p-4">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-black bg-opacity-90 text-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="profile image"
                className="h-24 w-24 rounded-full border-4 border-blue-600"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl text-blue-400 ">
                {user?.fullname}
              </h1>
              <p className="text-white ">{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Styled Pen Button */}
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            size="sm"
            className="text-white bg-black border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            <Pen className="text-white" />
          </Button>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-green-400" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Skills</h2>
          <div className="flex items-center gap-2">
            {user?.profile?.skills.length > 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index} className="bg-blue-500 text-white">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Resume</h2>
          {isResume ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-white hover:underline"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-black bg-opacity-90 rounded-lg shadow-lg p-4 my-2">
        <h1 className="font-bold text-2xl text-blue-400 mb-7">
          All Applied Jobs
        </h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
