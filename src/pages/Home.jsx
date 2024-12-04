import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import DesktopHeader from "../components/basics/DesktopHeader";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImQuotesLeft } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import ParallaxText from "../components/basics/ParallaxText";
import ServiceCarousel from "../components/ServiceCarousel";
import GoogleReviews from "../components/GoogleReviews";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col w-screen xl:w-full overflow-x-hidden bg-primary-bg">
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/916290433603"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#181818] hover:bg-[#252525] text-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-[#25D366]"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Maison Rose Lifestyle – Café, Restaurant, and Fashion in New Town
          Kolkata
        </title>
        <meta
          name="description"
          content="Experience Maison Rose Lifestyle – a stylish café and restaurant in New Town Kolkata with a Thai-inspired fashion store. Perfect for dining and lifestyle shopping."
        />
        <meta
          name="keywords"
          content="Maison Rose Lifestyle, New Town Kolkata cafe, Thai fashion store, Axis Mall restaurant"
        />
        <link rel="canonical" href="https://maisonroselifestyle.com" />
      </Helmet>


      <div className="hidden xl:flex p-4 h-screen max-h-screen min-h-screen bg-primary-bg">
        <div className="flex w-full gap-4">
          <div className="w-[77%] font-forum bg-primary-bg relative flex overflow-hidden rounded-2xl">
            <div className="relative w-[22%]">
              <div className="tracking-wider absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-text">
                MAI
                <br />
                LIFE
              </div>
            </div>
            <div className="w-[78%] relative bg-primary-pink overflow-hidden">
              <img
                src="./fashion/main.png"
                alt="Maison Rose Lifestyle - Café and Fashion Store in New Town Kolkata"
                className="min-w-full min-h-full"
              />
              <div className="tracking-wider -left-[170px] 2xl:-left-[227px] absolute text-8xl 2xl:text-9xl bottom-14 right-0 text-primary-bg">
                MAISON ROSE
                <br />
                LIFESTYLE
              </div>
            </div>
          </div>
          <div className="w-[23%] h-full flex bg-primary-bg">
            <div className="flex flex-col gap-4 h-full w-full">
              <NavLink
                to="/saloon"
                className="h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden"
              >
                <img
                  src="./images/saloon.png"
                  alt="Luxury Salon Services at Maison Rose Lifestyle"
                  className="object-cover bottom-0 absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg">
                  <div className="pr-2 text-white font-forum text-lg tracking-wide">
                    Salon
                  </div>
                  <div className="h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                    <FaArrowRight />
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/cafe"
                className="h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden"
              >
                <img
                  src="./images/coffee.jpg"
                  alt="Gourmet Café Experience in New Town Kolkata"
                  className="object-cover h-full absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg">
                  <div className="pr-2 text-white font-forum text-lg tracking-wide">
                    Café
                  </div>
                  <div className="h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                    <FaArrowRight />
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/fashion"
                className="h-full w-full relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden"
              >
                <img
                  src="./store/what-new1.jpg"
                  alt="Thai-Inspired Fashion Collection in Kolkata"
                  className="absolute -top-1/3 w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 pl-6 pt-3 flex items-center rounded-ss-3xl bg-primary-bg">
                  <div className="pr-2 text-white font-forum text-lg tracking-wide">
                    Fashion
                  </div>
                  <div className="h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                    <FaArrowRight />
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-3 mt-16 xl:hidden p-3">
        <div className="w-full h-80 font-forum bg-primary-bg relative flex overflow-hidden rounded-lg">
          <div className="relative w-[22%]">
            <div className="tracking-wider absolute text-3xl sm:text-4xl md:text-5xl lg:text-5xl bottom-8 right-0 text-primary-text">
              MAI
              <br />
              LIFE
            </div>
          </div>
          <div className="w-[78%] relative bg-primary-pink overflow-hidden">
            <img
              src="./fashion/main.png"
              alt="Maison Rose Lifestyle - Café and Fashion Store in New Town Kolkata"
              className="min-w-full min-h-full"
            />
            <div className="tracking-wider -left-[53px] absolute text-3xl  bottom-8 right-0 text-primary-bg">
              MAISON ROSE
              <br />
              LIFESTYLE
            </div>
          </div>
        </div>

        <div className="flex flex-col border-2 border-primary-border p-3">
          <h1 className="text-4xl text-primary-text font-forum text-center">
            Welcome to Maison Rose Lifestyle
          </h1>
          <div className="text-primary-text p-3 font-forum text-sm">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2 h-full">
                  <div className="text-4xl mb-1">
                    <ImQuotesLeft />
                  </div>
                  <div className="text-xl">
                    Newtown's Premier Lifestyle Destination
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 ml-6 border-l-2"></div>

                  <div className="text-[#EFE7D295]">
                    Welcome to Maison Rose Lifestyle, Kolkata's chic destination
                    combining a delightful café and restaurant experience with a
                    unique Thai-inspired lifestyle and fashion store. Located in
                    New Town near Axis Mall, we offer the perfect blend of
                    culinary excellence and trendsetting fashion. Discover
                    handcrafted coffees, gourmet meals, and an exclusive
                    collection of Thai fashion, floral dresses, and Korean
                    styles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <ParallaxText baseVelocity={-1}>Experience Luxury</ParallaxText>
          <ParallaxText baseVelocity={1}>Fashion & Dining</ParallaxText>
        </section>

        {/* mobile to section   */}
        <div className="flex flex-col gap-2">
          <NavLink
            to="/saloon"
            className="relative h-28 w-1/2 bg-primary-bg rounded-lg rounded-br-none overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="./images/saloon.png"
              alt="Luxury Salon Services at Maison Rose Lifestyle"
              className="object-cover bottom-0 absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg">
              <div className="pr-2 text-white font-forum text-sm tracking-wide">
                Salon
              </div>
              <div className="h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                <FaArrowRight />
              </div>
            </div>
          </NavLink>
          <div className="grid grid-cols-2">
            <NavLink
              to="/cafe"
              className=" col-start-2 h-28 w-full  flex-grow-1 bg-primary-bg rounded-lg rounded-br-none overflow-hidden"
              data-aos="fade-left"
            >
              <img
                src="./images/coffee.jpg"
                alt="Gourmet Café Experience in New Town Kolkata"
                className="object-cover h-full absolute w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg">
                <div className="pr-2 text-white font-forum text-sm tracking-wide">
                  Café
                </div>
                <div className="h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                  <FaArrowRight />
                </div>
              </div>
            </NavLink>
          </div>
          <NavLink
            to="/fashion"
            className="h-28 w-1/2 relative flex-grow-1 bg-primary-bg rounded-2xl rounded-br-none overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="./store/what-new1.jpg"
              alt="Thai-Inspired Fashion Collection in Kolkata"
              className="absolute top-0 w-full transition duration-300 ease-in-out transform hover:scale-[103%]"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 pl-3 pt-1 flex items-center rounded-ss-lg bg-primary-bg">
              <div className="pr-2 text-white font-forum text-sm tracking-wide">
                Fashion
              </div>
              <div className="h-4 w-4 border text-xs border-gray-500 rounded-full flex items-center justify-center text-white hover:bg-primary-text hover:text-primary-bg">
                <FaArrowRight />
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      <div
        className="hidden xl:flex rounded-md w-11/12 mx-auto flex-col border-2 border-primary-border p-3 mt-20"
        data-aos="fade-up"
      >
        <h1
          className="text-6xl text-primary-text font-forum text-center"
          data-aos="fade-up"
        >
          Welcome to Maison Rose Lifestyle
        </h1>
        <div
          className="text-primary-text p-3 font-forum text-sm"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-end gap-2 h-full">
                <div className="text-4xl mb-1">
                  <ImQuotesLeft />
                </div>
                <div className="text-xl">
                  Newtown's Premier Lifestyle Destination
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 ml-6 border-l-2"></div>

                <div className="text-xl text-[#EFE7D295]">
                  Discover Maison Rose Lifestyle, Kolkata's most enchanting
                  fusion of culinary excellence and fashion-forward living in
                  the heart of New Town. Strategically located near Axis Mall,
                  we've created an extraordinary destination where sophisticated
                  dining seamlessly blends with contemporary style and
                  Thai-inspired elegance. At Maison Rose Café and Restaurant,
                  immerse yourself in a world of exceptional flavors. Our
                  carefully curated menu showcases the finest global cuisines,
                  from authentic Thai delicacies to contemporary fusion dishes,
                  all prepared by our skilled culinary team. Savor our signature
                  handcrafted beverages, from aromatic specialty coffees to
                  innovative mocktails, complemented by an irresistible
                  selection of house-made desserts. Whether you're seeking a
                  cozy breakfast spot, a chic lunch venue, or a romantic dinner
                  setting, our Instagram-worthy ambiance provides the perfect
                  backdrop for every occasion. Step into our lifestyle boutique,
                  where fashion meets sophistication. Our meticulously curated
                  collection features exclusive Thai-inspired fashion pieces,
                  trendy Korean styles, and vintage-inspired clothing that
                  caters to diverse tastes and occasions. From stunning birthday
                  dresses that make celebrations memorable to elegant everyday
                  wear, each piece in our collection is chosen to help you
                  express your unique style. Enhance your wardrobe with our
                  selection of designer bags, comfortable yet stylish footwear,
                  and seasonal accessories that add the perfect finishing touch
                  to any outfit. Experience the unique charm of Maison Rose,
                  where every visit promises a delightful journey through
                  flavors, fashion, and unforgettable moments in New Town,
                  Kolkata. Join us for an experience that combines the warmth of
                  Thai hospitality with the sophistication of contemporary
                  lifestyle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Carousel */}
      <ServiceCarousel />

      <div className="flex flex-col mt-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12">
          <div className="xl:w-1/2">
            <h2 className="text-3xl md:text-4xl font-forum text-primary-text mb-6">
              Discover Maison Rose Lifestyle
            </h2>
            <div className="prose prose-lg text-primary-text/80">
              <p className="mb-4">
                Welcome to Maison Rose Lifestyle – where luxury meets comfort in
                the heart of New Town, Kolkata. Our establishment is more than
                just a destination; it's a carefully curated experience that
                combines the finest elements of Thai-inspired fashion, gourmet
                dining, and premium wellness services.
              </p>
              <p className="mb-4">
                Nestled in the vibrant Axis Mall, we offer an extraordinary blend
                of services designed to elevate your lifestyle. Our fashion
                boutique showcases exquisite Thai-inspired collections, while our
                café serves artisanal beverages and international cuisine.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 text-sm text-primary-text/60">
                <span>#MaisonRoseLifestyle</span>
                <span>#LuxuryDiningKolkata</span>
                <span>#ThaiInspiredFashion</span>
                <span>#NewTownCafe</span>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 relative h-[400px] perspective-[1000px]">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              animate={{
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
            >
              <motion.img
                src="/menu/combos/mainComboHero.png"
                alt="Maison Rose Lifestyle Experience - Luxury Dining and Fashion in Kolkata"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-bg/50 via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-bg/80 to-primary-bg/40 backdrop-blur-sm border border-primary-border/20">
            <h3 className="text-xl font-forum text-primary-text mb-3">Curated Experience</h3>
            <p className="text-primary-text/70">Immerse yourself in a thoughtfully designed space where every detail contributes to your comfort and satisfaction.</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-bg/80 to-primary-bg/40 backdrop-blur-sm border border-primary-border/20">
            <h3 className="text-xl font-forum text-primary-text mb-3">Premium Quality</h3>
            <p className="text-primary-text/70">From our fashion collections to our dining menu, we maintain the highest standards in everything we offer.</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-bg/80 to-primary-bg/40 backdrop-blur-sm border border-primary-border/20">
            <h3 className="text-xl font-forum text-primary-text mb-3">Cultural Fusion</h3>
            <p className="text-primary-text/70">Experience the perfect blend of Thai inspiration and contemporary lifestyle in the heart of Kolkata.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <NavLink
            to="/combos"
            className="inline-block bg-primary-bg border-2 border-primary-border text-primary-text hover:text-primary-bg font-forum px-8 py-3 rounded-lg hover:bg-primary-pink/90 transition-all"
          >
            Explore Our Special Combos
          </NavLink>
        </div>
      </div>


      {/* Social Proof */}
      <section className="py-12 px-4">
        <ParallaxText baseVelocity={-1}>Experience Luxury</ParallaxText>
        <ParallaxText baseVelocity={1}>Fashion & Dining</ParallaxText>
      </section>

      {/* Google Reviews Section */}
      <div className="bg-primary-bg/30 backdrop-blur-sm">
        <GoogleReviews />
      </div>
    </div>
  );
};

export default Home;
