import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import profilePic from "./assets/a.jpg";
import FilterCard from "./FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostInternship from "./recruiter/PostInternship";
import { Button } from "./ui/button";
import { setAllInternships } from "../redux/internshipSlice";

const Internships = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { allInternships, searchedQuery } = useSelector(
    (store) => store.internship
  );
  const [filterInternships, setFilterInternships] = useState([]);
  const [showPostInternship, setShowPostInternship] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  const fetchInternships = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/internship/get",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success && Array.isArray(data.internships)) {
        dispatch(setAllInternships(data.internships));
        setFilterInternships(data.internships);
      }
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, [dispatch]);

  useEffect(() => {
    const fetchFilteredInternships = async () => {
      try {
        const params = new URLSearchParams();
        for (const key in selectedFilters) {
          selectedFilters[key].forEach((value) => params.append(key, value));
        }

        const queryString = params.toString();
        const url = `http://localhost:8000/api/v1/internship/get?${queryString}`;

        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await response.json();
        if (data.success && Array.isArray(data.internships)) {
          setFilterInternships(data.internships);
        } else {
          setFilterInternships([]);
        }
      } catch (error) {
        console.error("Error fetching filtered internships:", error);
      }
    };

    if (Object.keys(selectedFilters).length > 0) {
      fetchFilteredInternships();
    } else {
      setFilterInternships(allInternships);
    }
  }, [selectedFilters]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold mb-3 text-blue-500">
          Explore <span className="text-white text-4xl">Internships</span>
        </h1>
        <p className="text-lg text-gray-300">
          Gain hands-on experience and kickstart your career!
        </p>
        {user?.role === "recruiter" && (
          <Button
            onClick={() => setShowPostInternship(true)}
            className="mt-4 bg-green-500 hover:bg-green-600"
          >
            Post New Internship
          </Button>
        )}
      </div>

      {showPostInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <PostInternship
            onClose={() => setShowPostInternship(false)}
            onSuccess={() => {
              fetchInternships();
              setShowPostInternship(false);
            }}
          />
        </div>
      )}

      <div className="container mx-auto flex gap-6 px-4">
        <div className="w-1/5 p-6 rounded-lg border border-gray-700">
          <h2 className="text-lg font-semibold text-blue-400 mb-4">
            Filter Internships
          </h2>
          <FilterCard
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        <div className="flex-1 overflow-y-auto pb-5">
          {filterInternships.length <= 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-xl font-medium">
                No internships found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterInternships.map((internship) => (
                <div
                  key={internship._id}
                  className="relative p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 transition duration-300"
                >
                  <button className="absolute top-4 right-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
                    Apply Now
                  </button>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-400">
                      {new Date(internship.createdAt).toDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={internship?.company?.logo || profilePic}
                      alt="Company Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold text-lg">
                        {internship?.company?.name || "Unknown Company"}
                      </h1>
                      <p className="text-sm text-gray-400">
                        {internship.location}
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h1 className="font-bold text-xl">{internship.title}</h1>
                    <p className="text-sm text-gray-300 mt-1">
                      {internship.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-orange-400 text-black text-sm font-bold rounded-md">
                      {internship.duration}
                    </span>
                    <span className="px-2 py-1 bg-blue-500 text-black text-sm font-bold rounded-md">
                      ₹{internship.stipend}
                    </span>
                    <span
                      className={`px-2 py-1 text-sm font-bold rounded-md ${
                        internship.type === "Remote"
                          ? "bg-yellow-500 text-black"
                          : "bg-purple-700 text-white"
                      }`}
                    >
                      {internship.type}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-300 text-sm font-semibold mb-2">
                      Required Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-white text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-7">
                    <Button
                      onClick={() => {
                        if (user?.role === "student") {
                          navigate(`/internship/description/${internship._id}`);
                        } else if (user?.role === "recruiter") {
                          navigate(`/internship/details/${internship._id}`);
                        }
                      }}
                      variant="outline"
                      className="px-2 py-1 bg-blue-500 text-white text-sm font-bold rounded-md hover:bg-blue-600 cursor-pointer"
                    >
                      Details
                    </Button>
                    <Button className="px-2 py-1 bg-[#7209b7] text-white text-sm font-bold rounded-md hover:bg-purple-800">
                      Save for later
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Internships;
