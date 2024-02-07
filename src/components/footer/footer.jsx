"use client";

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';


const Footer = () => {
    const pathName = usePathname();
    const router = useRouter();
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        const urlsToExclude = ["login", "auth", "register", "newpassword", "otpverify", "forgotpassword"];
        if (urlsToExclude.some(url => pathName.includes(url))) {
            setShowFooter(false);
        } else {
            setShowFooter(true);
        }
    }, [pathName]);

    return (
        <>
            {showFooter ?
                (
                    <footer className='bg-[#E6E6E6] py-4 px-10 flex flex-col items-center gap-4'>
                        <div className='flex justify-center w-full mx-auto gap-9 border-b-2 pb-6 border-[#C4C4C4]'>
                            <Link href="#" id="facebook" className='bg-white rounded-full'>
                                <FaFacebook size={40} className='text-[#52C7D2] border-none' />
                            </Link>
                            <Link href="#" id="instagram" className='bg-[#52C7D2] rounded-full'>
                                <BsInstagram size={40} className=' text-white p-1.5 font-bold text-lg' />
                            </Link>
                            <Link href="#" id="whatsapp" className='bg-[#52C7D2] rounded-full'>
                                <IoLogoWhatsapp size={40} className=' text-white p-1.5 font-bold text-lg' />
                            </Link>
                            <Link href="#" id="linkedin" className='bg-[#52C7D2] rounded-full'>
                                <FaLinkedinIn size={40} className='text-white p-2 font-bold text-lg' />
                            </Link>
                        </div>
                        <div className='flex justify-center mx-auto w-full gap-7 text-black font-bold text-lg border-b-2 pb-6 border-[#C4C4C4]'>
                            <Link href="/">Home</Link>
                            <Link href="/search">Search</Link>
                            <Link href="#">Profile</Link>
                            <Link href="#">About Us</Link>
                            <Link href="#">Blogs</Link>
                            <Link href="#">Contact</Link>
                        </div>
                        <div className='flex justify-center mx-auto w-full gap-48 text-[#5E5E5E] text-sm border-b-2 pt-2 pb-6 border-[#C4C4C4]'>
                            <div>
                                <p>Terms & Conditions</p>
                            </div>
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <Image src="/logo.png" alt="Logo" width={30} height={30} />
                            </div>
                            <div>
                                <h2 className='text-[#1280DB] font-semibold text-2xl' style={{ wordSpacing: '0.3em' }}>MY VOTE VERDICT</h2>
                            </div>
                        </div>
                        <div id="copyright" className='text-xs pt-4 text-[#5E5E5E]'>
                            ©  2024 IMW All Rights Reserved.
                        </div>
                    </footer>
                ) : null
            }
        </>
    )
}

export default Footer
