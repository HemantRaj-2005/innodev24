import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Data Analyst",
      "ML Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-[#000314] p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3"/>
      <RadioGroup>
        {
            filterData.map((data,index) => (
                <div key={data.filterType}>
                    <h1>{data.filterType}</h1>
                    {
                        data.array.map((item,index) => {
                            return (
                                <div key={item} className="flex items-center space-x-2 my-2">
                                    <RadioGroupItem value={item}/>
                                    <Label>{item} </Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
