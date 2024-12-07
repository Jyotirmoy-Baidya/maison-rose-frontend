import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const categories = [
    {
        id: 'thai-fashion',
        name: 'Thai Fashion',
        description: 'Authentic Thai-inspired fashion pieces combining traditional craftsmanship with modern design',
        image: './images/categories/thai-fashion.jpg'
    },
    {
        id: 'resort-wear',
        name: 'Resort Wear',
        description: 'Comfortable and stylish resort wear perfect for tropical weather',
        image: './images/categories/resort-wear.jpg'
    },
    {
        id: 'accessories',
        name: 'Accessories',
        description: 'Handcrafted Thai accessories to complement your outfit',
        image: './images/categories/accessories.jpg'
    }
];

const GeneralProductPage = () => {
    return (
        <div className='bg-primary-bg min-h-screen'>
            <Helmet>
                <title>Fashion Collections | Maison Rose Lifestyle Boutique Kolkata</title>
                <meta name="description" content="Explore our diverse collection of Thai-inspired fashion, resort wear, and accessories at Maison Rose Lifestyle in New Town, Kolkata. Premium quality, authentic designs." />
                <meta name="keywords" content="Thai fashion boutique Kolkata, resort wear New Town, fashion accessories Kolkata, Maison Rose collections, luxury fashion Kolkata" />
                <meta property="og:title" content="Fashion Collections | Maison Rose Lifestyle Boutique" />
                <meta property="og:description" content="Discover premium Thai-inspired fashion collections at Maison Rose Lifestyle. From elegant evening wear to casual resort pieces." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://maisonroselifestyle.com/collections" />
                <link rel="canonical" href="https://maisonroselifestyle.com/collections" />
            </Helmet>

            {/* Navigation */}
            <div className='sticky top-3 z-10'>
                <div className='h-14 p-3 rounded-xl navbar bg-[#18181890]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='border-primary-border border-[1px] p-2 rounded-lg'>
                            <RxHamburgerMenu className='text-white' />
                        </div>
                        <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>
                            Collections
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className='p-4'>
                <h1 className='text-3xl font-forum text-primary-text mb-4'>Our Collections</h1>
                <p className='text-primary-text mb-8'>
                    Discover our carefully curated collections of Thai-inspired fashion,
                    bringing the elegance of Thai design to Kolkata.
                </p>
            </div>

            {/* Categories Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {categories.map((category) => (
                    <div key={category.id} className='border-2 border-primary-border rounded-xl overflow-hidden'>
                        <img
                            src={category.image}
                            alt={`${category.name} Collection - Maison Rose Lifestyle`}
                            className='w-full h-48 object-cover'
                            loading="lazy"
                        />
                        <div className='p-4'>
                            <h2 className='text-xl font-forum text-primary-text mb-2'>{category.name}</h2>
                            <p className='text-primary-text opacity-80 mb-4'>{category.description}</p>
                            <NavLink
                                to={`/collections/${category.id}`}
                                className='block text-center border border-primary-border rounded-lg py-2 text-primary-text hover:bg-primary-pink hover:text-black transition-colors'
                            >
                                View Collection
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GeneralProductPage