"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { FaRegStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { BsStar, BsStarFill } from "react-icons/bs";
const Rating = ({ onChange, value }) => {
  const handleClick = (selectedValue) => {
    onChange(selectedValue);
  };
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleClick(index + 1)}
        >
          {index < value ? (
            <BsStarFill key={index} className="text-yellow-500" />
          ) : (
            <BsStar key={index} className="text-gray-300" />
          )}
        </div>
      ))}
      <span className="ml-2">{value}</span>
    </div>
  );
};
const Questionnaire = ({ onNext, onHide }) => {
  const questions = [
    "How would you rate the politician's efforts in improving education?",
    "How would you rate the politician's initiatives in promoting health and healthcare?",
    "How would you rate the politician's efforts in ensuring sanitation and cleanliness?",
    "How would you rate the politician's contribution to infrastructure development?",
    "How would you rate the politician's stance and actions on law and order?",
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState(
    Array(questions.length).fill("")
  );
  const [selectedStars, setSelectedStars] = useState(
    Array(questions.length).fill()
  );
  const router = useRouter();
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, you can submit or hide the questionnaire
      handleRateLocalNetaSubmit();
    }
  };
  const handleRateLocalNetaSubmit = () => {
    console.log("Submitting questionnaire...");
    setTimeout(() => {
      toast.success("Submitted successfully!");
      router.push("/"); // Update this with the correct route for your initial screen
    }, 1000);
  };
  return (
    <div>
      <h2>{questions[currentQuestion]}</h2>
      <Rating
        value={selectedStars[currentQuestion]}
        onChange={(value) => {
          const newStars = [...selectedStars];
          newStars[currentQuestion] = value;
          setSelectedStars(newStars);
        }}
      />
      <input
        type="text"
        value={userResponses[currentQuestion]}
        onChange={(e) => {
          const newResponses = [...userResponses];
          newResponses[currentQuestion] = e.target.value;
          setUserResponses(newResponses);
        }}
      />
      {currentQuestion < questions.length - 1 ? (
        <button
          onClick={handleNext}
          className="bg-[#94DCE3] w-full text-white px-4 py-2 rounded-full"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleRateLocalNetaSubmit}
          className="bg-[#94DCE3] w-full text-white px-4 py-2 rounded-full"
        >
          Submit
        </button>
      )}
    </div>
  );
};
const PoliticianProfile = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const handleRateLocalNeta = () => {
    // Show the questionnaire
    setShowQuestionnaire(true);
  };
  const handleQuestionnaireHide = () => {
    // Hide the questionnaire and show score and rank card
    setShowQuestionnaire(false);
  };
  const user = {
    name: "Suman",
    position: "MLA",
    stars: 4,
    image: "/bannerimg2.webp",
    totalScore: 85,
    worldRank: 15,
  totalVotes:1467777,
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

        {/* Right Section */}
        <div className="bg-white-500 w-2/6 p-6 text-black mt-10 ml-auto mr-12">
          <div className="h-full flex flex-col ">
            {/* Banner Section */}
            <div className="mb-4">
              <img
                src="/bannerimg2.webp" // Replace with your banner image
                alt="Banner"
                className="w-full h-42 object-cover rounded-lg"
              />
            </div>

            {showQuestionnaire ? (
              <Questionnaire
                onNext={handleRateLocalNeta}
                onHide={handleQuestionnaireHide}
              />
            ) : (
              <div className="bg-[#AFF8FF] p-8 rounded-lg mb-4 w-full max-w-md flex items-center justify-between">
                <div>
                  <p className="text-lg text-gray-700">Total Score</p>
                  <p className="text-lg font-bold text-gray-900">
                    {user.totalVotes}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700">World Rank</p>
                  <p className="text-lg font-bold text-gray-900">
                    {user.totalScore}
                  </p>
                </div>
              </div>
            )}

            {showQuestionnaire || (
              <button
                onClick={handleRateLocalNeta}
                className="bg-[#94DCE3] w-full text-white px-4 py-2 rounded-full"
              >
                Rate Local Neta
              </button>
            )}
          </div>
        </div>
      </div>

  );
};
export default PoliticianProfile;