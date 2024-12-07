import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import RatingStars from '../basics/RatingStars'
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import BuyNowButton from './BuyNowButton';
import CreativeShareButton from '../basics/CreativeShareButton';

const DesktopProductModal = ({ handleCloseModal, selectedProduct, id }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isArtistDetailsOpen, setIsArtistDetailsOpen] = useState(false);
    console.log(id);

    return (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleCloseModal}>
            <div className="bg-primary-bg h-[80%] text-gray-100 rounded xl:rounded-lg w-9/12 md:w-2/3 lg:w-1/3 xl:w-1/2" onClick={(e) => e.stopPropagation()} >
                <style>
                    {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 3px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background-color: rgba(255, 255, 255, 0.3);
                        border-radius: 3px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(255, 255, 255, 0.5);
                    }
                    `}
                </style>
                <div className='flex xl:flex-row overflow-y-auto flex-col h-full w-full'>
                    <div className='w-full xl:w-1/2 h-full'>
                        <ImageCarousel images={selectedProduct?.Images} />
                    </div>
                    <div className='w-full xl:w-1/2 h-full'>
                        <div className='h-full xl:overflow-y-auto custom-scrollbar'>
                            <div className='border-2 flex flex-col px-4 py-5 border-primary-border rounded-lg m-2'>
                                <h1 className='text-2xl lg:text-2xl xl:text-3xl font-forum tracking-wide text-primary-text'>
                                    {selectedProduct?.Name}
                                </h1>
                                <div className='xl:text-2xl text-base font-forum mt-3'>
                                    {
                                        selectedProduct?.DiscountedPrice ? (
                                            <div className=''>₹ <s className='text-xs xl:text-sm text-red-500'>{selectedProduct?.Price}</s> {selectedProduct?.DiscountedPrice}</div>
                                        ) : (
                                            <div className=''>₹ {selectedProduct?.Price}</div>
                                        )
                                    }
                                </div>
                                <div className="flex items-center mt-4">
                                    <RatingStars rating={4.5} />
                                    <p className="ml-2 text-xs xl:text-sm">42 reviews</p>
                                </div>
                                <p className="mt-4 text-primary-text xl:text-base text-sm font-forum tracking-wide">
                                    {selectedProduct?.Description}
                                </p>

                                <div className='flex  gap-2'>
                                    <BuyNowButton
                                        SHARE_URL={`www.maisonroselifestyle.com/product/${id}`} />
                                    <CreativeShareButton SHARE_URL={`www.maisonroselifestyle.com/product/${id}`} />
                                </div>

                                {/* Product Details Section */}
                                <div className="mt-6 border-t border-primary-border pt-1">
                                    <h3 className="text-lg font-forum mb-3">Product Details</h3>

                                    <div className="space-y-4 text-sm md:text-base 2xl:text-lg 3xl:text-xl">
                                        <div className="space-y-2">
                                            <span className="text-gray-400 block">Size:</span>
                                            <div className="flex gap-2">{selectedProduct?.Sizes?.length > 0 ?
                                                <>
                                                    {
                                                        selectedProduct?.Sizes?.map((ele, i) => (
                                                            <div key={i} className='py-1 px-2 border border-primary-border bg-[#18181840] text-sm xl:text-base rounded-lg cursor-pointer hover:bg-primary-text hover:text-primary-bg'>
                                                                {ele}
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                                : <div className='py-1 px-2 border border-primary-border bg-[#18181840] text-sm xl:text-base rounded-lg cursor-pointer hover:bg-primary-text hover:text-primary-bg'>
                                                    Freesize
                                                </div>}</div>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-gray-400 block">Material & Care:</span>
                                            <div>{selectedProduct?.Material || "Material information not available"}</div>
                                            <div className="text-gray-400">{selectedProduct?.CareInstructions || "Care instructions not available"}</div>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-gray-400 block">Country of Origin:</span>
                                            <div>{selectedProduct?.CountryOfOrigin || "India"}</div>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-gray-400 block">Manufactured & Sold By:</span>
                                            <div className='xl:text-lg 3xl:text-xl'>{selectedProduct?.Manufacturer || "Maison Rose Lifestyle"}</div>
                                            <div className='flex gap-1'>
                                                <IoLocationSharp className='text-primary-text xl:text-xl' />
                                                <div className="whitespace-pre-line text-sm xl:text-base 3xl:text-lg">
                                                    {selectedProduct?.ManufacturerAddress ||
                                                        `CE/1/B/96, Street no 238, Action Area 1, 
                                                Newtown, Kolkata 700156.
                                                (Near Axis Mall)`}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <MdEmail className='text-primary-text xl:text-xl' />
                                            <a href={`mailto:${selectedProduct?.ContactEmail || "connect@maisonroselifestyle.com"}`}
                                                className="text-primary-text hover:text-gray-300 block">
                                                {selectedProduct?.ContactEmail || "maisonroselifestyle@gmail.com"}
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <IoCall className='text-primary-text xl:text-xl' />
                                            <a href={`tel:${selectedProduct?.ContactPhone || "+91 22-68493328"}`}
                                                className="text-primary-text hover:text-gray-300 block">
                                                {selectedProduct?.ContactPhone || "+91 6290 433 603"}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Description and Artist Details Accordions */}
                                <div className="mt-4 space-y-2">
                                    <div className="border-t border-primary-border pt-2">
                                        <button
                                            className="flex justify-between items-center w-full py-2 text-left font-forum"
                                            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                        >
                                            <span>Product Description</span>
                                            <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>▼</span>
                                        </button>
                                        {isDescriptionOpen && (
                                            <div className="py-2 text-sm text-gray-300">
                                                {selectedProduct?.DetailedDescription || "No detailed description available."}
                                            </div>
                                        )}
                                    </div>



                                    <div className="border-t border-primary-border pt-2">
                                        <button
                                            className="flex justify-between items-center w-full py-2 text-left font-forum"
                                            onClick={() => setIsArtistDetailsOpen(!isArtistDetailsOpen)}
                                        >
                                            <span>Artist's Details</span>
                                            <span className={`transform transition-transform ${isArtistDetailsOpen ? 'rotate-180' : ''}`}>▼</span>
                                        </button>
                                        {isArtistDetailsOpen && (
                                            <div className="py-2 text-sm text-gray-300">
                                                {selectedProduct?.ArtistDetails || "No artist details available."}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <BuyNowButton SHARE_URL={`www.maisonroselifestyle.com/product/${id}}`} />
                                    <NavLink
                                        to={`/product/${id}`}
                                        className="w-1/2 border-2 border-primary-text text-primary-text py-2 rounded-lg font-forum flex justify-center items-center hover:bg-primary-text hover:text-black transition"
                                    >
                                        View Product Details
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopProductModal