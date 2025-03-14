import { RadioGroup } from "@radix-ui/react-radio-group";
import React, { useEffect, useState } from "react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";


const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-black p-6 rounded-lg shadow-lg ">
      <RadioGroup > 
            
        {filterData.map((data, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-md text-white">
              {data.filterType}
            </h2>
            <div className="space-y-4 mt-3">
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <div key={itemId} className="flex items-center space-x-3">
                    <RadioGroupItem
                      value={item}
                      id={itemId}
                      className="cursor-pointer w-5 h-5 rounded-full border-2 border-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 radio-button"
                    />
                    <Label
                      htmlFor={itemId}
                      className="text-sm text-white cursor-pointer hover:text-blue-500"
                    >
                      {item}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
