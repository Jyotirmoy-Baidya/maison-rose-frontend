import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import WhatnewCard from '../components/store/WhatnewCard'
import ParallaxText from '../components/basics/ParallaxText'

import Aos from 'aos'
import 'aos/dist/aos.css'
import StoreHoverButton from '../components/store/StoreHoverButton'

const Fashion = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const [hover, setHover] = useState(false);
    return (
        <div className='min-h-screen p-6 flex flex-col overflow-x-hidden bg-primary-bg relative'>
            {/* Navbar */}
            <div className='xl:block hidden fixed z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181895]'>
                <div className='w-full h-full flex items-center'>
                    <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                    <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Cafe</div>
                    <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/fashion-store/categories'>Categories</NavLink>
                        <NavLink to='/fashion-store/c/accessories'>Accessories</NavLink>

                        <div onClick={() => scrollToPart(p1)} className='cursor-pointer hidden 2xl:block'>New Launch</div>
                        <div className='border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink'>
                            Store
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:flex items-center gap-2 w-96 hidden fixed z-10 p-3 top-10 right-10 rounded-xl searchbar '>
                <div className='uppercase h-full w-full'>
                    <input type="text" className='w-full bg-[#18181895]  rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none' placeholder='Search' />
                </div>
                <div className='text-xl text-primary-text'><IoSearchSharp /></div>
            </div>
            <div className='mt-32'>Jyoti</div>

            <div className='flex-col flex w-full'>
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

                <div className='my-20'>
                    <ParallaxText baseVelocity={-5}>CRAVE FOR SHOPPING, EXPLORE OUR OFFERS HERE</ParallaxText>
                </div>

                <div className='relative mx-auto xl:h-[500px] 2xl:h-[600px] w-11/12 mt-20 shopping-area'>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute left-[80px] top-[140px] z-[2] 2xl:h-72 h-56'
                    >
                        <img src="./store/HomeShoe.png" alt="Home Shoe" className='h-full' />
                        <StoreHoverButton type='white' className='py-2 px-6 absolute bottom-5 left-1/2 -translate-x-1/2' text='Shoe' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute left-[300px] top-0 z-[1] 2xl:h-80 xl:h-64'
                    >
                        <img src="./store/HomePerfume.png" alt="Home Perfume" className='h-full' />
                        <StoreHoverButton type='white' className='py-2 px-6 absolute bottom-5 left-1/2 -translate-x-1/2' text='Perfumes' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 2xl:left-[310px] xl:left-[265px] bottom-0 xl:h-48 2xl:h-56 z-[3]'
                    >
                        <img src="./store/HomeBag.png" alt="Home Bag" className='h-full' />
                        <StoreHoverButton type='black' className='py-2 px-6 absolute bottom-2 left-1/2 -translate-x-1/2' text='Bags' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute xl:left-[810px] 2xl:left-[1005px] bottom-[55px] 2xl:h-96 h-80 z-[3]'
                    >
                        <img src="./store/what-new1.jpg" alt="Home Dress" className='h-full' />
                        <StoreHoverButton className='py-2 px-5 absolute bottom-5 left-1/2 -translate-x-1/2' text='Dress' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 2xl:left-[850px] xl:left-[690px] top-14 xl:h-40 2xl:h-48 z-[3]'
                    >
                        <img src="./store/HomeJewellery.jpg" alt="Home Sunglasses" className='h-full' />
                        <StoreHoverButton type='white' className='2xl:py-2 2xl:px-6 py-1 px-5 absolute bottom-3 left-1/2 -translate-x-1/2' text='Jewellery' />
                    </div>




                    <div className='font-medium absolute xl:left-[400px] 2xl:left-[460px] bottom-[80px]  xl:text-8xl 2xl:text-9xl z-[7] text-primary-pink' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">S</div>
                    <div className='font-medium absolute xl:left-[400px] 2xl:left-[460px] bottom-[80px]  xl:text-8xl 2xl:text-9xl z-[6] text-white' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPIN</div>
                    <div className='font-medium absolute xl:left-[400px] 2xl:left-[460px] bottom-[80px]  xl:text-8xl 2xl:text-9xl z-[5] text-primary-bg' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPING</div>


                    <StoreHoverButton type='white' className="2xl:py-2 2xl:px-6 py-1 px-5 absolute bottom-3 left-1/2 -translate-x-1/2" text='explore' />


                </div>

                <div className='bg-primary-bg h-96'></div>
                <div className='bg-primary-bg h-96'></div>
            </div>


        </div >
    )
}

export default Fashion