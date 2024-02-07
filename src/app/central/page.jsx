"use client";
import { useRouter } from "next/navigation";
import React from "react";
import PopularPoliticians from "@/components/politicans/popularPoliticans";
import LatestPoliticians from "@/components/politicans/latestPoliticians";
import GovCard from "@/components/cards/govCard";

const Central = () => {
  const router = useRouter();
  const handleRedirect = (path) => {
    router.push(path);
  };
  // Sample data for user cards
  const userCards = [
    { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
    { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
    { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
    // Add more users as needed
  ];
  const repeatedUserCards = [...userCards, ...userCards]; // Repeat the user cards for display

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-around">
        <GovCard image="/bannerimg3.jpeg" title="Lok Sabha" path="lok-sabha" />
        <GovCard image="/bannerimg3.jpeg" title="Rajya Sabha" path="rajya-sabha" />
      </div>

      <PopularPoliticians politicans={userCards} />
      <LatestPoliticians politicans={repeatedUserCards} />

    </div>
  );
};

export default Central;
