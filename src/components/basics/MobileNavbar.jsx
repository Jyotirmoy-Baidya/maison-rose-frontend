import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import HamburgerMenu from './HamburgerMenu'

const MobileNavbar = () => {
    return (
        <div className='xl:hidden z-20 block sticky top-3'>
            <div className='h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#181818] backdrop-blur-sm'>
                <div className='w-full h-full flex items-center'>
                    {/* <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div> */}
                    <HamburgerMenu />
                    <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle</div>

                </div>
            </div>
        </div>
    )
}

export default MobileNavbar