import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const WhatnewCard = ({ item }) => {
    console.log(item?.CoverImg && item?.CoverImg[0]);
    const [hover, setHover] = useState(false);

    return (
        <div className='relative h-48 w-32 xl:h-80 xl:w-52 rounded-xl overflow-hidden transition-all duration-100' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {
                hover ?
                    <div className='hidden absolute cursor-pointer py-8 gap-20 xl:flex flex-col justify-end h-full w-full bg-white bg-opacity-60'>
                        <div className='mx-auto text-3xl font-forum text-center cursor-pointer'>{item?.Name}</div>
                        <NavLink to={`/fashion-store/new/${item?.Tag}`} className='w-8/12 mx-auto tracking-widest bg-white flex justify-center items-center font-forum h-fit py-3 hover:bg-primary-bg hover:text-primary-text'>
                            EXPLORE
                        </NavLink>
                    </div>
                    : <></>
            }
            <div className='flex absolute bottom-0 cursor-pointer xl:hidden flex-col justify-end h-[40%] w-full bg-white bg-opacity-50'>
                <div className='mx-auto text-lg font-forum text-center cursor-pointer'>{item?.Name}</div>
                <NavLink to={`/fashion-store/new/${item?.Tag}`} className='w-8/12 mx-auto bg-white flex justify-center text-xs items-center font-forum h-fit py-1 hover:bg-primary-bg hover:text-primary-text mb-3'>
                    EXPLORE
                </NavLink>
            </div>
            {
                item?.CoverImg && item?.CoverImg[0] &&
                <img src={item?.CoverImg[0].url} alt="Img" className='h-full w-full' />
            }
        </div>
        // <></>
    )
}

export default WhatnewCard