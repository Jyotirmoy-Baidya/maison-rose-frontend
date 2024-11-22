import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'
import { schedule } from '../constants/aboutus'


const text = () => {
    return (
        <div className="rounded-3xl overflow-hidden h-[300px] bg-zinc-900">


            <div className='z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#18181890]'>
                <div className='w-full h-full flex items-center'>
                    <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                    <div className='pl-2 text-xl uppercase font-forum tracking-wide text-primary-text'>Maison Rose Lifestyle'<span className='lowercase'>s</span> Cafe</div>

                </div>
            </div>
        </div>
    )
}
const About = () => {

    const latitude = 22.635068880827603;
    const longitude = 88.46552255397063;
    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${latitude},${longitude}&zoom=14`;
    const redirectUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const handleMapClick = () => {
        window.open(redirectUrl, "_blank");
    };

    return (

        <div className='bg-primary-bg h-full'>

            {/* Mobiel Layout  */}
            <div className='xl:hidden flex xl:flex-row flex-col xl:gap-6 gap-3 xl:p-6 p-3 bg-primary-bg xl:h-screen xl:min-h-screen w-screen cafe-bg-img'>
                <div className='xl:hidden z-10 block sticky top-3'>
                    <div className='z-10 h-14 p-3 top-0 rounded-xl navbar bg-[#18181890]'>
                        <div className='w-full h-full flex items-center'>
                            <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
                            <div className='pl-2 text-xl text-primary-text uppercase font-forum tracking-wide'>Maison Rose Lifestyle</div>
                        </div>
                    </div>
                </div>
                <div className='relative h-46 w-full'>
                    <img src="./images/coffeeMug.png" alt="" className='h-full w-full rounded-xl' />
                    <div className='absolute bottom-2 left-2 text-5xl tracking-wider text-white font-forum'>ABOUT US</div>
                </div>

                <div className='w-full flex flex-col rounded-xl py-5 px-5 border-2 border-primary-border overflow-hidden'>
                    <div className='flex w-full text-primary-text font-forum tracking-wide justify-center items-center gap-2 py-2 whitespace-nowrap'>
                        <Menuarrow />
                        <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                            OPENING HOURS
                        </h2>
                        <Menuarrow2 />
                    </div>

                    {/* timings  */}
                    <div className='flex flex-col px-4 mt-2 gap-4 h-full overflow-scroll no-scrollbar'>
                        {
                            schedule.map((ele, i) => (
                                <div className='flex gap-4 text-primary-text font-forum'>
                                    <div className='w-fit'>{ele.day}</div>
                                    <div className='overflow-hidden tracking-widest'>..............................................</div>
                                    <div className='whitespace-nowrap'>{ele.hours}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* contact us  */}
                <div className='flex flex-col w-full rounded-xl py-5 px-5 border-2 border-primary-border'>
                    <div className='flex w-full justify-center items-center gap-2'>
                        <Menuarrow />
                        <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                            GET IN TOUCH
                        </h2>
                        <Menuarrow2 />
                    </div>
                    <div className="flex flex-col h-full w-full gap-2 mt-10">
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className=" tracking-widest">ADDRESS</h3>
                            <p className="">23 Greenfield Avenue,<br />Prague 120 00</p>
                        </div>
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className="tracking-widest">PHONE</h3>
                            <p className="">+9085533510</p>
                        </div>
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className="tracking-widest">EMAIL</h3>
                            <p className="">email@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Map  */}
                <div className='w-full rounded-xl overflow-hidden border-2 border-primary-border' >
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7028566375777!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8cf28b9b3%3A0x7e778da388d74453!2sYour%20Location!5e0!3m2!1sen!2sus!4v1647095757123!5m2!1sen!2sus`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* social media connect  */}
                <div className='flex justify-center text-primary-text rounded-xl py-3 gap-3 border-2 border-primary-border w-full'>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaXTwitter /></div>
                </div>

            </div>

            <div className='hidden xl:block xl:h-screen xl:w-screen bg-primary-bg cafe-bg-img'>
                <div className='hidden xl:grid grid-cols-4 xl:p-6 xl:gap-6 h-screen w-full'>
                    {/* Navbar  */}
                    <div className='xl:block hidden absolute z-10  h-14 p-3 top-10 left-10 rounded-xl navbar bg-[#181818]'>
                        <div className='w-full h-full flex items-center'>
                            <div className='border-primary-border border-[1px] p-2 rounded-lg'><RxHamburgerMenu className='text-white' /></div>
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
                    <div className='relative col-span-2 h-full overflow-hidden  rounded-2xl'>
                        <img src="./contact/aboutus.png" alt="Contact Img" className='z-[1]  absolute bottom-0' />




                        <div className='absolute bottom-7 left-7 font-forum text-white z-[2] text-8xl'>
                            ABOUT US
                        </div>

                        {/* Links to social media  */}
                        <div className='absolute z-[4] rounded-ss-2xl p-3 text-white bottom-0 right-0 bg-primary-bg links'>
                            <div className='w-full flex items-center gap-2'>
                                <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                                <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                                <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaXTwitter /></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col col-span-2 h-full w-full gap-4'>
                        <div className='h-1/2 w-full flex gap-4'>
                            <div className='w-1/2 flex flex-col rounded-xl py-5 px-5 border-2 border-primary-border overflow-hidden'>
                                <div className='flex w-full text-primary-text font-forum tracking-wide justify-center items-center gap-2 py-2 whitespace-nowrap'>
                                    <Menuarrow />
                                    <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                                        OPENING HOURS
                                    </h2>
                                    <Menuarrow2 />
                                </div>

                                {/* timings  */}
                                <div className='flex flex-col px-4 mt-2 justify-between h-full overflow-scroll no-scrollbar'>
                                    {
                                        schedule.map((ele, i) => (
                                            <div className='flex gap-4 text-primary-text font-forum'>
                                                <div className='w-fit'>{ele.day}</div>
                                                <div className='overflow-hidden tracking-widest'>..............................................</div>
                                                <div className='whitespace-nowrap'>{ele.hours}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* images section  */}
                            <div className='w-1/2 grid grid-cols-2 grid-rows-2 gap-2 rounded-xl'>
                                <div className='overflow-hidden rounded-xl'>
                                    <img src="./images/coffee.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1/2 w-full flex gap-4'>
                            <div className='w-1/2 rounded-xl overflow-hidden border-2 border-primary-border' >
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7028566375777!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8cf28b9b3%3A0x7e778da388d74453!2sYour%20Location!5e0!3m2!1sen!2sus!4v1647095757123!5m2!1sen!2sus`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Contact Us   */}
                            <div className='flex flex-col w-1/2 rounded-xl py-5 px-5 border-2 border-primary-border'>
                                <div className='flex w-full justify-center items-center gap-2'>
                                    <Menuarrow />
                                    <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                                        GET IN TOUCH
                                    </h2>
                                    <Menuarrow2 />
                                </div>
                                <div className="flex flex-col h-full w-full gap-2 mt-10">
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className=" tracking-widest">ADDRESS</h3>
                                        <p className="">23 Greenfield Avenue,<br />Prague 120 00</p>
                                    </div>
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className="tracking-widest">PHONE</h3>
                                        <p className="">+9085533510</p>
                                    </div>
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className="tracking-widest">EMAIL</h3>
                                        <p className="">email@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default About