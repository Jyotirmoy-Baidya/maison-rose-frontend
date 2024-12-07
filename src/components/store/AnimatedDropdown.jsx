import React, { useState } from 'react';

const AnimatedDropdown = ({ sort, setSort }) => {
    const [isOpen, setIsOpen] = useState(false);


    const options = ['Default', 'Price: Low to High', 'Price: High to Low'];

    const handleSelect = (option) => {
        setSort(option);
        setIsOpen(false);
    };

    return (
        <div className="flex z-10 ml-auto items-center justify-center font-forum">
            <div className="relative">
                {/* Dropdown Trigger */}
                <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="cursor-pointer border-2 border-primary-border text-primary-text px-6 py-3 rounded-lg shadow-lg flex justify-between items-center w-48 xl:w-64"
                >
                    <span>{sort}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12l-7.5 7.5L4.5 12"
                        />
                    </svg>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div
                        className="absolute mt-2 w-48 xl:w-64 text-primary-text bg-primary-bg border-2 border-primary-border rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform scale-y-100 origin-top animate-slideDown"
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-6 py-3 cursor-pointer hover:bg-primary-text hover:text-primary-bg transition-colors"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnimatedDropdown;
