import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const MobileNavbar = () => {
    return (
        <div className='xl:hidden block sticky top-3'>
            <div className='z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181890]'>
                <div className='w-full h-full flex items-center'>
                    <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                    <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Store</div>

                </div>
            </div>
        </div>
    )
}

export default MobileNavbar