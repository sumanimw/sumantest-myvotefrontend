import React from 'react';
import { FaRegStar } from "react-icons/fa";

const VerticalCard = ({politician}) => {
  return (
    <div className="px-2">
      <div className="flex">
        {/* First Card */}
        <div className="relative rounded-lg p-6 shadow-lg" style={{ width: 'calc(50% - 4px)', marginRight: '4px', marginBottom: '5px', height: '200px', backgroundColor: '#52C7D2' }}>
          {/* Circular Profile Image on the left */}
          <div className="absolute left-0 w-2/4 h-3/4 flex items-center justify-center">
            <img
              src={politician.image}
              alt={`${politician.name}'s Image`}
              className="rounded-full w-40 h-40 object-cover mx-auto mb-3"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' }}></div>

          {/* User Information on the right */}
          <div className="text-white absolute right-0 inset-0 flex flex-col justify-center p-6">
            <p className="text-xl font-bold flex justify-center ">{politician.name}</p>
            <p className="text-md flex justify-center ">{politician.position}</p>
            <div className="flex justify-end absolute right-12  mt-1">
              {[...Array(politician.stars)].map((_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative rounded-lg p-6 shadow-lg" style={{ width: 'calc(50% - 4px)', marginLeft: '4px', marginBottom: '5px', height: '200px', backgroundColor: '#52C7D2' }}>
          {/* Circular Profile Image on the left */}
          <div className="absolute left-0 w-1/3 h-full flex items-center justify-center">
            <img
              src={politician.image}
              alt={`${politician.name}'s Image`}
              className="rounded-full w-40 h-40 object-cover mx-auto mb-3"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' }}></div>

          {/* User Information on the right */}
          <div className="text-white absolute right-0 inset-0 flex flex-col justify-center p-6">
            <p className="text-xl font-bold flex justify-center ">{politician.name}</p>
            <p className="text-md flex justify-center ">{politician.position}</p>
            <div className="flex justify-end absolute right-12  mt-1">
              {[...Array(politician.stars)].map((_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard;
