import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Tracks which submenu is open

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (submenuIndex) => {
        setActiveSubmenu((prev) => (prev === submenuIndex ? null : submenuIndex));
    };

    return (
        <div className="menu-container">
            {/* Hamburger Icon */}
            <div className='border-primary-border border-[1px] p-2 rounded-lg' onClick={toggleMenu}
                aria-label="Toggle Menu">
                {
                    isMenuOpen ? <RxCross1 className="text-white" /> :
                        <RxHamburgerMenu className='text-white' />
                }

            </div>

            {/* Dropdown Menu */}
            <div className={`dropdown ${isMenuOpen ? "show bg-[#181818] mt-2" : ""}`}>
                <ul className="menu">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <button
                            onClick={() => toggleSubmenu(1)}
                            className="w-full text-left text-[#EFE7D2] font-forum"
                        >
                            Services
                        </button>
                        <ul
                            className={`submenu ${activeSubmenu === 1 ? "show-submenu" : "hide-submenu"
                                }`}
                        >
                            <li>
                                <a href="#web-dev">Web Development</a>
                            </li>
                            <li>
                                <a href="#design">Design</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
