import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import RatingStars from '../basics/RatingStars'

const MobileProductModal = ({ handleCloseModal, selectedProduct }) => {

    // Disable background scroll when the modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable scrolling
        return () => {
            document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
        };
    }, []);

    return (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleCloseModal}>
            <div className="bg-primary-bg h-[80%]  text-gray-100 overflow-hidden rounded-lg w-11/12 md:w-2/3 lg:w-1/3 xl:w-1/2" onClick={(e) => e.stopPropagation()} >
                <div className='flex h-full w-full'>
                    <div className='w-1/2 h-full'>
                        {/* <img
                                    src={selectedProduct.images[0]}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover mb-4 "
                                /> */}
                        <ImageCarousel images={selectedProduct.images} />
                    </div>
                    <div className='w-1/2 h-full p-2'>
                        <div className='border-2 flex flex-col px-4 py-5 border-primary-border w-full h-full rounded-lg'>


                            <h1 className='text-3xl font-forum tracking-wide text-primary-text'>
                                {selectedProduct.name}
                            </h1>
                            <div className='xl:text-2xl text-base font-forum mt-3'>
                                {
                                    selectedProduct.discountedPercentage == 0 ?
                                        <div className='xl:text-base text-sm'>₹ {selectedProduct.price}</div>
                                        :
                                        <div className=''>₹ <s className='text-xs xl:text-sm text-red-500'>{selectedProduct.price}</s> {selectedProduct.discountedPrice}</div>
                                }
                            </div>
                            <div className="flex items-center mt-4">
                                <RatingStars rating={3.5} />
                                <p className="ml-2 text-sm">1 reviews</p>
                            </div>
                            <p className="mt-4 text-primary-text font-forum tracking-wide">
                                Elegant silk evening dress with a flowing silhouette. Features a cowl
                                neck and open back detail. Perfect for special occasions.
                            </p>

                            {/* <h2 className="mt-6 text-lg font-semibold">Customer Reviews</h2> */}
                            {/* <div className="bg-gray-800 p-4 rounded-lg mt-4 flex items-start gap-4">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="Customer profile"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold">Sophie T.</p>

                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                Stunning dress, received so many compliments!
                                            </p>
                                        </div>
                                    </div> */}

                            <NavLink to={selectedProduct.amazonLink} target="_blank" className="mt-6 w-full bg-primary-text  text-black py-2 rounded-lg font-forum flex justify-center items-center hover:bg-gray-200 transition">
                                Buy Now
                            </NavLink>


                            {/* <div className="flex justify-between items-center">
                                        <a
                                            href={selectedProduct.amazonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                                        >
                                            Buy on Amazon
                                        </a>
                                        <button
                                            onClick={handleShareLink}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                        >
                                            Share Link
                                        </button>
                                        <button
                                            onClick={handleCloseModal}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Close
                                        </button>
                                    </div> */}
                        </div>
                    </div>
                    {/* <h2 className="text-2xl font-semibold mb-4">
                                {selectedProduct.name}
                            </h2>
                            <p className="mb-2">
                                <span className="font-bold">Production Details: </span>
                                {selectedProduct.productionDetails}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Price: </span>₹
                                {selectedProduct.discountedPrice} ({selectedProduct.discountedPercentage}%
                                off)
                            </p>
                            <p className="mb-4">
                                <span className="font-bold">Availability: </span>
                                <span
                                    className={
                                        selectedProduct.availability === 'In Stock'
                                            ? 'text-green-400'
                                            : 'text-red-400'
                                    }
                                >
                                    {selectedProduct.availability}
                                </span>
                            </p> */}

                </div>
            </div>
        </div>
    )
}

export default MobileProductModal