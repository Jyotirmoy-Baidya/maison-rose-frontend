import React from "react";

const ErrorComponent = () => {
    return (
        <div className="flex items-center justify-center bg-primary-bg font-forum">
            <div className="border-2 border-primary-border p-8 rounded-3xl shadow-lg text-center max-w-md">
                <div className="flex justify-center mb-4">
                    <span className="text-pink-400 text-6xl">😔</span>
                </div>
                <h1 className="text-4xl text-pink-600 font-bold mb-2">Oh no!</h1>
                <p className="text-lg text-primary-text mb-6">
                    We couldn’t load the page. Something went wrong!
                </p>
                <button
                    className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition-transform transform hover:scale-105"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
                <p className="text-sm text-gray-500 mt-4">
                    Need help?{" "}
                    <a
                        href="/contact"
                        className="text-pink-500 hover:underline hover:text-pink-600"
                    >
                        Contact us
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ErrorComponent;
