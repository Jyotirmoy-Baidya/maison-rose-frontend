import React, { useEffect, useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "../styles/salon.css"

const nailartImages = [
    "./images/nailarts/image01.png",
    "./images/nailarts/image02.png",
    "./images/nailarts/image03.png",
    "./images/nailarts/image04.png"
];

const prizes = [
    {
        name: "Best Nail Art Studio in Kolkata 2023",
        rating: 5
    },
    {
        name: "Top Rated Beauty Service Provider",
        rating: 4.5
    },
    {
        name: "Excellence in Customer Service",
        rating: 5
    }
];

const nailartCategories = [
    {
        name: "Classic Manicure",
        description: "Essential nail care with perfect shaping and polishing",
        price: "₹499"
    },
    {
        name: "Gel Extensions",
        description: "Long-lasting, natural-looking nail extensions",
        price: "₹1499"
    },
    {
        name: "3D Nail Art",
        description: "Intricate designs with dimensional elements",
        price: "₹999"
    },
    {
        name: "Chrome & Holographic",
        description: "Stunning metallic and iridescent finishes",
        price: "₹799"
    }
];

const Nailarts = () => {
    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);

    const scrollToPart = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    const RatingStars = ({ rating }) => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            if (rating >= starValue) {
                return <IoIosStar key={index} className="text-primary-text text-sm xl:text-base" />;
            } else if (rating >= starValue - 0.5) {
                return <IoIosStarHalf key={index} className="text-primary-text text-sm xl:text-base" />;
            } else {
                return <IoIosStarOutline key={index} className="text-primary-text text-sm xl:text-base" />;
            }
        });

        return <div className="flex space-x-1">{stars}</div>;
    };

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='flex flex-col bg-primary-bg overflow-y-scroll overflow-x-hidden no-scrollbar min-h-screen'>
            {/* mobile section */}
            <div className='flex flex-col gap-3 p-3 w-full content'>


                {/* Hero Section with Image and Text */}
                <div className='relative xl:mt-16 w-full'>
                    <div className='flex flex-col md:flex-row gap-8 min-h-[500px]'>
                        <div className='w-full md:w-1/2 relative'>
                            <img
                                src={nailartImages[0]}
                                alt="Nail Art Design Showcase"
                                className='absolute inset-0 w-full h-full rounded-xl object-cover'
                                style={{ objectPosition: 'center' }}
                                data-aos="fade-right"
                            />
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col justify-center gap-6 p-2 xl:p-4 md:p-8'>
                            <h1 className='text-4xl md:text-6xl tracking-wider text-primary-text font-forum' data-aos="fade-left">
                                Nail Art Studio
                            </h1>
                            <div className='text-xl md:text-2xl text-primary-text/80 font-forum' data-aos="fade-left" data-aos-delay="100">
                                Kolkata's Premier Nail Art Destination
                            </div>
                            <div className='text-primary-text/70 font-forum leading-relaxed' data-aos="fade-left" data-aos-delay="200">
                                Step into a world where creativity meets luxury. Our skilled technicians transform your nails into stunning works of art, using premium products and innovative techniques. From classic manicures to intricate 3D designs, we offer a complete range of nail care services tailored to your style.
                            </div>
                            <div className='flex flex-col gap-4 mt-4' data-aos="fade-left" data-aos-delay="300">
                                <div className='text-primary-pink font-forum text-lg'>
                                    Services starting from ₹499
                                </div>
                                <a
                                    href="tel:+916290433603"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-pink text-primary-pink font-forum rounded-lg hover:bg-primary-pink hover:text-primary-bg transition-all duration-300 w-fit"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Image */}
                <div className='relative mt-8 w-full h-[300px]'>
                    <img
                        src={nailartImages[1]}
                        alt="Nail Art Designs"
                        className='absolute inset-0 w-full h-full rounded-xl object-cover'
                        style={{ objectPosition: 'center' }}
                        data-aos="fade-up"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent rounded-xl'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-8 text-center'>
                        <div className='text-2xl text-primary-text font-forum mb-2'>Experience Excellence</div>
                        <div className='text-primary-text/80 font-forum'>Where every nail tells a story of elegance</div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-full'>
                    {/* Gallery Section */}
                    <div className='mt-12'>
                        <div className='text-primary-text text-2xl text-center tracking-wide font-forum mb-8'>
                            Our Gallery
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {nailartImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-[3/4] group overflow-hidden rounded-xl"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <img
                                        src={image}
                                        alt={`Nail Art Design ${index + 1}`}
                                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                        style={{ objectPosition: 'center' }}
                                    />
                                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards Section */}
                    <div className='flex flex-col gap-2 mt-12'>
                        <div className='text-primary-text text-2xl text-center tracking-wide font-forum awards mb-6'>
                            Awards
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            {prizes.map((prize, index) => (
                                <div
                                    key={index}
                                    className="relative h-full hover:bg-primary-text hover:bg-opacity-10 cursor-pointer border-2 border-primary-border rounded-xl p-6"
                                    data-aos={`${index == 0 ? 'fade-right' : index == 1 ? 'fade-up' : 'fade-left'}`}
                                >
                                    <div className="flex flex-col h-full w-full gap-4 justify-center items-center">
                                        <RatingStars rating={prize.rating} />
                                        <div className="text-primary-text font-forum text-center text-sm md:text-base">
                                            {prize.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className='hidden flex-col gap-4 mt-12'>
                        <div className='text-primary-text text-2xl text-center tracking-wide font-forum mb-6'>
                            Our Services
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {nailartCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-primary-border rounded-xl p-6 hover:bg-primary-text hover:bg-opacity-10 cursor-pointer h-full"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex flex-col gap-3 h-full">
                                        <h3 className="text-primary-text font-forum text-xl">
                                            {category.name}
                                        </h3>
                                        <p className="text-primary-text/80 font-forum text-sm flex-grow">
                                            {category.description}
                                        </p>
                                        <p className="text-primary-pink font-forum text-lg">
                                            {category.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className='flex flex-col gap-4 mt-12 mb-8'>
                        <div className='text-primary-text text-2xl text-center tracking-wide font-forum mb-6'>
                            Book Your Appointment
                        </div>
                        <div className='text-center text-primary-text/80 font-forum'>
                            For bookings and inquiries, please contact us:
                            <br />
                            <a href="tel:+916290433603" className="text-primary-pink hover:underline text-lg mt-2 inline-block">
                                +91 6290433603
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nailarts
