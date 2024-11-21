import React, { useState } from 'react'
import '../styles/cafe.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'
import { cafeCategories, cafeMenu } from '../constants/menu'

const Cafe = () => {
    const [selectedItem, setSelectedItem] = useState('');
    return (
        <div className='flex gap-6 p-6 bg-primary-bg h-screen min-h-screen w-screen cafe-bg-img'>
            <div className='relative w-1/2 text-white bg-black rounded-2xl'>
                <div className='absolute z-10 border border-primary-border w-[500px] h-14 p-2 top-10 left-10 rounded-xl navbar bg-primary-bg'>
                    <div className='w-full h-full flex items-center'>
                        <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                        <div className='pl-2 uppercase tracking-wide'>Maison Rose Lifestyle</div>
                    </div>
                </div>
                <div className='pl-10 pr-28 w-full mt-28'>
                    <div className='w-full rounded-xl overflow-hidden'>
                        <img src="./menu/Pizza/Veg Pizza Mini.png" alt="selected item" className='w-full' />
                    </div>
                    <div className='text-9xl font-extrabold tracking-widest'>
                        CAFE
                    </div>
                </div>
                <div className='absolute rounded-ss-2xl p-3 text-white bottom-0 right-0 bg-primary-bg links'>
                    <div className='w-full flex items-center gap-2'>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaXTwitter /></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-1/2 h-full'>
                {/* menu list  */}
                <div className='border-2 h-full  px-20 py-5 border-primary-border rounded-xl'>
                    <div className='py-2 h-14 flex justify-center menu-cat'>
                        <div className='flex gap-2'>
                            <div className='py-2 px-3 text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90'>PIZZA</div>
                            <div className='py-2 px-3 text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90'>SNACKS</div>
                            <div className='py-2 px-3  text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90'>COMBOS</div>
                        </div>
                    </div>
                    <div className='flex flex-col h-[90%] items-center mt-2 w-full overflow-scroll no-scrollbar'>

                        {cafeCategories.map((category) => {
                            const menuCategory = cafeMenu.find((menu) => menu.category == category.category);
                            if (menuCategory)
                                return (
                                    <React.Fragment key={category.category}>
                                        {/* Category Header */}
                                        <div className="flex justify-center gap-2 mt-6 item-heading">
                                            <Menuarrow />
                                            <h1 className="font-forum text-xl text-primary-text tracking-widest">{menuCategory.category.toUpperCase()}</h1>
                                            <Menuarrow2 />
                                        </div>

                                        {/* Category Items */}
                                        <div className="flex flex-col gap-3 w-full mt-1">
                                            {menuCategory.items.map((item) => (
                                                <div key={item.name} className="flex gap-4 w-full items-list">
                                                    {/* Item Image */}
                                                    <div className="h-[80px] w-[120px] rounded-xl overflow-hidden">
                                                        <img
                                                            src={item.imageurl || `./menu/${menuCategory.category}/${item.name.replace(/ /g, '-')}.png`}
                                                            alt={item.name.toLowerCase().replace(/ /g, '-')}
                                                            className="h-[80px] w-[120px]"
                                                        />
                                                    </div>

                                                    {/* Item Details */}
                                                    <div className="flex flex-col flex-grow justify-center h-full">
                                                        <div className="flex justify-between">
                                                            <div className="item-name text-primary-text font-forum uppercase tracking-wider">{item.name}</div>
                                                            <div className="font-forum text-primary-text text-lg tracking-wide price">₹ {item.price}</div>
                                                        </div>
                                                        <div className="text-xs tracking-wider text-primary-text menu-item-description">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </React.Fragment>
                                );
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cafe