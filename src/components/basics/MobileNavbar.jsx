import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import HamburgerMenu from './HamburgerMenu'
import MobileHamburgerMenu from './MobileHamburgerMenu'
import { NavLink } from 'react-router-dom'

const MobileNavbar = () => {
    return (
        <div className='xl:hidden z-20 block w-full fixed px-3 top-3'>
            <div className='h-14 p-3 top-10 left-10 w-full rounded-xl navbar bg-[#181818] backdrop-blur-sm'>
                <div className='w-full h-full flex items-center'>
                    <MobileHamburgerMenu />
                    <NavLink to='' className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar