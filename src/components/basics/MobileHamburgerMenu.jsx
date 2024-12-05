import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { fetchCategoriesAndAccessories } from "../../api/AirtableApis";
import { processAccessoriesCategory, processFashionCategory } from "../../utils/TransformData";
import HoverDropdownMobile from "./HoverDropdownMobile";

const MobileHamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const [fashion, setFashion] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const location = useLocation();


    useEffect(() => {
        const getNavbarDropdownDatas = async () => {
            try {
                const data = await fetchCategoriesAndAccessories();
                console.log(data);
                const NavArrayForFashion = processFashionCategory(data);
                setFashion(NavArrayForFashion);
                const NavArrayForAccessories = processAccessoriesCategory(data);
                setAccessories(NavArrayForAccessories);
            } catch (error) {
                setAccessories([]);
                setFashion([]);
            }
        };

        getNavbarDropdownDatas();
    }, []);

    return (
        <div className="block xl:hidden">
            {/* Menu Toggle Button */}
            <div
                className="border-primary-border border-[1px] p-2 rounded-lg cursor-pointer"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? (
                    <RxCross1 className="text-white transition-transform duration-300 rotate-180" />
                ) : (
                    <RxHamburgerMenu className="text-white transition-transform duration-300" />
                )}
            </div>

            {/* Navbar */}
            <div
                className={`fixed top-16 uppercase left-0 bg-[#181818] w-full lg:w-64 text-primary-text tracking-wide shadow-lg z-50 origin-top transform transition-transform duration-500 ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}

            >
                <ul className="flex flex-col top-0 bg-[#181818]">
                    {/* Menu Items */}

                    <HoverDropdownMobile ItemCategoryList={fashion} />
                    <HoverDropdownMobile ItemCategoryList={accessories} />
                    <li>
                        <NavLink
                            to="/"
                            className="px-4 py-2  block cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className="px-4 py-2  flex justify-between cursor-pointer"
                            onClick={() => toggleSubMenu("services")}
                        >
                            <span>Services</span>
                            <button className="text-lg">+</button>
                        </div>
                        {/* Submenu */}
                        <div
                            className={`overflow-hidden transition-max-height text-sm duration-500 ${openSubMenu === "services" ? "max-h-full" : "max-h-0"
                                }`}
                        >
                            <ul className="ml-4 mt-2 space-y-2">

                                <NavLink
                                    to="cafe"
                                    className="px-4 py-2  block cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Cafe
                                </NavLink>


                                <NavLink
                                    to="/salon"
                                    className="px-4 py-2  block cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Unisex Salon
                                </NavLink>


                                <NavLink
                                    to="/store"
                                    className="px-4 py-2  block cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Store
                                </NavLink>
                                <NavLink
                                    to="/nail-art"
                                    className="px-4 py-2  block cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Nailart
                                </NavLink>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="px-4 py-2  block cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="px-4 py-2  block cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default MobileHamburgerMenu;
