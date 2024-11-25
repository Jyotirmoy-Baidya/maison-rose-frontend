import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='xl:block hidden fixed z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181895]'>
            <div className='w-full h-full flex items-center'>
                <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Cafe</div>
                <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/fashion-store/categories'>Categories</NavLink>
                    <NavLink to='/fashion-store/c/accessories'>Accessories</NavLink>
                    <div className='border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink'>
                        Store
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar