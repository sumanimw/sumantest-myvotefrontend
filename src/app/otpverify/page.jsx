"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const OtpVerify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [timerColor, setTimerColor] = useState("#52C7D2");

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimerColor("red");
    }

    if (timer < 0) {
      setTimer(30);
    }
  }, [timer]);

  const handleVerify = () => {
    const enteredOTP = otp.join('');

    if (enteredOTP.length !== 4 || isNaN(enteredOTP)) {
      toast.error('Please enter a valid 4-digit OTP.');
      return;
    }

    toast.success('OTP verification successful!');
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2">
        <div className="flex items-center justify-center h-full">
          <Image src="/otpbg.png" alt="Background" width={500} height={500}  quality={100}/>
        </div>
      </div>

      {/* Right Side (OTP Verification Form) */}
      <div className="w-1/2">
        <div className="flex flex-col items-start p-4 mt-8 mb-8 relative w-full max-w-md ml-16">
          <div className="flex flex-col items-center p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-4">
            <h1 className="text-2xl font-bold mb-4">OTP Verification</h1>

            <p>An 4 digit code has been sent to your email</p>

            <div className="flex space-x-4 mt-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[index] = e.target.value;
                    setOtp(newOtp);
                  }}
                  className="w-1/4 p-2 border rounded text-center text-black"
                />
              ))}
            </div>

            {timer === 0 ? (
              <>
                <p style={{ color: "red" }}>
                  Time expired. Please try again.
                </p>
                <button
                  onClick={() => {
                    setOtp(['', '', '', '']);
                    setTimer(30);
                  }}
                  className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white mt-4"
                >
                  Retry
                </button>
              </>
            ) : (
              <>
                <p className="text-black mt-2">
                  You should receive the OTP in
                  <span style={{ color: "#52C7D2" }}>{` ${timer} seconds`}</span>
                </p>
                <button
                  onClick={handleVerify}
                  className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white mt-4"
                >
                  Verify
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default OtpVerify;

