// // Import necessary libraries and components
// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { RiCheckboxCircleLine } from "react-icons/ri";
// import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

// const Login = () => {
//   const router = useRouter();

//   // Function to handle login submission
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // Implement login logic here
//     console.log("Login form submitted");
//   };

//   // Function to redirect to the Register page
//   const redirectToRegister = () => {
//     router.push("/auth/register");
//   };

//   // Function to redirect to the Forgot Password page
//   const redirectToForgotPassword = () => {
//     router.push("/auth/forgot-password");
//   };

//   return (
  
//     <div className="flex items-center justify-center min-h-screen">
//       {/* Background Image */}
//       <div className="absolute left-0 top-0 w-1/2 h-full">
//         <Image src="/new user.svg" alt="User" layout="fill" objectFit="cover" />
//       </div>

//       {/* Form on the right corner */}
//       <div className="flex flex-col items-end p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-16">
//         <div className="flex flex-col items-center p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-4">
//           {/* Heading */}
//           <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
//           <p>Login to your account</p>

//           {/* Login Form */}
//           <form onSubmit={handleLoginSubmit} className="space-y-4 w-full">
//             {/* Input Fields */}
//             <div className="mb-4">
//               {/* <input
//                 type="text"
//                 id="emailOrPhone"
//                 name="emailOrPhone"
//                 placeholder="Email or Phone"
//                 className="w-full p-2 border rounded"
//                 required
//               /> */}
//               <input
//                 type="text"
//                 id="Phone"
//                 name="Phone"
//                 placeholder=" Phone"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>

//             {/* Forgot Password and Remember Me on the same line */}
//             <div className="flex justify-between mb-4">
//               <p
//                 className="text-[#52C7D2] text-left text-sm font-light cursor-pointer"
//                 onClick={redirectToForgotPassword}
//               >
//                 Forgot Password?
//               </p>
//               <div className="flex items-center">
//                 <RiCheckboxCircleLine className="text-[#949090] text-2xl mr-2" />
//                 <label
//                   htmlFor="rememberMe"
//                   className="text-[#949090] text-sm font-light"
//                 >
//                   Remember me
//                 </label>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white"
//             >
//               Login
//             </button>
//           </form>

//           {/* Don't have an account? */}
//           <p className="mt-4">
//             Don't have an account?{" "}
//             <span
//               className="text-[#4EA8B0] cursor-pointer"
//               onClick={redirectToRegister}
//             >
//               Create account
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>

//   );
// };



// export default Login;
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [phoneError, setPhoneError] = useState("");

  // Function to handle login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Perform phone number validation
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      setPhoneError("Invalid phone number. Please enter a 10-digit number.");
      return;
    }

    // Reset phone number error if valid
    setPhoneError("");

    // Implement login logic here
    console.log("Login form submitted");

    // Redirect to OTP verification page
    router.push("/auth/otp-verify");
  };

  // Function to redirect to the Register page
  const redirectToRegister = () => {
    router.push("/auth/register");
  };

  // Function to redirect to the Forgot Password page
  const redirectToForgotPassword = () => {
    router.push("/auth/forgot-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        {/* Replace the image source with your actual image */}
        <img src="/new user.svg" alt="User" className="object-cover w-full h-full" />
      </div>

      {/* Form on the right corner */}
      <div className="flex flex-col items-end p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-16">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
    

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4 w-full">
          {/* Input Fields */}
          <div className="mb-4">
            <input
              type="text"
              id="Phone"
              name="Phone"
              placeholder="Phone"
              className={`w-full p-2 border rounded ${
                phoneError ? "border-red-500" : ""
              }`}
              value={formData.phone}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  phone: e.target.value,
                }))
              }
              required
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={formData.password}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
              required
            />
          </div>

          {/* Forgot Password and Remember Me on the same line */}
          <div className="flex justify-between mb-4">
            <p
              className="text-[#52C7D2] text-left text-sm font-light cursor-pointer"
              onClick={redirectToForgotPassword}
            >
              Forgot Password?
            </p>
            <div className="flex items-center">
              <RiCheckboxCircleLine className="text-[#949090] text-2xl mr-2" />
              <label
                htmlFor="rememberMe"
                className="text-[#949090] text-sm font-light"
              >
                Remember me
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white"
          >
            Login
          </button>
        </form>

        {/* Don't have an account? */}
        <p className="mt-4">
          Don't have an account?{" "}
          <span
            className="text-[#4EA8B0] cursor-pointer"
            onClick={redirectToRegister}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
