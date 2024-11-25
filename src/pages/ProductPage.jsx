import React, { useState } from 'react';
import Navbar from '../components/basics/Navbar';
import { IoSearchSharp } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimatedDropdown from '../components/store/AnimatedDropdown';

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
                'https://via.placeholder.com/300x300?text=Summer+Shirt',
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
                'https://via.placeholder.com/300x300?text=Winter+Jacket',
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
                'https://via.placeholder.com/300x300?text=Cotton+Saree',
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
                'https://via.placeholder.com/300x300?text=Summer+Shirt',
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
                'https://via.placeholder.com/300x300?text=Winter+Jacket',
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
                'https://via.placeholder.com/300x300?text=Cotton+Saree',
            ],
            price: 2200,
            discountedPercentage: 25,
            discountedPrice: 1650,
            availability: 'In Stock',
            amazonLink: 'https://www.amazon.com/dp/example3',
        },
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
        <div className="bg-primary-bg flex flex-col  min-h-screen p-6">
            <Navbar />
            <div className='w-full text-primary-text font-forum text-2xl mt-24 navigation-list'>{location.pathname}</div>
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-6 mt-2">
                <div className='xl:flex w-full h-[50px] border-2 border-primary-border px-2 rounded-lg items-center gap-2 searchbar '>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                        className="w-full font-forum  text-primary-text h-full bg-primary-bg px-3 py-3 outline-none focus:outline-none "
                    />
                    <div className='text-xl text-primary-text'><IoSearchSharp /></div>
                </div>





                <AnimatedDropdown sort={sort} setSort={setSort} />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => handleProductClick(product)}
                    >
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
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
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-gray-800 text-gray-100 rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/3">
                        <h2 className="text-2xl font-semibold mb-4">
                            {selectedProduct.name}
                        </h2>
                        <img
                            src={selectedProduct.images[0]}
                            alt={selectedProduct.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
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
                        </p>
                        <div className="flex justify-between items-center">
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
