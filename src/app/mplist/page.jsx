// // Mplist.jsx
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
// import RootLayout from "../layout";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Mplist component
// const Mplist = () => {
//   // Sample data for user profiles
//   const userProfileList = [
//     { id: 1, name: "John Doe", position: "MP", constituency: "Example Constituency 1", stars: 4, votes: 1200, profileImg: "/bannerimg3.jpeg" },
//     { id: 2, name: "Jane Smith", position: "MP", constituency: "Example Constituency 2", stars: 3, votes: 900, profileImg: "/bannerimg3.jpeg" },
//     { id: 3, name: "Bob Johnson", position: "MP", constituency: "Example Constituency 3", stars: 5, votes: 1500, profileImg: "/bannerimg3.jpeg" },
//     // Add more user profiles as needed
//   ];

//   // Slick slider settings
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     vertical: true, // Set to true for a vertical slider
//     speed: 500,
//     slidesToShow: 5, // Adjust the number of cards to show at a time
//     slidesToScroll: 1,
//   };

//   return (
//     <RootLayout authPage={true}>
//       <div className="container mx-auto p-8 mt-6">
//         <Slider {...sliderSettings}>
//           {userProfileList.map((user) => (
//             <div key={user.id} className="px-2 mt-6 mb-0">
//                    {/* <div className="container  bg-gray-300mx-auto p-8"> */}
//                    <div className="bg-gray-200 rounded-lg p-4 w-60 mx-auto">


//                 <img
//                   src={user.profileImg} // Replace with the actual profile image source
//                   alt={`${user.name}'s Image`}
//                   className="rounded-full w-40 h-40 object-cover mx-auto mb-2"
//                 />
//                 <p className="text-center text-[#52C7D2]">{user.name}</p>
//                 <p className="text-center text-[#52C7D2]">{user.position}</p>
//                 <p className="text-center text-[#52C7D2]">{user.constituency}</p>
//                 <div className="flex justify-center">
//                   {[...Array(user.stars)].map((_, index) => (
//                     <FaStar key={index} className="text-[#52C7D2]" />
//                   ))}
//                   {[...Array(5 - user.stars)].map((_, index) => (
//                     <FaRegStar key={index} className="text-[#52C7D2]" />
//                   ))}
//                 </div>
//                 <p className="text-center text-[#52C7D2]">Votes: {user.votes}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </RootLayout>
//   );
// };

// export default Mplist;

// Mplist.jsx
"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import RootLayout from "../layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mplist component
const Mplist = () => {
  // Sample data for user profiles
  const userProfileList = [
    { id: 1, name: "John Doe", position: "MP", constituency: "Example Constituency 1", stars: 4, votes: 1200, profileImg: "/bannerimg3.jpeg" },
    { id: 2, name: "Jane Smith", position: "MP", constituency: "Example Constituency 2", stars: 3, votes: 900, profileImg: "/bannerimg3.jpeg" },
    { id: 3, name: "Bob Johnson", position: "MP", constituency: "Example Constituency 3", stars: 5, votes: 1500, profileImg: "/bannerimg3.jpeg" },
    // Add more user profiles as needed
  ];

  // Calculate the number of slides to show at a time
  const slidesToShow = Math.min(5, userProfileList.length);

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    vertical: true, // Set to true for a vertical slider
    speed: 500,
    slidesToShow: 5, // Adjust the number of cards to show at a time
    slidesToScroll: 1,
  };

  return (
    <RootLayout authPage={true}>
      <div className="container mx-auto p-8 mt-6">
        <Slider {...sliderSettings}>
          {/* Repeat cards to fill the slider */}
          {[...Array(Math.ceil(5 / slidesToShow) * userProfileList.length)].map((_, index) => (
            <div key={index} className="px-2 mt-6 mb-0">
              <div className="bg-gray-200 rounded-lg p-4 w-60 mx-auto">
                {/* Use the modulo operator to cycle through user profiles */}
                {userProfileList[index % userProfileList.length] && (
                  <>
                    <img
                      src={userProfileList[index % userProfileList.length].profileImg}
                      alt={`${userProfileList[index % userProfileList.length].name}'s Image`}
                      className="rounded-full w-40 h-40 object-cover mx-auto mb-2"
                    />
                    <p className="text-center text-[#52C7D2]">{userProfileList[index % userProfileList.length].name}</p>
                    <p className="text-center text-[#52C7D2]">{userProfileList[index % userProfileList.length].position}</p>
                    <p className="text-center text-[#52C7D2]">{userProfileList[index % userProfileList.length].constituency}</p>
                    <div className="flex justify-center">
                      {[...Array(userProfileList[index % userProfileList.length].stars)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="text-[#52C7D2]" />
                      ))}
                      {[...Array(5 - userProfileList[index % userProfileList.length].stars)].map((_, starIndex) => (
                        <FaRegStar key={starIndex} className="text-[#52C7D2]" />
                      ))}
                    </div>
                    <p className="text-center text-[#52C7D2]">Votes: {userProfileList[index % userProfileList.length].votes}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </RootLayout>
  );
};

export default Mplist;
