"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const NewPassword = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

//     if (!passwordRegex.test(formData.newPassword)) {
//         toast.error('Password must include lowercase, uppercase, digit and special character.');
//         return;
//     }

//     if (formData.newPassword !== formData.confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     toast.success('Password updated successfully!');
//     router.push("/login");
//   };

const handlePasswordSubmit = async (e) => {
    e.preventDefault();
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
  
    if (!passwordRegex.test(formData.newPassword)) {
      toast.error('Password must include lowercase, uppercase, digit and special character.');
      return;
    }
  
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
  
    // Display success message for 2000 milliseconds (2 seconds) before redirecting
    toast.success('Password updated successfully!', { autoClose: 2000 });
    
    // Delay the redirect to make sure the user sees the success message
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    router.push("/login");
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <Image src="/new user.svg" alt="User" layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col items-end p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-16">
        <div className="flex flex-col items-center p-4 mt-8 mb-8 relative w-full max-w-md ml-auto mr-4">
          <h1 className="text-2xl font-bold mb-4">Create New Password</h1>

          <form onSubmit={handlePasswordSubmit} className="space-y-4 w-full">
            <div className="mb-4">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-teal-300 to-teal-200 rounded-[15px] text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Place ToastContainer outside the form */}
      <ToastContainer />
    </div>
  );
};

export default NewPassword;
