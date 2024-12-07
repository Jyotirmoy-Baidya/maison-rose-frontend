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
                <div className="absolute top-full left-0 bg-[#181818] w-48 z-10 pt-[17.5px]">
                    {ItemCategoryList?.map((category, index) => (
                        <NavLink to={`/fashion-store/c/${category.category}`}
                            key={index}
                            className="flex justify-between items-center px-4 py-2 hover:bg-primary-text hover:text-primary-bg cursor-pointer text-primary-text relative"
                            onMouseEnter={() => setHoveredCategory(category.category)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <span>{category.category}</span>
                            {
                                category.subcategories?.length > 0 &&
                                <span>→</span>
                            }

                            {/* Subcategories Dropdown */}
                            {hoveredCategory === category.category && (
                                <div className="absolute flex flex-col max-h-[450px] overflow-y-auto top-0 bg-[#181818] left-full  shadow-lg w-48 no-scrollbar stylish-scroll">
                                    {category?.subcategories?.map((subcategory, subIndex) => (
                                        <NavLink to={`/fashion-store/c/${category.category}/${subcategory}`}
                                            key={subIndex}
                                            className="px-4 py-2 text-primary-text hover:bg-primary-text hover:text-primary-bg cursor-pointer"
                                            onClick={() => { setIsDropdownVisible(false); setHoveredCategory(null) }}
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
