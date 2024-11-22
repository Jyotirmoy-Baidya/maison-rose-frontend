import React from 'react'
import "../styles/saloon.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import { saloonCategories, saloonMenu } from '../constants/saloon'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Saloon = () => {
    return (
        <div className='h-screen overflow-scroll no-scrollbar bg-img-saloon'>
            <div className='xl:hidden flex flex-col gap-3 p-3 w-screen content'>
                {/* mobiel nav  */}
                <div className='xl:hidden z-10 block sticky top-3'>
                    <div className='z-10 h-14 p-3 top-0 rounded-xl navbar bg-[#18181890]'>
                        <div className='w-full h-full flex items-center'>
                            <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                            <div className='pl-2 text-xl text-primary-text uppercase font-forum tracking-wide'>Maison Rose Lifestyle</div>
                        </div>
                    </div>
                </div>

                {/* <div className='flex w-full'>
                    <div className='w-full font-forum flex flex-col p-7 gap-20 rounded-xl bg-primary-bg cafe-bg-img '>
                        <h1 className='text-primary-text text-xl uppercase'>SALON ARTISTRY <br /> REDEFINED</h1>
                        <div className=''>
                            <p className='text-primary-text'>Where beauty artistry meets modern sophistication. Indulge in the finest salon experience, expertly crafted to elevate your style and confidence.
                            </p>
                        </div>
                    </div>
                </div> */}



                <h1 className='text-4xl text-primary-bg font-forum'>SALOON MENU</h1>
                <div className='px-5 bg-primary-bg rounded-xl saloon-price cafe-bg-img'>
                    <div className='flex flex-col items-center w-full overflow-scroll no-scrollbar'>
                        {saloonCategories.map((category, i2) => {
                            const menuCategory = saloonMenu.find((menu) => menu.category === category.category);
                            if (menuCategory)
                                return (
                                    <React.Fragment key={i2}>
                                        {/* Category Header */}
                                        <div className="flex justify-center gap-2 xl:mt-6 mt-4 item-heading">
                                            <Menuarrow />
                                            <h1 className="font-forum text-xl text-primary-text tracking-widest">
                                                {menuCategory.category.toUpperCase()}
                                            </h1>
                                            <Menuarrow2 />
                                        </div>

                                        {/* Category Items */}
                                        <div className="flex flex-col gap-3 w-full mt-1">
                                            {menuCategory.items.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex gap-4 w-full items-list"
                                                    onClick={() => {
                                                        setSelectedItem(item.imageurl);
                                                        setSelectedItemName(item.name);
                                                    }}
                                                >
                                                    {/* Item Image */}
                                                    <div className="xl:h-[80px] xl:w-[120px] h-[40px] w-[70px] rounded-xl overflow-hidden">
                                                        <img
                                                            src={item.imageurl || `./menu/${menuCategory.category}/${item.name.replace(/ /g, '-')}.png`}
                                                            alt={item.name.toLowerCase().replace(/ /g, '-')}
                                                            className="h-full w-full"
                                                        />
                                                    </div>

                                                    {/* Item Details */}
                                                    <div className="flex flex-col flex-grow justify-center h-full">
                                                        <div className="flex justify-between">
                                                            <div className="item-name text-primary-text font-forum uppercase tracking-wider xl:text-base text-sm">
                                                                {item.name}
                                                            </div>
                                                            <div className="font-forum text-primary-text xl:text-lg text-sm tracking-wide price">
                                                                ₹ {item.price}
                                                            </div>
                                                        </div>
                                                        <div className="xl:block hidden text-xs tracking-wider text-primary-text menu-item-description">
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
                {/* social media connect  */}
                <div className='flex justify-center text-primary-text bg-[#181818] rounded-xl py-3 gap-3 border-2 border-primary-border w-full'>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaXTwitter /></div>
                </div>
            </div>
        </div >
    )
}

export default Saloon