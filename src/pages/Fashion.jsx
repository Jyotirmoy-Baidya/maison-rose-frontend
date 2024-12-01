import React, { useEffect, useRef, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import WhatnewCard from '../components/store/WhatnewCard'
import ParallaxText from '../components/basics/ParallaxText'

import Aos from 'aos'
import 'aos/dist/aos.css'
import StoreHoverButton from '../components/store/StoreHoverButton'
import DesktopStoreNavbar from '../components/basics/DesktopStoreNavbar'




const Fashion = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);

    const scrollToPart = (ref) => {
        const element = ref.current;
        if (element) {
            // Scroll to the element with an offset of 10px
            window.scrollTo({
                top: element.offsetTop - 200, // Adjust 10px above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='min-h-screen p-6 flex flex-col overflow-x-hidden bg-primary-bg relative'>
            {/* Navbar */}
            <DesktopStoreNavbar scrollToPart={scrollToPart} p1={p1} />

            <div className='xl:flex items-center gap-2 w-96 hidden fixed z-10 p-3 top-10 right-10 rounded-xl searchbar '>
                <div className='uppercase h-full w-full'>
                    <input type="text" className='w-full bg-[#18181895] backdrop-blur-sm  rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none' placeholder='Search' />
                </div>
                <div className='text-xl text-primary-text'><IoSearchSharp /></div>
            </div>
            <div className='mt-32'>Jyoti</div>

            <div className='flex-col flex w-full'>
                <h2 className='text-primary-text text-5xl text-center font-forum'>What's New</h2>

                <div className='flex mt-8 px-8 overflow-x-scroll no-scrollbar' ref={p1}>
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
                    <ParallaxText baseVelocity={-1}>CRAVE FOR SHOPPING, EXPLORE OUR OFFERS HERE</ParallaxText>
                </div>

                <div className='relative mx-auto h-[370px] md:h-[440px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[650px] 4xl:h-[800px] 5xl:w-9/12 4xl:w-[96%]  3xl:w-10/12 lg:w-11/12 w-full mt-20 shopping-area'>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute -left-[50px] top-[90px]  md:left-[30px] lg:left-[70px] lg:top-[160px] xl:left-[80px] md:top-[150px] xl:top-[140px] 3xl:left-[100px] 3xl:top-[170px] 4xl:left-[200px] 4xl:top-[260px] z-[2] 4xl:h-96 3xl:h-80 2xl:h-72 xl:h-56 lg:h-44 md:h-36 h-36'
                    >
                        <img src="./store/HomeShoe.png" alt="Home Shoe" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-5 left-1/2 -translate-x-1/2' text='Shoe' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 4xl:left-[490px] 2xl:left-[340px] xl:left-[300px] lg:left-[120px] md:left-[100px] top-0 z-[1] 4xl:h-[420px] 3xl:h-[350px] 2xl:h-80 xl:h-64 lg:h-64 md:h-56 h-40'
                    >
                        <img src="./store/HomePerfume.png" alt="Home Perfume" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-5 left-1/2 -translate-x-1/2' text='Perfumes' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 4xl:left-[450px] 3xl:left-[380px] 2xl:left-[310px] xl:left-[265px] lg:left-[200px] md:left-[105px] left-[10px] bottom-0 h-32 md:h-40 lg:h-48 2xl:h-56 4xl:h-64 z-[3]'
                    >
                        <img src="./store/HomeBag.png" alt="Home Bag" className='h-full' />
                        <StoreHoverButton type='black' className='absolute bottom-2 left-1/2 -translate-x-1/2' text='Bags' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute left-[200px] md:left-[487px] lg:left-[657px] xl:left-[810px] 2xl:left-[1005px] 3xl:left-[1080px] 4xl:left-[1360px] bottom-[55px] 3xl:h-[400px] 4xl:h-[550px] 2xl:h-96 h-80 z-[3]'
                    >
                        <img src="./store/GreenDress1.jpg" alt="Home Dress" className='h-full min-w-full' />
                        <StoreHoverButton type='white' className='absolute bottom-5 left-1/2 -translate-x-1/2' text='Dress' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 4xl:left-[1160px] 3xl:left-[920px] 2xl:left-[850px] lg:left-[510px] md:left-[400px]  4xl:top-28 3xl:top-20 md:top-0 top-14 4xl:h-64 xl:h-40 lg:h-48 md:h-40 2xl:h-48 z-[3]'
                    >
                        <img src="./store/HomeJewellery.jpg" alt="Home Sunglasses" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-3 left-1/2 -translate-x-1/2' text='Jewellery' />
                    </div>

                    {/* <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 2xl:left-[850px] xl:left-[690px] top-14 xl:h-40 2xl:h-48 z-[3]'
                    >
                        <img src="./store/HomeJewellery.jpg" alt="Home Sunglasses" className='h-full' />
                        <StoreHoverButton type='white' className='2xl:py-2 2xl:px-6 py-1 px-5 absolute bottom-3 left-1/2 -translate-x-1/2' text='Jewellery' />
                    </div> */}




                    <div className='font-medium absolute left-[80px] md:left-[230px] lg:left-[350px] xl:left-[400px] 2xl:left-[460px] 3xl:left-[530px] 4xl:left-[605px] bottom-[80px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[7] text-primary-pink' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">S</div>
                    <div className='font-medium absolute left-[80px] md:left-[230px] lg:left-[350px] xl:left-[400px] 2xl:left-[460px] 3xl:left-[530px] 4xl:left-[605px] bottom-[80px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[6] text-white' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPIN</div>
                    <div className='font-medium absolute left-[80px] md:left-[230px] lg:left-[350px] xl:left-[400px] 2xl:left-[460px] 3xl:left-[530px] 4xl:left-[605px] bottom-[80px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[5] text-primary-bg' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPING</div>


                    <StoreHoverButton type='white' className="absolute bottom-3 left-1/2 4xl:left-[50%] 3xl:left-[60%] -translate-x-1/2" text='explore' />


                </div>

                {/* Special categories  */}
                <div className='bg-primary-bg h-96'>
                    <h1></h1>
                </div>
                <div className='bg-primary-bg h-96'></div>
            </div>


        </div >
    )
}

export default Fashion