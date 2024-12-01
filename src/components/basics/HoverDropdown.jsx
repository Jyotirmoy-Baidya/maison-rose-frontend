import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const HoverDropdown = ({ ItemCategoryList, value }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Trigger Button */}
            <div className="cursor-pointer">
                {value}
            </div>

            {/* Dropdown */}
            {isDropdownVisible && (
                <div className="absolute top-full left-0 bg-[#18181895] backdrop-blur-3xl shadow-lg w-48 z-10">
                    {ItemCategoryList?.map((category, index) => (
                        <NavLink to={`/fashion-store/${category.type}`}
                            key={index}
                            className="flex justify-between items-center px-4 py-2 hover:bg-primary-text hover:text-primary-bg cursor-pointer text-primary-text relative"
                            onMouseEnter={() => setHoveredCategory(category.type)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <span>{category.type}</span>
                            {
                                category.subcategories?.length > 0 &&
                                <span>→</span>
                            }

                            {/* Subcategories Dropdown */}
                            {hoveredCategory === category.type && (
                                <div className="absolute flex flex-col top-0 bg-[#18181895] backdrop-blur-md left-full  shadow-lg w-48">
                                    {category?.subcategories?.map((subcategory, subIndex) => (
                                        <NavLink to={`/fashion-store/${category.type}/${subcategory}`}
                                            key={subIndex}
                                            className="px-4 py-2 text-primary-text hover:bg-primary-text hover:text-primary-bg cursor-pointer"
                                        >
                                            {subcategory}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HoverDropdown;
