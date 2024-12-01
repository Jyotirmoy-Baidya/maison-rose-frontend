import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const WhatnewCard = () => {

    const [hover, setHover] = useState(false);
    return (
        <div className='bg-gray-800 relative h-96 w-60 rounded-xl overflow-hidden transition-all duration-100' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {
                hover ?
                    <div className='absolute py-8 px-10 gap-20 flex flex-col justify-end h-full w-full bg-white bg-opacity-60'>
                        <div className='mx-auto text-4xl font-forum'>Party Wear</div>
                        <NavLink to='/fashion-store/partywear' className='w-full tracking-widest bg-white flex justify-center items-center font-forum h-fit py-3 hover:bg-primary-bg hover:text-primary-text'>
                            EXPLORE
                        </NavLink>
                    </div>
                    : <></>}
            <img src="./store/what-new1.jpg" alt="" className='h-full' />
        </div>
    )
}

export default WhatnewCard