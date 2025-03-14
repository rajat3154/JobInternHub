import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";

import LatestInternships from "./LatestInternships";
const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <LatestInternships/>
      <Footer />
    </div>
  );
};

export default Home;
