
'use client'
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import Banner from "./banner";



const Header = () => {
  
  return (
    <>
    <header className="flex items-center justify-between p-4 bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        {/* Home Link */}
        <Link href="/">
          <div className="text-teal-300 text-lg ml-12 cursor-pointer">Home</div>
        </Link>
      </div>

      {/* Search Bar and Profile Button */}
      <div className="flex items-center">
        {/* Search Bar */}
        <div
          className="flex items-center bg-[#EEE] p-2 rounded"
          style={{
            borderRadius: "12px",
            border: "1px solid #EEE",
            width: "404px",
            height: "54px",
            flexShrink: 0,
          }}
        >
          <FaSearch className="text-[#B5B5B5]" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none ml-2 bg-[#EEE] focus:outline-none text-black flex-grow"
            style={{
              borderRadius: "12px",
              padding: "8px", // Adjust the padding as needed
            }}
          />
        </div>

        {/* Profile Button */}
        <Link href="/profile">
          <div className="flex items-center cursor-pointer ml-2">
            {/* Profile icon */}
            <FaUserCircle className="text-gray-500 text-5xl" />
          </div>
        </Link>
      </div>

     
    </header>
    {/* <Banner/> */}
    </>
  );
};

export default Header;
