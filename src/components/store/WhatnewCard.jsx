import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const WhatnewCard = ({ item }) => {

    const [hover, setHover] = useState(false);

    return (
        <div className='relative h-80 w-52 rounded-xl overflow-hidden transition-all duration-100' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {
                hover ?
                    <div className='absolute cursor-pointer py-8 gap-20 flex flex-col justify-end h-full w-full bg-white bg-opacity-60'>
                        <div className='mx-auto text-3xl font-forum text-center cursor-pointer'>{item?.Name}</div>
                        <NavLink to={`/fashion-store/${item?.Tag}`} className='w-8/12 mx-auto tracking-widest bg-white flex justify-center items-center font-forum h-fit py-3 hover:bg-primary-bg hover:text-primary-text'>
                            EXPLORE
                        </NavLink>
                    </div>
                    : <></>}
            <img src={item?.CoverImg[0]?.url} alt="" className='h-full w-full' />
        </div>
    )
}

export default WhatnewCard