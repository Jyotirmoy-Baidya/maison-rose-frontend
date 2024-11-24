import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const products = {
    1: {
        name: "Thai Silk Evening Dress",
        price: "₹12,999",
        description: "Handcrafted Thai silk evening dress with modern silhouette. This elegant piece combines traditional Thai craftsmanship with contemporary design elements.",
        details: [
            "100% authentic Thai silk",
            "Hand-embroidered details",
            "Modern A-line silhouette",
            "Available in sizes XS to XL"
        ],
        image: "./images/products/dress1.jpg",
        category: "Evening Wear"
    }
    // Add more products as needed
};

const ProductPage = () => {
    const { id } = useParams();
    const product = products[id];

    if (!product) {
        return <div className='text-primary-text'>Product not found</div>;
    }

    return (
        <div className='bg-primary-bg min-h-screen'>
            <Helmet>
                <title>{product.name} | Maison Rose Lifestyle Fashion Collection</title>
                <meta name="description" content={`${product.description} Shop premium Thai-inspired fashion at Maison Rose Lifestyle, New Town, Kolkata.`} />
                <meta name="keywords" content={`${product.name}, Thai fashion Kolkata, ${product.category}, Maison Rose fashion, luxury clothing Kolkata`} />
                <meta property="og:title" content={`${product.name} | Maison Rose Lifestyle`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`https://maisonroselifestyle.com/product/${id}`} />
                <link rel="canonical" href={`https://maisonroselifestyle.com/product/${id}`} />
            </Helmet>

            {/* Navigation */}
            <div className='sticky top-3 z-10'>
                <div className='h-14 p-3 rounded-xl navbar bg-[#18181890]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='border-primary-border border-[1px] p-2 rounded-lg'>
                            <RxHamburgerMenu className='text-white' />
                        </div>
                        <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>
                            Product Details
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className='max-w-6xl mx-auto p-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Product Image */}
                    <div className='rounded-xl overflow-hidden'>
                        <img 
                            src={product.image} 
                            alt={`${product.name} - Maison Rose Lifestyle Collection`}
                            className='w-full h-full object-cover'
                            loading="lazy"
                        />
                    </div>

                    {/* Product Info */}
                    <div className='text-primary-text'>
                        <h1 className='text-3xl font-forum mb-4'>{product.name}</h1>
                        <p className='text-2xl font-semibold mb-6'>{product.price}</p>
                        <p className='mb-6'>{product.description}</p>
                        
                        <h2 className='text-xl font-forum mb-4'>Product Details</h2>
                        <ul className='list-disc list-inside mb-6'>
                            {product.details.map((detail, index) => (
                                <li key={index} className='mb-2'>{detail}</li>
                            ))}
                        </ul>

                        <button className='w-full py-3 bg-primary-pink text-black rounded-lg hover:opacity-90 transition-opacity'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage