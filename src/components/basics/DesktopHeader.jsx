import React from 'react'
import { NavLink } from 'react-router-dom'

const DesktopHeader = () => {
    return (
        <div className='h-16 px-3 py-5 bg-primary-pink'>
            <div className='flex w-full h-full'>
                <div className='header-logo'>
                    MS
                </div>
                <div className='item-list'>

                </div>
                <div className='h-full flex items-center action-buttons'>
                    <div className='flex items-center'>
                        <img src="./icons/shopping-cart.svg" alt="cart" />
                    </div>
                    <div className='h-full profile-pic h-10 w-10 bg-slate-300'>
                        <NavLink to='/account' className=''>
                            <img src="./icons/profile-pic.svg" alt="profile" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader