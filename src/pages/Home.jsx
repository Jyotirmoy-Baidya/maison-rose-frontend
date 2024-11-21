import React from 'react'
import DesktopHeader from '../components/basics/DesktopHeader'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex p-4 h-screen w-screen max-h-screen min-h-screen bg-primary-bg'>
            <div className='flex w-full gap-4'>
                <div className='w-[77%] bg-primary-pink rounded-2xl'>Jyoti</div>
                <div className='w-[23%] h-full flex bg-primary-bg'>
                    <div className='flex flex-col gap-4 h-full w-full'>
                        <div className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                            <img src="./images/saloon.png" alt="salon"
                                // className='absolute -bottom-0 min-h-full xl:min-h-[110%] min-w-full'
                                className='object-cover bottom-0 absolute w-full'
                            />
                            <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                <div className='pr-2 text-white font-forum text-lg tracking-wide'>
                                    Saloon
                                </div>
                                <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white'>
                                    <img src="./icons/right-arrow.svg" alt="right-arrow" />
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden'>
                            <img src="./images/coffee.jpg" alt="cafe"
                                // className='absolute -bottom-0 min-h-full xl:min-h-[110%] min-w-full'
                                className='object-cover h-full absolute w-full'
                            />
                            <div className='absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg'>
                                <NavLink to='/cafe' className='pr-2 text-white font-forum text-lg tracking-wide'>
                                    Cafe
                                </NavLink>
                                <div className='h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white'>
                                    <img src="./icons/right-arrow.svg" alt="right-arrow" />
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full flex-grow-1 bg-orange-500 rounded-2xl'>kalu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home