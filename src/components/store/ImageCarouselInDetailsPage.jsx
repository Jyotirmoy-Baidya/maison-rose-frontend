import React, { useState } from "react";

const ImageCarouselInDetailsPage = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-details-page flex flex-col xl:flex-row gap-2 xl:ml-auto w-full">
            {/* Thumbnails */}
            <div className="thumbnail-container w-full overflow-x-auto order-2 xl:order-1 xl:w-[20%] flex flex-row xl:flex-col gap-2 xl:mr-10">
                {images?.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumbnails.large.url}
                        alt={`Thumbnail ${index}`}
                        onClick={() => selectImage(index)}
                        className={`w-16 h-28 2xl:w-28 2xl:h-48 object-cover cursor-pointer border-2 ${currentIndex === index
                            ? "border-primary"
                            : "border-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* Main Image */}
            <div className="main-image-container  order-1 xl:order-2 xl:w-[70%] flex-1 flex justify-center items-center">
                <img
                    src={images[currentIndex].thumbnails.full.url}
                    alt={`Main Slide ${currentIndex}`}
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default ImageCarouselInDetailsPage;
