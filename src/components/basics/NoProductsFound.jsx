import React from 'react';

const NoProductsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-primary-bg text-center p-6 rounded-lg shadow-md">
            <img
                src="/store/Noproduct.jpg"
                alt="No products found"
                className="w-32 h-32 mb-4"
            />
            <h2 className="text-xl font-forum text-primary-text mb-2">
                Oops! No matches found 🛍️
            </h2>
            <p className="text-primary-text">
                Looks like we couldn’t find anything. How about trying something else? 🛍️
            </p>
            <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms!
            </p>
            <button
                onClick={() => (window.location.href = "/store")} // Adjust route
                className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition transform hover:scale-105"
            >
                Explore All Products
            </button>
        </div>
    );
};

export default NoProductsFound;
