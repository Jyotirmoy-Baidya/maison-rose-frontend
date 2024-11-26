import React, { useState } from 'react';
import Navbar from '../components/basics/Navbar';
import { IoSearchSharp } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimatedDropdown from '../components/store/AnimatedDropdown';
import DesktopProductModal from '../components/store/DesktopProductModal';

const ProductPage = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default'); // Sorting options: 'default', 'asc', 'desc'
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            name: 'Stylish Summer Shirt',
            productionDetails: 'Manufactured by Trendy Fashions Co.',
            color: 'Blue',
            category: 'Clothing',
            tags: ['Casual', 'Comfortable', 'Lightweight'],
            season: 'Summer',
            images: [
                '/store/GreenDress1.jpg',
                '/store/what-new1.jpg',
                '/store/WhiteFloral1.jpg'
            ],
            price: 1200,
            discountedPercentage: 20,
            discountedPrice: 960,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example',
        },
        {
            name: 'Winter Wool Jacket',
            productionDetails: 'Warm & Cozy Garments Inc.',
            color: 'Gray',
            category: 'Clothing',
            tags: ['Warm', 'Stylish', 'Durable'],
            season: 'Winter',
            images: [
                '/store/what-new1.jpg',
            ],
            price: 3500,
            discountedPercentage: 15,
            discountedPrice: 2975,
            availability: 'Out of Stock',
            amazonLink: 'https://www.amazon.com/dp/example2',
        },
        {
            name: 'Stylish Summer Shirt',
            productionDetails: 'Manufactured by Trendy Fashions Co.',
            color: 'Blue',
            category: 'Clothing',
            tags: ['Casual', 'Comfortable', 'Lightweight'],
            season: 'Summer',
            images: [
                '/store/WhiteFloral1.jpg',
            ],
            price: 1200,
            discountedPercentage: 20,
            discountedPrice: 960,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example',
        },
        {
            name: 'Winter Wool Jacket',
            productionDetails: 'Warm & Cozy Garments Inc.',
            color: 'Gray',
            category: 'Clothing',
            tags: ['Warm', 'Stylish', 'Durable'],
            season: 'Winter',
            images: [
                '/store/MultiColorCord.jpg',
            ],
            price: 3500,
            discountedPercentage: 15,
            discountedPrice: 2975,
            availability: 'Out of Stock',
            amazonLink: 'https://www.amazon.com/dp/example2',
        },
        {
            name: 'Festive Cotton Saree',
            productionDetails: 'Handwoven Sarees Ltd.',
            color: 'Red',
            category: 'Clothing',
            tags: ['Traditional', 'Elegant', 'Festive'],
            season: 'Durga Puja',
            images: [
                '/store/SportsWear1.jpg',
            ],
            price: 2200,
            discountedPercentage: 25,
            discountedPrice: 1650,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example3',
        },
        {
            name: 'Stylish Summer Shirt',
            productionDetails: 'Manufactured by Trendy Fashions Co.',
            color: 'Blue',
            category: 'Clothing',
            tags: ['Casual', 'Comfortable', 'Lightweight'],
            season: 'Summer',
            images: [
                '/store/GreenDress1.jpg',
                '/store/what-new1.jpg',
                '/store/WhiteFloral1.jpg'
            ],
            price: 1200,
            discountedPercentage: 20,
            discountedPrice: 960,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example',
        },
        {
            name: 'Winter Wool Jacket',
            productionDetails: 'Warm & Cozy Garments Inc.',
            color: 'Gray',
            category: 'Clothing',
            tags: ['Warm', 'Stylish', 'Durable'],
            season: 'Winter',
            images: [
                '/store/what-new1.jpg',
            ],
            price: 3500,
            discountedPercentage: 15,
            discountedPrice: 2975,
            availability: 'Out of Stock',
            amazonLink: 'https://www.amazon.com/dp/example2',
        },
        {
            name: 'Stylish Summer Shirt',
            productionDetails: 'Manufactured by Trendy Fashions Co.',
            color: 'Blue',
            category: 'Clothing',
            tags: ['Casual', 'Comfortable', 'Lightweight'],
            season: 'Summer',
            images: [
                '/store/WhiteFloral1.jpg',
            ],
            price: 1200,
            discountedPercentage: 20,
            discountedPrice: 960,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example',
        },
        {
            name: 'Winter Wool Jacket',
            productionDetails: 'Warm & Cozy Garments Inc.',
            color: 'Gray',
            category: 'Clothing',
            tags: ['Warm', 'Stylish', 'Durable'],
            season: 'Winter',
            images: [
                '/store/MultiColorCord.jpg',
            ],
            price: 3500,
            discountedPercentage: 15,
            discountedPrice: 2975,
            availability: 'Out of Stock',
            amazonLink: 'https://www.amazon.com/dp/example2',
        },
        {
            name: 'Festive Cotton Saree',
            productionDetails: 'Handwoven Sarees Ltd.',
            color: 'Red',
            category: 'Clothing',
            tags: ['Traditional', 'Elegant', 'Festive'],
            season: 'Durga Puja',
            images: [
                '/store/SportsWear1.jpg',
            ],
            price: 2200,
            discountedPercentage: 25,
            discountedPrice: 1650,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example3',
        }
    ];

    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
        .sort((a, b) => {
            if (sort == 'Price: Low to High') return a.price - b.price;
            if (sort == 'Price: High to Low') return b.price - a.price;
            return 0; // Default order
        });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleShareLink = () => {
        if (selectedProduct) {
            navigator.clipboard.writeText(selectedProduct.amazonLink);
            alert('Product link copied to clipboard!');
        }
    };

    const navigation = useNavigate();
    const location = useLocation();

    return (
        <div className="bg-primary-bg flex flex-col  min-h-screen p-3 xl:p-6">
            <Navbar />
            <div className='w-full text-primary-text font-forum text-2xl mt-24 navigation-list'>{location.pathname}</div>
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-6 mt-2">
                <div className='xl:flex w-full h-[50px] border-2 border-primary-border px-2 rounded-lg items-center gap-2 searchbar '>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                        className="flex-grow font-forum  text-primary-text h-full bg-primary-bg px-3 py-3 outline-none focus:outline-none "
                    />
                    <div className='text-xl text-primary-text'><IoSearchSharp /></div>
                </div>





                <AnimatedDropdown sort={sort} setSort={setSort} />
            </div>





            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-col-8 4xl:grid-cols-9 gap-3 xl:gap-6">
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800 shadow-lg rounded hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                        onClick={() => handleProductClick(product)}
                    >

                        <img src={product.images[0]} alt={product.name} className='w-full hover:scale-[105%] transition-transform duration-300 brightness-[90%]' />

                        <div className='absolute flex flex-col bottom-2 left-0 px-2 w-full'>
                            <div className='bg-primary-text rounded p-2 xl:p-3 w-full'>
                                <h1 className='text-primary-bg font-forum xl:text-base text-sm'>{product.name}</h1>
                                <div className='flex xl:text-base text-sm'>
                                    {
                                        product.discountedPercentage == 0 ?
                                            <div className=''>₹ {product.price}</div>
                                            :
                                            <div className=''>₹ <s className='text-xs xl:text-sm text-red-500'>{product.price}</s> {product.discountedPrice}</div>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-indigo-400">
                                ₹{product.discountedPrice}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                                ₹{product.price}
                            </span>
                        </div>
                        <p
                            className={`font-semibold ${product.availability === 'In Stock'
                                ? 'text-green-400'
                                : 'text-red-400'
                                }`}
                        >
                            {product.availability}
                        </p> */}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <DesktopProductModal handleCloseModal={handleCloseModal} selectedProduct={selectedProduct} />
            )}
        </div>
    );
};

export default ProductPage;
