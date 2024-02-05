"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import RootLayout from '@/app/layout';
import { FaRegStar } from "react-icons/fa";

const PoliticianProfile = () => {
  const router = useRouter();
  const name = router.query;

  // Fetch user data based on the username
  // For simplicity, you can use static data or fetch from an API

  const user = {
    name: "Suman",
    position: "MLA",
    stars: 4,
    image: "/bannerimg2.webp",
    totalScore: 85,
    worldRank: 15,
    totalVotes: 1467777
  };

  return (
    <div className="flex">
      {/* Left Card */}
      <div className="cursor-pointer w-1/4 mx-left">
        <div className="relative rounded-lg p-6 shadow-lg mt-20 ml-24" style={{ height: '340px', width: '250px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)' }}>
          <img
            src="/profilecard.svg"
            alt="Profile Card Background"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          {/* User Information */}
          <div className="text-center text-white relative z-10">
            <img
              src={user.image}
              alt={`${user.name}'s Image`}
              className="rounded-full w-32 h-32 object-cover mx-auto mb-2"
            />
            <p className="text-[#52C7D2] text-xl  mt-16 mb-2">{user.name}</p>
            <p className="text-[#52C7D2] text-lg mb-2">{user.position}</p>
            <div className="flex justify-center">
              {[...Array(user.stars)].map((_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
          {/* Bottom shadow */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-200 to-transparent"></div>
        </div>
      </div>

      {/* Right Card */}

      <div className="bg-blue-500 w-1/4 p-6 text-white mt-10 ml-auto mr-12">
        <div className="h-full flex flex-col justify-between">
          {/* Left Section (Total Votes) */}
          <div className="flex justify-between mb-4 ">


            <div className="mt-72">
              <p className="text-lg text-[#7E8187] ">Total Votes</p>
              {/* Assuming user.totalVotes is the variable for total votes */}
              <p className="text-lg text-[#7E8187]">{user.totalVotes}</p>
            </div>

            {/* Right Section (Score) */}
            <div className="mt-72">
              <p className="text-lg text-[#7E8187]">Score</p>
              <p className="text-lg text-[#7E8187]">{user.totalScore}</p>
            </div>



          </div>

          {/* Rate Local Neta Button */}

        </div>
        <button className="bg-[#94DCE3] w-2/4 text-white  mt-10 px-4 py-2 rounded-full">Rate Local Neta</button>
      </div>
    </div>
  );
};

export default PoliticianProfile;
