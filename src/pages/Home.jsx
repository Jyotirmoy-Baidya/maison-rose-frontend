import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import DesktopHeader from '../components/basics/DesktopHeader'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImQuotesLeft } from 'react-icons/im'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ParallaxText from '../components/basics/ParallaxText'

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='flex flex-col w-screen overflow-x-hidden bg-primary-bg'>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Maison Rose Lifestyle – Café, Restaurant, and Fashion in New Town Kolkata</title>
                <meta name="description" content="Experience Maison Rose Lifestyle – a stylish café and restaurant in New Town Kolkata with a Thai-inspired fashion store. Perfect for dining and lifestyle shopping." />
                <meta name="keywords" content="Maison Rose Lifestyle, New Town Kolkata cafe, Thai fashion store, Axis Mall restaurant" />
                <link rel="canonical" href="https://maisonroselifestyle.com" />
            </Helmet>

            {/* mobile nav  */}
            <div className='xl:hidden z-10 flex w-full fixed top-3 left-0 px-3'>
                <div className='z-10 h-14 p-3 top-0 rounded-xl navbar w-full mb-3 bg-[#18181890]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                        <div className='pl-2 text-xl text-primary-text uppercase font-forum tracking-wide'>Maison Rose Lifestyle</div>
                    </div>
                </div>
            </div>

            {/* Navbar   */}
            <div className='hidden xl:flex  fixed z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#181818]'>
                <div className='w-full h-full flex items-center'>
                    <div className='border-primary-border border-[1px] p-2 rounded-lg hover:bg-primary-text hover:text-primary-bg text-primary-text'><RxHamburgerMenu className='' /></div>
                    <div className='pl-2 text-xl text-primary-text uppercase font-forum tracking-wide'>Maison Rose Lifestyle</div>
                    <div className='flex items-center text-primary-text gap-4 ml-12 tracking-wide font-sans uppercase text-sm'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <div className='border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink'>
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden xl:flex p-4 h-screen max-h-screen min-h-screen bg-primary-bg'>
                <div className='flex w-full gap-4'>
                    <div className='w-[77%] font-forum bg-primary-bg relative flex overflow-hidden rounded-2xl'>
                        <div className='relative w-[22%]'>
                            <div className='tracking-wider absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-text'>
                                MAI<br />
                                LIFE
                            </div>
                        </div>
                        <div className='w-[78%] relative bg-primary-pink overflow-hidden'>
                            <img
                                src="./fashion/main.png"
                                alt="Maison Rose Lifestyle - Café and Fashion Store in New Town Kolkata"
                                className='min-w-full min-h-full'
                            />
                            <div className='tracking-wider -left-[170px] 2xl:-left-[227px] absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-bg'>
                                MAISON ROSE<br />LIFESTYLE
                            </div>
                        </div>
                    </div>
                    <div className='w-[23%] h-full flex bg-primary-bg'>
                        <div className='flex flex-col gap-4 h-full w-full'>
                            <NavLink to='/saloon' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                                <img
                                    src="./images/saloon.png"
                                    alt="Luxury Salon Services at Maison Rose Lifestyle"
                                    className='object-cover bottom-0 absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                                    loading="lazy"
                                />
                                <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                    <div className='pr-2 text-white font-forum text-lg tracking-wide'>Salon</div>
                                    <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to='/cafe' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                                <img
                                    src="./images/coffee.jpg"
                                    alt="Gourmet Café Experience in New Town Kolkata"
                                    className='object-cover h-full absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                                    loading="lazy"
                                />
                                <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                    <div className='pr-2 text-white font-forum text-lg tracking-wide'>Café</div>
                                    <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to='/fashion' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                                <img
                                    src="./fashion/home.png"
                                    alt="Thai-Inspired Fashion Collection in Kolkata"
                                    className='absolute top-0 w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                                    loading="lazy"
                                />
                                <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                    <div className='pr-2 text-white font-forum text-lg tracking-wide'>Fashion</div>
                                    <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='flex flex-col gap-3 mt-16 xl:hidden p-3'>
                <div className='w-full h-80 font-forum bg-primary-bg relative flex overflow-hidden rounded-lg'>
                    <div className='relative w-[22%]'>
                        <div className='tracking-wider absolute text-3xl sm:text-4xl md:text-5xl lg:text-5xl bottom-8 right-0 text-primary-text'>
                            MAI<br />
                            LIFE
                        </div>
                    </div>
                    <div className='w-[78%] relative bg-primary-pink overflow-hidden'>
                        <img
                            src="./fashion/main.png"
                            alt="Maison Rose Lifestyle - Café and Fashion Store in New Town Kolkata"
                            className='min-w-full min-h-full'
                        />
                        <div className='tracking-wider -left-[53px] absolute text-3xl  bottom-8 right-0 text-primary-bg'>
                            MAISON ROSE<br />LIFESTYLE
                        </div>
                    </div>
                </div>

                <div className='flex flex-col border-2 border-primary-border p-3'>
                    <h1 className='text-4xl text-primary-text font-forum text-center'>Welcome to Maison Rose Lifestyle</h1>
                    <div className='text-primary-text p-3 font-forum text-sm'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-end gap-2 h-full'>
                                    <div className='text-4xl mb-1'><ImQuotesLeft /></div>
                                    <div className='text-xl'>Newtown's Premier Lifestyle Destination</div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='w-7 ml-6 border-l-2'></div>

                                    <div className='text-[#EFE7D295]'>
                                        Welcome to Maison Rose Lifestyle, Kolkata's chic destination combining a delightful café
                                        and restaurant experience with a unique Thai-inspired lifestyle and fashion store. Located
                                        in New Town near Axis Mall, we offer the perfect blend of culinary excellence and
                                        trendsetting fashion. Discover handcrafted coffees, gourmet meals, and an exclusive
                                        collection of Thai fashion, floral dresses, and Korean styles.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <ParallaxText baseVelocity={-5}>Experience Luxury</ParallaxText>
                    <ParallaxText baseVelocity={5}>Fashion & Dining</ParallaxText>
                </section>

                {/* mobile to section   */}
                <div className='flex flex-col gap-2'>
                    <NavLink to='/saloon' className='relative h-28 w-1/2 bg-primary-bg rounded-lg rounded-br-none overflow-hidden' data-aos='fade-right'>
                        <img
                            src="./images/saloon.png"
                            alt="Luxury Salon Services at Maison Rose Lifestyle"
                            className='object-cover bottom-0 absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                            loading="lazy"
                        />
                        <div className='absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg'>
                            <div className='pr-2 text-white font-forum text-sm tracking-wide'>Salon</div>
                            <div className='h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </NavLink>
                    <div className='grid grid-cols-2'>
                        <NavLink to='/cafe' className=' col-start-2 h-28 w-full  flex-grow-1 bg-primary-bg rounded-lg rounded-br-none overflow-hidden' data-aos='fade-left'>
                            <img
                                src="./images/coffee.jpg"
                                alt="Gourmet Café Experience in New Town Kolkata"
                                className='object-cover h-full absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                                loading="lazy"
                            />
                            <div className='absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg'>
                                <div className='pr-2 text-white font-forum text-sm tracking-wide'>Café</div>
                                <div className='h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <NavLink to='/fashion' className='h-28 w-1/2 relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden' data-aos='fade-right'>
                        <img
                            src="./fashion/home.png"
                            alt="Thai-Inspired Fashion Collection in Kolkata"
                            className='absolute top-0 w-full transition duration-300 ease-in-out transform hover:scale-[103%]'
                            loading="lazy"
                        />
                        <div className='absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg'>
                            <div className='pr-2 text-white font-forum text-sm tracking-wide'>Fashion</div>
                            <div className='h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>

            {/* About Section */}
            <div className='flex flex-col mt-20 px-4 max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-forum text-primary-text mb-6'>Discover Maison Rose Lifestyle</h2>
                <div className='text-primary-text font-forum'>
                    <p className='mb-4'>
                        At Maison Rose Lifestyle, we believe in blending experiences. Our café and restaurant offer a
                        curated menu of global and local delicacies in a cozy, stylish ambiance. Alongside, our lifestyle
                        store showcases imported Thai fashion, floral dresses, Korean styles, and unique accessories,
                        making us a one-stop destination for foodies and fashionistas alike.
                    </p>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <h3 className='text-xl mb-3'>A Café That Redefines Kolkata Dining</h3>
                            <p>Enjoy handcrafted coffees, gourmet meals, and desserts in a serene setting that's perfect
                                for dates, celebrations, or casual hangouts.</p>
                        </div>
                        <div>
                            <h3 className='text-xl mb-3'>A Fashion Store That Inspires</h3>
                            <p>Explore our exclusive collections of birthday dresses, vintage fashion, and cocktail dresses,
                                all inspired by the latest global trends.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Proof */}
            <section className='py-12 px-4'>
                <ParallaxText baseVelocity={-5}>Experience Luxury</ParallaxText>
                <ParallaxText baseVelocity={5}>Fashion & Dining</ParallaxText>
            </section>
        </div>
    )
}

export default Home