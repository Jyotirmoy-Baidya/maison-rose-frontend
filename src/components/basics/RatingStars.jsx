import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';


const RatingStars = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (rating >= starValue) {
            return <IoIosStar key={index} className="text-primary-text text-sm xl:text-base" />;
        } else if (rating >= starValue - 0.5) {
            return <IoIosStarHalf key={index} className="text-primary-text text-sm xl:text-base" />;
        } else {
            return <IoIosStarOutline key={index} className="text-primary-text text-sm xl:text-base" />;
        }
    });

    return <div className="flex space-x-1">{stars}</div>;
};

export default RatingStars