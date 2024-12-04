import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
    console.log(images);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images?.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumbnails.large.url}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>
            <button
                onClick={prevImage}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-black bg-opacity-30 hover:bg-primary-text hover:text-primary-bg hover:bg-opacity-30 text-white px-2 py-6 rounded"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-black bg-opacity-30 hover:bg-primary-text hover:text-primary-bg hover:bg-opacity-30 text-white px-2 py-6 rounded"
            >
                <FaChevronRight />
            </button>
        </div>
    );


};

export default ImageCarousel;
