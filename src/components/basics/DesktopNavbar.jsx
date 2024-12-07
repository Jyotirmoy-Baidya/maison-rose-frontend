import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import HoverDropdown from './HoverDropdown'
import { RxHamburgerMenu } from 'react-icons/rx'
import { fetchCategoriesAndAccessories } from '../../api/AirtableApis'
import { processAccessoriesCategory, processFashionCategory } from '../../utils/TransformData'
import HamburgerMenu from './HamburgerMenu'
import ContactButton from './ContactButton'




const DesktopNavbar = ({ scrollToPart, p1 }) => {

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
        <div className='xl:block hidden fixed z-20 h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#181818]'>
            <div className='w-full h-full flex items-center'>
                <HamburgerMenu />
                <img src="/logo/maisonroselifesytlelogo.jpg" alt="logo" className='h-7 w-7 ml-2 rounded-full' />
                <NavLink to='/' className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle</NavLink>
                <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                    <NavLink to='/' className='text-primary-text'>Home</NavLink>
                    <NavLink to='/store'>Store</NavLink>
                    {
                        location.pathname === '/cafe' && <NavLink to='/combos'>Combos</NavLink>
                    }
                    <HoverDropdown ItemCategoryList={fashion} value='Clothing' />
                    {
                        location.pathname != '/cafe' &&
                        <HoverDropdown ItemCategoryList={accessories} value='Accessories' />
                    }
                    <ContactButton />
                </div>
            </div>
        </div>
    )
}

export default DesktopNavbar