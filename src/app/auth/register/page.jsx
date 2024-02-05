'use client';
import Image from 'next/image'; // Import Image component from Next.js

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'; // Import the icons you need


const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/otp-verification/register');
  };

  const handleLoginClick = () => {
    router.push('auth/login'); // Redirect to the login page
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
  <h1 className="text-3xl font-bold mb-4">Register</h1>
  <h3 className="text-lg mb-8">Create your new account</h3>

    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Input Fields */}
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Phone"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Password"
          required
        />
      </div>

      {/* Terms & Conditions Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="agreeTerms" className="text-sm">
          By signing up you agree to our{' '}
          <span className="text-[#4EA8B0]">Terms & Conditions</span> and{' '}
          <span className="text-[#4EA8B0]">Privacy Policy</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formData.agreeTerms}
        className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white"
      >
        Sign Up
      </button>
    </form>

    {/* OR Separator */}
    <div className="my-6 text-center text-gray-500 flex items-center">
  <span className="border-b flex-1 min-w-[80px] border-[#4EA8B0] inline-block"></span>
  <span className="text-black mx-4">OR</span>
  <span className="border-b flex-1 min-w-[80px] border-[#4EA8B0] inline-block"></span>
</div>



    {/* Social Icons */}
    <div className="flex items-center justify-center space-x-4">
     
      <span className="icon-[flat-color-icons--google] text-2xl"></span>

      <FaApple className="text-black text-2xl cursor-pointer" />
      <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
    </div>

    {/* Login Link */}
    <p className="mt-4">
      Already have an Account?{' '}
      <span className="text-[#4EA8B0] cursor-pointer" onClick={handleLoginClick}>
        Log In
      </span>
    </p>
  </div>
</div>
</div>

  );
};

export default Register;
