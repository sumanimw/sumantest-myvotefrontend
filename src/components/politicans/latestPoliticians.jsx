import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalCard from '../cards/verticalCard'

const LatestPoliticians = ({politicans}) => {
    const verticalSliderSettings = {
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <>
      <div className="text-gray-600 text-2xl text-center mb-4">Latest Politicians</div>
      <Slider {...verticalSliderSettings} className="slick-vertical" >
        {politicans.map((politician, index) => <VerticalCard politician={politician} key={index} />)}
      </Slider>
    </>
  )
}

export default LatestPoliticians
