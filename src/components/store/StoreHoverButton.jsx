import React from 'react'
import { NavLink } from 'react-router-dom'

const StoreHoverButton = ({ type, text, link, className }) => {
    return (
        <NavLink to={link} className={`py-2 px-6  uppercase text-sm 2xl:text-base bg-transparent ${type == 'white' ? 'text-white border-white hover:text-primary-bg hover:bg-white' : 'text-black border-black hover:bg-black hover:text-white'} border font-medium transition duration-200 ${className}`}>
            {text}
        </NavLink>
    )
}

export default StoreHoverButton