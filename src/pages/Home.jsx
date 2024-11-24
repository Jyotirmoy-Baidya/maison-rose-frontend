import React from 'react'
import DesktopHeader from '../components/basics/DesktopHeader'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

const Home = () => {
    return (
        <div className='flex p-4 h-screen w-screen max-h-screen min-h-screen bg-primary-bg'>

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
            <div className='hidden xl:flex absolute z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#181818]'>
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


            <div className='flex w-full gap-4'>
                <div className='w-[77%] font-forum bg-primary-bg relative flex overflow-hidden rounded-2xl'>
                    <div className='relative w-[22%]'>
                        <div className='tracking-wider absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-text'>
                            MAI<br />
                            LIFE
                        </div>
                    </div>
                    <div className='w-[78%] relative bg-primary-pink overflow-hidden'>
                        <img src="./fashion/main.png" alt="" className='min-w-full min-h-full' />
                        <div className='tracking-wider -left-[170px] 2xl:-left-[227px] absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-bg'>
                            MAISON ROSE
                            <br />
                            LIFESTYLE
                        </div>
                    </div>
                </div>
                <div className='w-[23%] h-full flex bg-primary-bg'>
                    <div className='flex flex-col gap-4 h-full w-full'>
                        <NavLink to='/saloon' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                            <img src="./images/saloon.png" alt="salon"
                                // className='absolute -bottom-0 min-h-full xl:min-h-[110%] min-w-full'
                                className='object-cover bottom-0 absolute w-full  transition duration-300 ease-in-out 
              transform hover:scale-[103%]'
                            />
                            <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                <div className='pr-2 text-white font-forum text-lg tracking-wide'>
                                    Saloon
                                </div>
                                <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/cafe' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                            <img src="./images/coffee.jpg" alt="cafe"
                                // className='absolute -bottom-0 min-h-full xl:min-h-[110%] min-w-full'
                                className='object-cover h-full absolute w-full transition duration-300 ease-in-out 
              transform hover:scale-[103%]'
                            />
                            <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                <div className='pr-2 text-white font-forum text-lg tracking-wide'>
                                    Cafe
                                </div>
                                <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/fasion' className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                            <img src="./fashion/home.png" alt="cafe"
                                // className='absolute -bottom-0 min-h-full xl:min-h-[110%] min-w-full'
                                className=' absolute top-0 w-full transition duration-300 ease-in-out 
                                transform hover:scale-[103%]'
                            />
                            <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                <div className='pr-2 text-white font-forum text-lg tracking-wide'>
                                    Fashion
                                </div>
                                <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home