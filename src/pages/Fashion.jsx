import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import WhatnewCard from '../components/store/WhatnewCard'

const Fashion = () => {

    const [hover, setHover] = useState(false);
    return (
        <div className='min-h-screen p-6 w-screen flex flex-col overflow-x-hidden bg-primary-bg relative'>
            {/* Navbar */}
            <div className='xl:block hidden fixed z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181895]'>
                <div className='w-full h-full flex items-center'>
                    <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                    <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Cafe</div>
                    <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/fashion-store/categories'>Categories</NavLink>
                        <NavLink to='/fashion-store/c/accessories'>Accessories</NavLink>

                        <div onClick={() => scrollToPart(p1)} className='cursor-pointer'>New Launch</div>
                        <div className='border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink'>
                            Store
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:flex items-center gap-2 w-96 hidden fixed z-10 p-3 top-10 right-10 rounded-xl searchbar '>
                <div className='uppercase h-full w-full'>
                    <input type="text" className='w-full bg-slate-500 bg-opacity-5 rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none' placeholder='Search' />
                </div>
                <div className='text-xl text-primary-text'><IoSearchSharp /></div>
            </div>
            <div className='mt-32'>Jyoti</div>

            <div className='flex-col flex'>
                <h2 className='text-primary-text text-5xl text-center font-forum'>What's New</h2>

                <div className='flex mt-8 px-8 overflow-x-scroll no-scrollbar'>
                    <div className='flex gap-5 ' >
                        <WhatnewCard />
                        <WhatnewCard />
                        <WhatnewCard />
                        <WhatnewCard />
                        <WhatnewCard />
                        <WhatnewCard />
                        <WhatnewCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fashion