import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HorizontalCard from '../cards/horizontalCard';

const PopularPoliticians = ({ politicans }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };

    return (
        <>
            <div className="text-gray-600 text-2xl text-center mb-4">Popular Politicians</div>
            <Slider {...sliderSettings} className="relative">
                {politicans.map((politician) => <HorizontalCard politician={politician} key={politician.id} />)}
            </Slider>
        </>
    )
}

export default PopularPoliticians;