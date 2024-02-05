
"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
  return (
    <div className="w-1/2 h-1/3 mx-auto mt-7">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        style={{ width: '100%', height: '15%' }} // Adjust the size of the Carousel and set height to half
      >
        <div>
          <img src="/bannerimg.webp" alt="Banner 1" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        </div>
        <div>
          <img src="/bannerimg2.webp" alt="Banner 2" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        </div>
        <div>
          <img src="/bannerimg3.jpeg" alt="Banner 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;


