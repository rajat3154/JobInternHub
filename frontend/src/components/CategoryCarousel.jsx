import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Data Science",
  "Graphic Designer",
];

const CategoryCarousel = () => {
  return (
    <div className="bg-black text-white text-center ">
      {/* Container */}
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>

        {/* Carousel */}
        <div className="w-8xl">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {category.map((cat, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 px-3 py-4"
                >
                  <Button
                    variant="outline"
                    className="w-full py-3 px-6 text-lg rounded-full border-2 border-blue-500 text-white bg-black hover:bg-blue-500 hover:text-white transition-all"
                  >
                    {cat}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-4 transform -translate-y-1/2 left-[-20px] px-2">
              <CarouselPrevious className="bg-blue-500 text-white p-3 rounded-full">
                &lt;
              </CarouselPrevious>
            </div>

            <div className="absolute top-5 transform -translate-y-1/2 right-0 px-2">
              <CarouselNext className="bg-blue-500 text-white p-3 rounded-full">
                &gt;
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
