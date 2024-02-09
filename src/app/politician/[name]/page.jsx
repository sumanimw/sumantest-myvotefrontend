"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import { FaRegStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { BsStar, BsStarFill } from "react-icons/bs";
import Image from "next/image";

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
        party: "Party",
        constituency: "Constituency",
        stars: 4,
        image: "/bannerimg2.webp",
        totalScore: 85,
        worldRank: 15,
        totalVotes: 1467777,
    };

    return (
        <div className="flex">
            {/* Left Card */}
            <div className="cursor-pointer w-1/3 mx-center mb-11">
                <div className="relative shadow-2xl rounded-xl mt-14 ml-24">
                    <div className="bg-[#5CCAD5] rounded-t-xl">
                        <img
                            src={user.image}
                            alt={`${user.name}'s Image`}
                            className="rounded-full w-40 h-40 object-cover mx-auto z-20 border-4 border-white"
                            style={{ position: "relative", bottom: "-60px" }}
                        />
                    </div>
                    <div className="text-center bg-white py-8 relative rounded-xl border-spacing-y-10">
                        <p className="text-black text-3xl font-bold mt-12 mb-1">{user.name}</p>
                        <p className="text-black text-lg mb-1">{user.party}</p>
                        <p className="text-black text-lg mb-1">{user.position}</p>
                        <p className="text-black text-lg mb-1">{user.constituency}</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="bg-white-500 w-2/6 p-6 text-black mt-10 ml-auto mr-32">
                <div className="h-full flex flex-col ">
                    {/* Banner Section */}
                    <div className="mb-4">
                        <Image src="/banner5.jpeg" width={1400} height={400}/>
                    </div>

                    {showQuestionnaire ? (
                        <Questionnaire
                            onNext={handleRateLocalNeta}
                            onHide={handleQuestionnaireHide}
                        />
                    ) : (
                        <div className="bg-[#AFF8FF] p-8 rounded-lg mb-4 w-full max-w-md flex items-center justify-between shadow-xl">
                            <div className="p-6">
                                <div className="bg-[#52C7D2] p-3 rounded-full inline-block ml-3 text-lg" style={{ width: '60px', height: '60px' }}>
                                    <Image src="/totalscore.png" className="mx-auto mt-1" width={60} height={60} />
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700 mt-2">Total Score</p>
                                    <p className="text-lg text-center font-bold text-gray-900">
                                        {user.totalVotes}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6">
                            <div className="bg-[#52C7D2] p-3 rounded-full inline-block ml-3 text-lg" style={{ width: '60px', height: '60px' }}>
                                    <Image src="/worldrank.png" className="mx-auto mt-1" width={60} height={60} />
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700 mt-2">World Rank</p>
                                    <p className="text-lg text-center font-bold text-gray-900">
                                        {`#${user.totalScore}`}
                                    </p>
                                </div>
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