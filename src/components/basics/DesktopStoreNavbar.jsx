import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import HoverDropdown from './HoverDropdown'
import { AccessoriesCategories, DressCategories } from '../../constants/store'
import { RxHamburgerMenu } from 'react-icons/rx'

const DesktopStoreNavbar = ({ scrollToPart, p1 }) => {

    const location = useLocation();
    console.log(location.pathname.split('/'));
    console.log(location.pathname)
    return (
        <div className='xl:block hidden fixed z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181895] backdrop-blur-sm'>
            <div className='w-full h-full flex items-center'>
                <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Cafe</div>
                <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/store'>Store</NavLink>
                    <HoverDropdown ItemCategoryList={DressCategories} value='Category' />
                    <HoverDropdown ItemCategoryList={AccessoriesCategories} value='Accessories' />

                    {
                        location.pathname.split('/')[1] === 'fashion' || location.pathname.split('/')[1] === 'store' &&

                        <div onClick={() => scrollToPart(p1)} className='cursor-pointer hidden 2xl:block'>New Launch</div>
                    }
                    <div className='border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink'>
                        Store
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopStoreNavbar