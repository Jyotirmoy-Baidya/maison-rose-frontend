import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ServiceCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      name: "Fashion Boutique",
      description: "Discover our curated collection of Thai-inspired fashion pieces, featuring elegant floral dresses, contemporary Korean styles, and vintage-inspired clothing. Each piece is carefully selected to blend Eastern grace with modern aesthetics, perfect for both casual outings and special occasions.",
      image: "./images/fashion.jpg",
      price: "Dresses starting from ₹999",
      path: "/store"
    },
    {
      id: 2,
      name: "Luxury Salon",
      description: "Experience premium beauty services in our state-of-the-art salon. From signature hair treatments and styling to professional makeup services, our expert stylists use premium products to enhance your natural beauty. Enjoy personalized consultations and transformative beauty experiences.",
      image: "./images/salon.png",
      price: "Services starting from ₹499",
      path: "/salon"
    },
    {
      id: 3,
      name: "Café & Restaurant",
      description: "Indulge in our artisanal coffee selection and gourmet dining experience. Our menu features a perfect blend of international cuisines, handcrafted beverages, and delectable desserts. Enjoy the cozy ambiance perfect for casual meetings, romantic dates, or peaceful solo dining.",
      image: "./images/coffee.jpg",
      price: "Beverages from ₹299",
      path: "/cafe"
    },
    {
      id: 4,
      name: "Nail Art Studio",
      description: "Visit our specialized nail art studio for creative and professional nail care services. Our skilled technicians offer everything from classic manicures to intricate nail art designs. Using premium products and sterilized equipment, we ensure both beauty and hygiene in every service.",
      image: "./images/nailart.png",
      price: "Services from ₹399",
      path: "/nailarts"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToService = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full py-6 md:py-12">
      <h2 className="text-3xl md:text-4xl font-forum text-primary-text text-center mb-6 md:mb-12">Our Services</h2>
      <div className="relative max-w-[95%] md:max-w-[1000px] h-[520px] md:h-[450px] mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 top-[30%] md:top-1/2 -translate-y-1/2 z-10 bg-primary-bg/80 p-2 md:p-3 rounded-full text-primary-text hover:bg-primary-text hover:text-primary-bg transition-all"
        >
          <FaArrowLeft size={16} className="md:w-5 md:h-5" />
        </button>

        <div className="relative h-full w-full">
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + services.length) % services.length;
            const isNext = index === (currentIndex + 1) % services.length;

            let translateX = '100%';
            if (isActive) translateX = '0%';
            else if (isPrev) translateX = '-100%';
            else if (isNext) translateX = '100%';

            return (
              <div
                key={service.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out ${isActive ? 'opacity-100 z-[2] scale-100' :
                  (isPrev || isNext) ? 'opacity-40 z-[1] scale-95' : 'opacity-0 z-0 scale-90'
                  }`}
                style={{
                  transform: `translateX(${translateX})`,
                }}
              >
                <div
                  className="mx-auto w-[90%] md:w-[700px] h-full bg-primary-bg rounded-2xl overflow-hidden shadow-2xl cursor-pointer group relative"
                  onClick={() => goToService(service.path)}
                >
                  <div className="relative w-full h-full flex flex-col md:block">
                    <div className="h-[45%] md:h-full relative">
                      <div className="absolute inset-0 bg-black/20 z-[1] group-hover:bg-black/30 transition-all duration-300"></div>
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover absolute bottom-0"
                      />
                    </div>
                    <div className="flex-1 md:absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-[#18181870] backdrop-blur-sm md:bg-gradient-to-t md:from-black/80 md:to-transparent z-[2]">
                      <h3 className="text-lg md:text-2xl font-forum text-primary-text md:text-white mb-2">{service.name}</h3>
                      <p className="text-sm md:text-base text-primary-text/80 md:text-white/80 line-clamp-4 leading-relaxed">{service.description}</p>
                      <p className="text-sm md:text-base text-primary-pink mt-3 font-medium">{service.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 top-[30%] md:top-1/2 -translate-y-1/2 z-10 bg-primary-bg/80 p-2 md:p-3 rounded-full text-primary-text hover:bg-primary-text hover:text-primary-bg transition-all"
        >
          <FaArrowRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-primary-pink w-6'
              : 'bg-primary-text/30 w-2 hover:bg-primary-text/50 hover:w-3'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
