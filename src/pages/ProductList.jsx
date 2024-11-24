import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const products = [
    {
        id: 1,
        name: "Thai Silk Evening Dress",
        price: "₹12,999",
        description: "Handcrafted Thai silk evening dress with modern silhouette",
        image: "./images/products/dress1.jpg"
    },
    {
        id: 2,
        name: "Traditional Thai Wrap Skirt",
        price: "₹4,999",
        description: "Authentic Thai wrap skirt with contemporary patterns",
        image: "./images/products/skirt1.jpg"
    },
    {
        id: 3,
        name: "Thai Cotton Resort Wear",
        price: "₹6,999",
        description: "Comfortable resort wear made from premium Thai cotton",
        image: "./images/products/resort1.jpg"
    }
];

const ProductList = () => {
    return (
        <div className='bg-primary-bg min-h-screen'>
            <Helmet>
                <title>Thai-Inspired Fashion Collection | Maison Rose Lifestyle Kolkata</title>
                <meta name="description" content="Explore our exclusive collection of Thai-inspired fashion at Maison Rose Lifestyle, New Town, Kolkata. Discover handcrafted silk dresses, resort wear, and contemporary designs." />
                <meta name="keywords" content="Thai fashion Kolkata, designer wear New Town, Maison Rose fashion, luxury clothing Kolkata, Thai silk dresses" />
                <meta property="og:title" content="Thai-Inspired Fashion Collection | Maison Rose Lifestyle" />
                <meta property="og:description" content="Shop premium Thai-inspired fashion at Maison Rose Lifestyle. Exclusive collection of silk dresses, resort wear, and contemporary designs in Kolkata." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://maisonroselifestyle.com/products" />
                <link rel="canonical" href="https://maisonroselifestyle.com/products" />
            </Helmet>

            {/* Navigation */}
            <div className='sticky top-3 z-10'>
                <div className='h-14 p-3 rounded-xl navbar bg-[#18181890]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='border-primary-border border-[1px] p-2 rounded-lg'>
                            <RxHamburgerMenu className='text-white' />
                        </div>
                        <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>
                            Our Collection
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <div className='p-4'>
                <h1 className='text-3xl font-forum text-primary-text mb-4'>Thai-Inspired Fashion Collection</h1>
                <p className='text-primary-text mb-8'>
                    Discover our curated collection of Thai-inspired fashion pieces, 
                    combining traditional Thai craftsmanship with contemporary design.
                </p>
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {products.map((product) => (
                    <div key={product.id} className='border-2 border-primary-border rounded-xl p-4'>
                        <img 
                            src={product.image} 
                            alt={product.name + " - Maison Rose Lifestyle Collection"} 
                            className='w-full h-64 object-cover rounded-lg mb-4'
                            loading="lazy"
                        />
                        <h2 className='text-xl font-forum text-primary-text mb-2'>{product.name}</h2>
                        <p className='text-primary-text opacity-80 mb-2'>{product.description}</p>
                        <p className='text-primary-text font-semibold'>{product.price}</p>
                        <NavLink 
                            to={`/product/${product.id}`}
                            className='block text-center mt-4 border border-primary-border rounded-lg py-2 text-primary-text hover:bg-primary-pink hover:text-black transition-colors'
                        >
                            View Details
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList