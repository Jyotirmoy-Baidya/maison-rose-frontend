import React, { useState } from "react";

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
            <button
                className={`hamburger ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span />
                <span />
                <span />
            </button>

            {/* Dropdown Menu */}
            <div className={`dropdown ${isMenuOpen ? "show bg-[#181818]" : ""}`}>
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
