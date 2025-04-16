// Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import LatestInternships from "./LatestInternships";
import Footer from "./Footer";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection query={query} setQuery={setQuery} />
      <CategoryCarousel setQuery={setQuery} /> {/* 🟢 Pass setQuery here */}
      <LatestJobs query={query} />
      <LatestInternships query={query} />
      <Footer />
    </div>
  );
};

export default Home;
