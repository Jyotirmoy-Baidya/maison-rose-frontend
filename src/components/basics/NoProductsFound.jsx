import React from 'react';

const NoProductsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-primary-bg text-center p-6 rounded-lg shadow-md">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No products found"
                className="w-32 h-32 mb-4 opacity-75"
            />
            <h2 className="text-xl font-forum text-primary-text mb-2">
                Oops! No matches found 🛍️
            </h2>
            <p className="text-primary-text">
                We couldn’t find any products that match your search.
            </p>
            <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms!
            </p>
            <button
                onClick={() => window.location.reload()}
                className="border-2 border-primary-border text-white font-medium py-2 px-4 rounded hover:bg-pink-500 transition duration-200"
            >
                Refresh and Try Again
            </button>
        </div>
    );
};

export default NoProductsFound;
