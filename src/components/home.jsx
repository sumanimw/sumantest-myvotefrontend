"use client";

import PopularPoliticians from "./politicans/popularPoliticans";
import LatestPoliticians from "./politicans/latestPoliticians";
import GovCard from "./cards/govCard";

const Homeone = () => {

  // Sample data for user cards
  const userCards = [
    { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
    { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
    { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
    // Add more users as needed
  ];

  const repeatedUserCards = [...userCards, ...userCards]; // Repeat the user cards for display

  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <GovCard image="/bannerimg3.jpeg" title="Central Government" path="central" />
        <GovCard image="/bannerimg3.jpeg" title="State Government" path="state" />
      </div>
      <PopularPoliticians politicans={userCards} />
      <LatestPoliticians politicans={repeatedUserCards} />
    </div>
  );
};

export default Homeone;