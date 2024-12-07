import React, { useEffect, useRef, useState } from 'react'
import "../styles/salon.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import { prizes, salonCategories, salonMenu } from '../constants/salon'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Salon = () => {

    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);

    const scrollToPart = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

    };


    const RatingStars = ({ rating }) => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            if (rating >= starValue) {
                return <IoIosStar key={index} className="text-primary-text text-sm xl:text-base" />;
            } else if (rating >= starValue - 0.5) {
                return <IoIosStarHalf key={index} className="text-primary-text text-sm xl:text-base" />;
            } else {
                return <IoIosStarOutline key={index} className="text-primary-text text-sm xl:text-base" />;
            }
        });

        return <div className="flex space-x-1">{stars}</div>;
    };


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='flex flex-col bg-primary-bg overflow-y-scroll overflow-x-hidden no-scrollbar'>

            {/* mobile section */}
            <div className='xl:hidden flex  flex-col gap-3 p-3 w-screen content'>


                <div className='relative mt-16 h-46 w-full'>
                    <img src="./salon/salon.png" alt="" className='h-full w-full rounded-xl' />
                </div>

                <div className='text-5xl tracking-wider text-primary-text text-center font-forum'>Salon</div>


                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex gap-2 h-[40%]'>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 h-full border-2 border-primary-border rounded-xl p-7'>
                            <div className='text-primary-text font-forum text-3xl'>Salon Artistry <br />Redefined</div>
                            <div className='my-auto text-primary-text font-forum'>Where beauty artistry meets modern sophistication. Indulge in the finest salon experience, expertly crafted to elevate your style and confidence.</div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-2'>
                        <div className='text-primary-text text-2xl text-center tracking-wide font-forum awards'>Awards</div>
                        <div className='flex gap-3 justify-between h-[20%]'>
                            {prizes.slice(0, 3).map((prize, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 hover:bg-primary-text hover:bg-opacity-10 cursor-pointer border-2 border-primary-border rounded-xl" data-aos={`${index == 0 ? 'fade-right' : index == 1 ? 'fade-up' : 'fade-left'}`}
                                >
                                    <div className="flex flex-col h-full w-full gap-3 justify-center items-center px-1 py-4 xl:px-4">
                                        <RatingStars rating={prize.rating} />
                                        <div className="text-primary-text font-forum text-xs">
                                            {prize.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row gap-4 xl:h-[40%]'>
                        <div className='relative xl:w-1/2 w-full h-64 overflow-hidden rounded-xl' data-aos='fade-up'>
                            <img src="./salon/nailart.png" alt="" className='absolute bottom-0 w-full' />
                        </div>
                        <div className='flex flex-col border-2 border-primary-border rounded-xl p-7 w-full  xl:w-1/2' data-aos='zoom-in-out'>
                            <div className='w-full text-3xl font-forum items-center gap-2 text-primary-text uppercase justify-center flex'>
                                <Menuarrow />
                                Our Story
                                <Menuarrow2 />
                            </div>
                            <div className='text-primary-text font-forum w-full my-auto xl:text-sm 3xl:text-base '>
                                Founded with a passion for beauty and elegance, Maison Rose Lifestyle began its journey in the heart of the city. Over the years, it has transformed into a luxurious haven for those seeking refined self-care, celebrated for its masterful artistry and dedication to redefining the salon experience.
                            </div>
                        </div>
                    </div>


                </div>




                {/* social media connect  */}
                <div className='flex justify-center text-primary-text bg-[#181818] rounded-xl py-3 gap-3 border-2 border-primary-border w-full'>
                    <a href='https://www.instagram.com/maison.rose.lifestyle?igsh=MXJlMGpqZTRtOGU2ZA==' target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                    </a>
                    <a href='https://www.facebook.com/maison.rose.lifestyle?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                    </a>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaXTwitter /></div>
                </div>
            </div>



            {/* desktop section */}
            <div className='xl:block hidden h-screen p-6 bg-primary-bg cafe-bg-img '>
                <div className='flex h-full gap-6'>
                    <div className='w-full h-full rounded-xl'>
                        <div className='relative h-full w-full rounded-xl overflow-hidden'>
                            <img src="./salon/salon.png" alt="salon-pic" className='absolute bottom-0 min-h-full w-full image-bottom' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex gap-2 h-[40%]'>
                            <div className='w-1/2 flex flex-col h-full border-2 border-primary-border rounded-xl p-7'>
                                <div className='text-primary-text font-forum text-3xl'>Salon Artistry <br />Redefined</div>
                                <div className='my-auto text-primary-text font-forum'>Where beauty artistry meets modern sophistication. Indulge in the finest salon experience, expertly crafted to elevate your style and confidence.</div>
                            </div>
                            <div className='relative w-1/2 h-full rounded-xl overflow-hidden'>
                                <img src="./salon/hairdresser.png" alt="hairdresser" className='absolute -bottom-10' />
                            </div>
                        </div>

                        <div className='flex gap-4 h-[20%]'>
                            {prizes.slice(0, 3).map((prize, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 hover:bg-primary-text hover:bg-opacity-10 cursor-pointer border-2 border-primary-border rounded-xl"
                                >
                                    <div className="flex flex-col h-full w-full gap-3 justify-center items-center p-4">
                                        <RatingStars rating={prize.rating} />
                                        <div className="text-primary-text font-forum text-xl">
                                            {prize.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-4 h-[40%]'>
                            <div className='relative w-1/2 overflow-hidden rounded-xl'>
                                <img src="./salon/nailart.png" alt="" className='w-full absolute bottom-0' />
                            </div>
                            <div className='flex flex-col border-2 border-primary-border rounded-xl p-7  w-1/2'>
                                <div className='w-full text-3xl font-forum items-center gap-2 text-primary-text uppercase justify-center flex'>
                                    <Menuarrow />
                                    Our Story
                                    <Menuarrow2 />
                                </div>
                                <div className='text-primary-text font-forum w-full my-auto xl:text-sm 3xl:text-base '>
                                    Founded with a passion for beauty and elegance, Maison Rose Lifestyle began its journey in the heart of the city. Over the years, it has transformed into a luxurious haven for those seeking refined self-care, celebrated for its masterful artistry and dedication to redefining the salon experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <hr className='mx-auto w-[90%] bg-primary-border' /> */}

            <div className='flex bg-primary-bg' ref={p1}>
                <div className='flex flex-col gap-8 xl:gap-6 w-full border-2 border-primary-border m-3 xl:m-6 rounded-xl py-6 xl:py-6 px-6 xl:px-12'>
                    <div className='flex w-full justify-center font-forum items-center gap-3 xl:gap-4 text-3xl xl:text-5xl tracking-widest text-primary-text uppercase'>
                        <Menuarrow />
                        SERVICES
                        <Menuarrow2 />
                    </div>

                    {/* Category  */}
                    {salonMenu.map((menu, index) => (
                        <div
                            key={index}
                            className={`flex flex-col xl:flex-row gap-8 xl:gap-12 w-full mb-10 xl:mb-8 ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
                                }`}
                        >
                            {/* Image Section */}
                            <div className="flex w-full xl:w-1/3">
                                <div className="w-full h-56 xl:h-72 rounded-xl overflow-hidden">
                                    <img
                                        src={
                                            salonCategories.find((cat) => cat.category === menu.category)
                                                ?.imgUrl || './default-image.png'
                                        }
                                        alt={menu.category}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col w-full xl:w-2/3">
                                {/* Category Header */}
                                <div className="text-primary-text text-xl xl:text-xl uppercase items-center font-forum flex gap-2 justify-center w-full mb-6 xl:mb-4 tracking-wider head">
                                    <Menuarrow />
                                    {menu.category}
                                    <Menuarrow2 />
                                </div>

                                {/* Menu Items */}
                                <div className="grid gap-x-4 xl:gap-x-10 gap-y-6 xl:gap-y-5 mt-2 xl:mt-4 grid-cols-1 xl:grid-cols-2 w-full">
                                    {menu.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="text-primary-text flex flex-col w-full font-forum border-b xl:border-b-0 border-primary-border/20 pb-4 xl:pb-0"
                                        >
                                            <div className="w-full justify-between flex mb-2">
                                                <div className="text-lg xl:text-lg tracking-wider uppercase">{item.name}</div>
                                                <div className="text-lg xl:text-lg font-medium">₹ {item.price}</div>
                                            </div>
                                            <div className="text-sm xl:text-sm description text-primary-text/80 leading-relaxed">{item.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Salon