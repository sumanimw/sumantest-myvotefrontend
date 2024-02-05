
"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "../layout";

// Home component
const LokSabha = () => {
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
      <PopularPoliticians politicans={userCards} />
      <LatestPoliticians politicans={repeatedUserCards} />
    </div>
  );
};

export default LokSabha;
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import RootLayout from "../layout";

// // Home component
// const LokSabha = () => {
//   // Sample data for user cards
//   const userCards = [
//     { id: 1, name: "Suman", position: "MLA", stars: 4, image: "/bannerimg2.webp" },
//     { id: 2, name: "Harry", position: "MLC", stars: 3, image: "/bannerimg2.webp" },
//     { id: 3, name: "Sonam", position: "MLA", stars: 5, image: "/bannerimg.webp" },
//     // Add more users as needed
//   ];
//   const repeatedUserCards = [...userCards, ...userCards]; // Repeat the user cards for display

//   const verticalSliderSettings = {
//     dots: false,
//     infinite: true,
//     vertical: true,
//     verticalSwiping: true,
//     speed: 500,
//     slidesToShow: 3, // Set the number of cards to show at a time to 1 for vertical slider
//     slidesToScroll: 1,
//   };

//   // Slick slider settings
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Adjust the number of cards to show at a time
//     slidesToScroll: 1,
//   };

//   return (
// <RootLayout authPage={true} auth={true}>
//     <div className="container mx-auto p-8">
    
//       {/* User Card Slider */}
//       <div className="text-gray-600 text-2xl text-center mb-4">Popular Politicians</div>
// <Slider {...sliderSettings} className="relative">
//   {userCards.map((user) => ( 
//     <div key={user.id} className="px-2">
//       <div className="relative rounded-lg p-6 shadow-lg" style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
//         {/* Background Image for User Card */}
//         <img
//           src="/profilecard.svg"
//           alt="Profile Card Background"
//           className="absolute inset-0 w-full h-full object-cover rounded-lg"
//         />
        
//         {/* User Information */}
//         <div className="text-center text-white relative z-10">
//           <img
//             src={user.image}
//             alt={`${user.name}'s Image`}
//             className="rounded-full w-40 h-40 object-cover mx-auto mb-7"
//           />
//           <p className="text-[#52C7D2] text-xl">{user.name}</p>
//           <p className="text-[#52C7D2] text-lg">{user.position}</p>
//           <div className="flex justify-center mt-1">
//             {[...Array(user.stars)].map((_, index) => (
//               <FaRegStar key={index} className="text-yellow-500" />
//             ))}
//           </div>
//         </div>
//         {/* Bottom shadow */}
//         <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-200 to-transparent"></div>
//       </div>
//     </div>
//   ))}
// </Slider>



// <div className="text-gray-600 text-2xl text-center mb-4">Latest Politicians</div>

// <Slider {...verticalSliderSettings} className="slick-vertical" >
//   {repeatedUserCards.map((user, index) => (
//     <div key={index} className="px-2">
//       <div className="flex">
//         {/* First Card */}
//         <div className="relative rounded-lg p-6 shadow-lg" style={{ width: 'calc(50% - 4px)', marginRight: '4px', marginBottom: '5px', height: '200px', backgroundColor: '#52C7D2' }}>
//           {/* Circular Profile Image on the left */}
//           <div className="absolute left-0 w-2/4 h-3/4 flex items-center justify-center">
//             <img
//               src={user.image}
//               alt={`${user.name}'s Image`}
//               className="rounded-full w-40 h-40 object-cover mx-auto mb-3"
//             />
//           </div>

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' }}></div>

//           {/* User Information on the right */}
//           <div className="text-white absolute right-0 inset-0 flex flex-col justify-center p-6">
//             <p className="text-xl font-bold flex justify-center ">{user.name}</p>
//             <p className="text-md flex justify-center ">{user.position}</p>
//             <div className="flex justify-end absolute right-12  mt-1">
//               {[...Array(user.stars)].map((_, index) => (
//                 <FaRegStar key={index} className="text-yellow-500" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Second Card */}
//         <div className="relative rounded-lg p-6 shadow-lg" style={{ width: 'calc(50% - 4px)', marginLeft: '4px', marginBottom: '5px', height: '200px', backgroundColor: '#52C7D2' }}>
//           {/* Circular Profile Image on the left */}
//           <div className="absolute left-0 w-1/3 h-full flex items-center justify-center">
//             <img
//               src={user.image}
//               alt={`${user.name}'s Image`}
//               className="rounded-full w-40 h-40 object-cover mx-auto mb-3"
//             />
//           </div>

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' }}></div>

//           {/* User Information on the right */}
//           <div className="text-white absolute right-0 inset-0 flex flex-col justify-center p-6">
//           <p className="text-xl font-bold flex justify-center ">{user.name}</p>
//             <p className="text-md flex justify-center ">{user.position}</p>
//             <div className="flex justify-end absolute right-12  mt-1">
//               {[...Array(user.stars)].map((_, index) => (
//                 <FaRegStar key={index} className="text-yellow-500" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </Slider>

//     </div>
//     </RootLayout>
//   );
// };

// export default LokSabha;