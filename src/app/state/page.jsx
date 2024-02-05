"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PopularPoliticians from "@/components/politicians/popularPoliticians";
import LatestPoliticians from "@/components/politicians/latestPoliticians";

const State = () => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  const userCards = [
    { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
    { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
    { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
    // Add more users as needed
  ];

  const repeatedUserCards = [...userCards, ...userCards];

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center">
        <div
          className="bg-[#E2F9FF] rounded-lg p-6 mb-8 w-64 h-64 mx-2 relative "
        
        >
          {/* Content for Legislative Assembly */}
          <img
            src="/bannerimg3.jpeg"
            alt="Blue Container Image"
            className="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
          />
          <div className="text-center">
            <p className="text-xl text-black cursor-pointer" onClick={() => handleRedirect("/mla")}>
              Legislative Assembly
            </p>
          </div>
        </div>

        <div className="bg-[#52C7D2] border border-[#52C7D2] h-60 my-4 mx-2"></div>

        <div
          className="bg-[#E2F9FF] rounded-lg p-6 mb-8 w-64 h-64 mx-2 relative cursor-pointer"
        
        >
          {/* Content for Legislative Council */}
          <img
            src="/bannerimg3.jpeg"
            alt="Blue Container Image"
            className="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
          />
          <div className="text-center">
            <p className="text-xl text-black cursor-pointer" onClick={() => handleRedirect("/mlc")}>
              Legislative Council
            </p>
          </div>
        </div>
      </div>

      <PopularPoliticians politicans={userCards} />
      <LatestPoliticians politicans={repeatedUserCards} />
    </div>
  );
};

export default State;
