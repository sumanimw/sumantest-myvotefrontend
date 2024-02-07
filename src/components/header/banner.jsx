
"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  const pathName = usePathname();
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {

    const urlsToExclude = ["login", "auth", "register", "newpassword", "otpverify", "forgotpassword", "politician"];
    if (urlsToExclude.some(url => pathName.includes(url))) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, [pathName]);
  return (
    <>
      {

        showBanner ?
          (
            <div className="m-5 mt-10">
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                // style={{ width: '100%', height: '15%' }} // Adjust the size of the Carousel and set height to half
              >
                <div>
                  <Image src="/banner5.jpeg" alt="Banner 1" width={1400} height={100} className='rounded-2xl'/>
                  {/* <img src="/1400x400.svg" alt="Banner 3" className='rounded-2xl' style={{ maxWidth: '100%', maxHeight: '100%' }} /> */}
                </div>
                <div>
                  <Image src="/banner5.jpeg" alt="Banner 1" width={1400} height={100} className='rounded-2xl' layout="responsive" />
                </div>
                <div>
                  <Image src="/banner5.jpeg" alt="Banner 1" width={1400} height={100} className='rounded-2xl' layout="responsive" />
                </div>
              </Carousel>
            </div>
          ) : null
      }
    </>
  );
};

export default Banner;