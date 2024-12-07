import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/AirtableApis';
import RatingStars from '../components/basics/RatingStars';
import ImageCarousel from '../components/store/ImageCarousel';
import Navbar from '../components/basics/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isArtistDetailsOpen, setIsArtistDetailsOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) {
                setError('Product ID is missing');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const productData = await getProductById(productId);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <Navbar />
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">Loading...</div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !productId) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <Navbar />
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">
                        {error || 'Product not found'}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <Navbar />
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">Product not found</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary-bg">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Left side - Image Carousel */}
                    <div className="w-full xl:w-1/2">
                        <ImageCarousel images={product?.Images} />
                    </div>

                    {/* Right side - Product Details */}
                    <div className="w-full xl:w-1/2 text-primary-text">
                        <div className="space-y-6">
                            <h1 className="text-3xl xl:text-4xl font-forum tracking-wide">
                                {product?.Name}
                            </h1>

                            <div className="text-2xl font-forum">
                                {product?.DiscountedPrice ? (
                                    <div>₹ <s className="text-sm text-red-500">{product?.Price}</s> {product?.DiscountedPrice}</div>
                                ) : (
                                    <div>₹ {product?.Price}</div>
                                )}
                            </div>

                            <div className="flex items-center">
                                <RatingStars rating={4.5} />
                                <p className="ml-2 text-sm">42 reviews</p>
                            </div>

                            <p className="text-base font-forum tracking-wide">
                                {product?.Description}
                            </p>

                            {/* Product Details Section */}
                            <div className="border-t border-primary-border pt-6">
                                <h3 className="text-xl font-forum mb-4">Product Details</h3>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <span className="text-gray-400 block mb-1">Material & Care:</span>
                                        <div>{product?.Material || "Material information not available"}</div>
                                        <div className="text-gray-400">{product?.CareInstructions || "Care instructions not available"}</div>
                                    </div>

                                    <div>
                                        <span className="text-gray-400 block mb-1">Country of Origin:</span>
                                        <div>{product?.CountryOfOrigin || "India"}</div>
                                    </div>

                                    <div>
                                        <span className="text-gray-400 block mb-1">Manufactured & Sold By:</span>
                                        <div>{product?.Manufacturer || "Maison Rose Lifestyle"}</div>
                                        <div className="whitespace-pre-line">
                                            {product?.ManufacturerAddress || `224, Tantia Jogani Industrial Premises
J.R. Boricha Marg
Lower Parel (E)
Mumbai - 400 011`}
                                        </div>
                                    </div>

                                    <div>
                                        <a href={`mailto:${product?.ContactEmail || "connect@maisonroselifestyle.com"}`} 
                                           className="text-primary-text hover:text-gray-300 block">
                                            {product?.ContactEmail || "connect@maisonroselifestyle.com"}
                                        </a>
                                    </div>

                                    <div>
                                        <a href={`tel:${product?.ContactPhone || "+91 22-68493328"}`} 
                                           className="text-primary-text hover:text-gray-300 block">
                                            Customer care: {product?.ContactPhone || "+91 22-68493328"}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Collapsible Sections */}
                            <div className="space-y-4">
                                <div className="border-t border-primary-border pt-4">
                                    <button 
                                        className="flex justify-between items-center w-full py-2 text-left font-forum"
                                        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                    >
                                        <span>Product Description</span>
                                        <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>▼</span>
                                    </button>
                                    {isDescriptionOpen && (
                                        <div className="py-2 text-sm text-gray-300">
                                            {product?.DetailedDescription || "No detailed description available."}
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-primary-border pt-4">
                                    <button 
                                        className="flex justify-between items-center w-full py-2 text-left font-forum"
                                        onClick={() => setIsArtistDetailsOpen(!isArtistDetailsOpen)}
                                    >
                                        <span>Artist's Details</span>
                                        <span className={`transform transition-transform ${isArtistDetailsOpen ? 'rotate-180' : ''}`}>▼</span>
                                    </button>
                                    {isArtistDetailsOpen && (
                                        <div className="py-2 text-sm text-gray-300">
                                            {product?.ArtistDetails || "No artist details available."}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Buy Now Button */}
                            <button className="w-full bg-primary-text text-black py-3 rounded-lg font-forum text-lg hover:bg-gray-200 transition mt-6">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
