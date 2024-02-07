"use client";

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const GovCard = ({ image, path, title }) => {
    const router = useRouter();
    const handleRedirect = () => {
        router.push(`/${path}`);
    };
    return (
        <div className="flex justify-center items-center bg-[#E2F9FF] rounded-3xl shadow-xl p-6 mb-8 w-1/3 h-64 mx-auto relative">
            <Image
                src={image}
                alt={title}
                height={320}
                width={320}
                className="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
            />
            <div className="text-center pr-7">
                {title && title.split(' ').map((word, index) => (
                    <span
                        key={index}
                        onClick={handleRedirect}
                        className="text-xl text-black cursor-pointer block"
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default GovCard
