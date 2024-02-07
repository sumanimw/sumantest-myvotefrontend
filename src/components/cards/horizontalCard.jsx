import React from 'react';
import Link from 'next/link';
import { FaRegStar } from "react-icons/fa";


const HorizontalCard = ({ politician }) => {
    return (
        <Link href={`/politician/${politician.name}`} passHref>
            <div className="px-2">
                {/* Wrap the politician card with Link */}
                <div> {/* Set cursor to pointer for better UX */}
                    <div className="relative rounded-lg p-6 shadow-lg" style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                        {/* Background Image for User Card */}
                        <img
                            src="/profilecard.svg"
                            alt="Profile Card Background"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />


                        {/* User Information */}
                        <div className="text-center text-white relative z-10">
                            <img
                                src={politician.image}
                                alt={`${politician.name}'s Image`}
                                className="rounded-full w-40 h-40 object-cover mx-auto mb-7"
                            />

                            <p className="text-[#52C7D2] text-xl">{politician.name}</p>
                            <p className="text-[#52C7D2] text-lg">{politician.position}</p>
                            <div className="flex justify-center mt-1">
                                {[...Array(politician.stars)].map((_, index) => (
                                    <FaRegStar key={index} className="text-yellow-500" />
                                ))}
                            </div>
                        </div>
                        {/* Bottom shadow */}
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-200 to-transparent"></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HorizontalCard;