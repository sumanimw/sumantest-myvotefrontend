// Import necessary libraries and components
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiCheckboxCircleLine } from "react-icons/ri";

const ForgotPassword = () => {
  const router = useRouter();

  // Function to handle forgot password submission
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    
    // Implement forgot password logic here
    // For demonstration purposes, redirect to /otpverify
    router.push("/otpverify");
  };

  // Function to redirect to the Register page
  const redirectToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <Image src="/new user.svg" alt="User" layout="fill" objectFit="cover" />
      </div>

      {/* Form on the right corner */}
      <div className="flex flex-col items-end p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-16">
        <div className="flex flex-col items-center p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-4">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-4">Forgot your password?</h1>
          <p className="mt-2 mb-4">Enter email address</p>

          {/* Forgot Password Form */}
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4 w-full">
            {/* Input Field for Email */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <p className="text-red-500 text-xs mt-1">Enter email and try again</p>
            </div>

            {/* Send Code Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white"
            >
              Send Code
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
    </div>
  );
};

export default ForgotPassword;
