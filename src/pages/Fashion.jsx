import React, { useEffect, useRef, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import WhatnewCard from '../components/store/WhatnewCard'
import ParallaxText from '../components/basics/ParallaxText'

import Aos from 'aos'
import 'aos/dist/aos.css'
import StoreHoverButton from '../components/store/StoreHoverButton'
import DesktopStoreNavbar from '../components/basics/DesktopNavbar'


import Airtable from 'airtable'



import { ClimbingBoxLoader } from 'react-spinners'
import { override } from '../constants/basic'
import { fetchWhatsNewRecords } from '../api/AirtableApis'
import { useNavigate } from 'react-router-dom'



const Fashion = () => {

    const [whatsNewLoading, setWhatsNewLoading] = useState(false);

    useEffect(() => {
        Aos.init();
    }, [])

    const [whatsNew, setWhatsNew] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getRecords = async () => {
            setWhatsNewLoading(true);
            try {
                const data = await fetchWhatsNewRecords("What's New");
                setWhatsNew(data);
                console.log(data);
            } catch (error) {
                console.log('Error');
            } finally {
                setWhatsNewLoading(false);
            }
        };

        getRecords();
    }, []);

    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);

    const scrollToPart = (ref) => {
        const element = ref.current;
        if (element) {
            // Scroll to the element with an offset of 10px
            window.scrollTo({
                top: element.offsetTop - 200, // Adjust 10px above the element
                behavior: 'smooth',
            });
        }

    };
    const navigate = useNavigate();

    return (
        <div className='min-h-screen p-6 flex flex-col overflow-x-hidden bg-primary-bg relative'>
            {/* Navbar */}
            <DesktopStoreNavbar scrollToPart={scrollToPart} p1={p1} />

            <div className='xl:flex items-center gap-2 w-96 hidden fixed z-10 p-3 top-10 right-10 rounded-xl searchbar '>
                <div className='uppercase h-full w-full'>
                    <input type="text" className='w-full bg-[#18181895] backdrop-blur-sm  rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='text-xl text-primary-text' onClick={() => { if (search != '') navigate(`/fashion-store/s/${search}`) }}><IoSearchSharp /></div>
            </div>
            <div className='mt-32'>Jyoti</div>

            <div className='flex-col flex w-full'>
                <h2 className='text-primary-text text-5xl text-center font-forum'>What's New</h2>

                <div className='flex mt-8 px-8 overflow-x-scroll no-scrollbar' ref={p1}>
                    {
                        whatsNewLoading ?
                            <div className='w-full flex justify-center'>
                                <ClimbingBoxLoader
                                    color={'#EFE7D2'}
                                    loading={whatsNewLoading}
                                    cssOverride={override}
                                    size={'2vh'}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </div> :
                            <div className='flex gap-5 justify-center' >
                                {
                                    whatsNew?.map((item, index) => (

                                        <React.Fragment key={index}>
                                            <WhatnewCard key={index} item={item.fields} />
                                        </React.Fragment>

                                    ))
                                }
                            </div>
                    }
                </div>

                <div className='my-20'>
                    <ParallaxText baseVelocity={-1}>CRAVE FOR SHOPPING, EXPLORE OUR OFFERS HERE</ParallaxText>
                </div>

                <div className='relative mx-auto h-[280px] sm:h-[350px] md:h-[440px] xl:h-[500px] 2xl:h-[600px] 4xl:h-[800px] 5xl:w-9/12 4xl:w-[1550px] 2xl:w-[1400px] xl:w-[1140px] md:w-[700px] sm:w-[600px] w-[350px] mt-20 shopping-area'>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute -left-5  sm:left-0 md:left-0 md:top-[150px] xl:left-[80px] top-28 sm:top-[120px] xl:top-[140px] 4xl:left-0 4xl:top-[260px] z-[2] 4xl:h-80 2xl:h-72 xl:h-56 md:h-36 sm:h-32 h-24'
                    >
                        <img src="./store/HomeShoe.png" alt="Home Shoe" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2' text='Shoe' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute left-6 sm:left-[90px] 4xl:left-[250px] 2xl:left-[340px] xl:left-[250px] md:left-[100px] top-0 z-[1] 4xl:h-[420px] 2xl:h-80 xl:h-64 md:h-56 sm:h-40 h-32'
                    >
                        <img src="./store/HomePerfume.png" alt="Home Perfume" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2' text='Perfumes' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute 4xl:left-[250px] 2xl:left-[310px] xl:left-[280px] md:left-[105px] sm:left-[80px] left-[30px] bottom-0 h-20 sm:h-28 md:h-36 xl:h-44 2xl:h-56 4xl:h-64 z-[3]'
                    >
                        <img src="./store/HomeBag.png" alt="Home Bag" className='h-full' />
                        <StoreHoverButton type='black' className='absolute bottom-2 left-1/2 -translate-x-1/2' text='Bags' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute right-0 sm:right-auto sm:left-[415px] md:left-[470px] xl:left-[810px] 2xl:left-[1005px]  4xl:left-[1160px] bottom-[40px] md:bottom-[55px] 4xl:h-[550px] 2xl:h-96 sm:h-64 h-[218px] z-[3]'
                    >
                        <img src="./store/GreenDress1.jpg" alt="Home Dress" className='h-full min-w-full' />
                        <StoreHoverButton link='/fashion-store/Fashion' type='white' className='absolute  bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2' text='Dress' />
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className='absolute right-28 sm:right-auto sm:left-[340px] 4xl:left-[960px] 2xl:left-[850px] xl:left-[700px]  md:left-[400px]  4xl:top-28 xl:top-14 md:top-[40px] top-[10px] h-[70px] sm:h-28 4xl:h-64 xl:h-40 md:h-32 2xl:h-48 z-[3]'
                    >
                        <img src="./store/HomeJewellery.jpg" alt="Home Sunglasses" className='h-full' />
                        <StoreHoverButton type='white' className='absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2' text='Jewellery' />
                    </div>




                    <div className='font-medium absolute left-[95px] tracking-wider sm:tracking-normal sm:left-[160px] md:left-[215px] xl:left-[400px] 2xl:left-[460px] 4xl:left-[410px] bottom-[50px] sm:bottom-[55px] md:bottom-[80px] text-2xl sm:text-6xl md:text-6xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[7] text-primary-pink' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">S</div>
                    <div className='font-medium absolute left-[95px] tracking-wider sm:tracking-normal sm:left-[160px] md:left-[215px] xl:left-[400px] 2xl:left-[460px] 4xl:left-[410px] bottom-[50px] sm:bottom-[55px] md:bottom-[80px] text-2xl sm:text-6xl md:text-6xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[6] text-white' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPIN</div>
                    <div className='font-medium absolute left-[95px] tracking-wider sm:tracking-normal sm:left-[160px] md:left-[215px] xl:left-[400px] 2xl:left-[460px] 4xl:left-[410px] bottom-[50px] sm:bottom-[55px] md:bottom-[80px] text-2xl sm:text-6xl md:text-6xl xl:text-8xl 2xl:text-9xl 4xl:text-11xl z-[5] text-primary-bg' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">SHOPPING</div>


                    <StoreHoverButton type='white' className="absolute bottom-3 left-1/2 4xl:left-[50%] 3xl:left-[60%] -translate-x-1/2" text='explore' />


                </div>

                {/* Special categories  */}
                <div className='bg-primary-bg h-96'>
                    <h1></h1>
                </div>
                <div className='bg-primary-bg h-96'></div>
            </div>


        </div >
    )
}

export default Fashion