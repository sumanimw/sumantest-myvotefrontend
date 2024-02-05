"use client";
import React from "react";
import PopularPoliticians from "./politicans/popularPoliticans";
import LatestPoliticians from "./politicans/latestPoliticians";
// Home component
const Homeone = () => {
  // Sample data for user cards
  const userCards = [
    { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
    { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
    { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
    // Add more users as needed
  ];
  const repeatedUserCards = [...userCards, ...userCards]; // Repeat the user cards for display
  const verticalSliderSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3, // Set the number of cards to show at a time to 1 for vertical slider
    slidesToScroll: 1,
  };
  
  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards to show at a time
    slidesToScroll: 2,
  };
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center">
        <div className="bg-[#E2F9FF] rounded-lg p-6 mb-8 w-64 h-64 mx-2 relative">
          {/* Content for Central Government */}
          <img
            src="/bannerimg3.jpeg"
            alt="Blue Container Image"
            className="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
          />
          <div className="text-center">
            <p className="text-xl text-black">Central Government</p>
          </div>
        </div>
        <div className="bg-[#52C7D2] border border-[#52C7D2]  h-60 my-4 mx-2"></div> {/* Vertical line */}
        <div className="bg-[#E2F9FF] rounded-lg p-6 mb-8 w-64 h-64 mx-2 relative">
          {/* Content for State Government */}
          <img
            src="/bannerimg3.jpeg"
            alt="Blue Container Image"
            className="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
          />
          <div className="text-center">
            <p className="text-xl text-black">State Government</p>
          </div>
        </div>
      </div>
      <PopularPoliticians politicans={userCards} />
      <LatestPoliticians politicans={repeatedUserCards} />
    </div>
  );
};
export default Homeone;