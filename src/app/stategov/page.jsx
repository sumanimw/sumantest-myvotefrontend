
"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/page";
import RootLayout from "../layout";

// Home component
const stategov = () => {
  // Sample data for user cards
  const userCards = [
    { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
    { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
    { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
    // Add more users as needed
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards to show at a time
    slidesToScroll: 1,
  };

  return (
<RootLayout authPage={true}>
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
            <p className="text-xl text-black">Legislative Assembly</p>
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
            <p className="text-xl text-black">Legislative Council</p>
          </div>
        </div>
      </div>

      {/* User Card Slider */}
      <Slider {...sliderSettings}>
        {userCards.map((user) => (
          <div key={user.id} className="px-2">
            <div className="bg-gray-200 rounded-lg p-8">
              <img
                src={user.image}
                alt={`${user.name}'s Image`}
                className="rounded-full w-40 h-40 object-cover mx-auto mb-2"
              />
              <p className="text-center text-[#52C7D2]">{user.name}</p>
              <p className="text-center text-[#52C7D2]">{user.position}</p>
              <div className="flex justify-center">
                {[...Array(user.stars)].map((_, index) => (
                //   <FaStar key={index} className="text-[#52C7D2]" />
                  <FaRegStar key={index} className="text-[#52C7D2]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </RootLayout>
  );
};

export default stategov;
