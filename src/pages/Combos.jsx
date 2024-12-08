import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Combos = () => {
  const [selectedCombo, setSelectedCombo] = useState(null);

  const combos = [
    {
      id: 1,
      name: "Veg Pizza Combo Meal",
      description: "A delicious vegetarian combo featuring pizza, momos, and more",
      price: 199,
      image: "/menu/combos/image1.png",
      rating: 4.8,
      reviews: 124,
      details: {
        items: ["1 Veg Pizza", "2 Veg Momos", "1 Litti", "French Fries", "Mocktail"],
        serves: "1 person",
        time: "Available all day"
      }
    },
    {
      id: 2,
      name: "Veg Burger Combo",
      description: "A classic vegetarian burger combo with sides",
      price: 179,
      image: "/menu/combos/image2.png",
      rating: 4.6,
      reviews: 156,
      details: {
        items: ["Veg Burger", "French Fries", "Mocktail"],
        serves: "1 person",
        time: "Available all day"
      }
    },
    {
      id: 3,
      name: "Non-Veg Pizza Combo Meal",
      description: "A hearty chicken pizza combo with sides",
      price: 249,
      image: "/menu/combos/image3.png",
      rating: 4.9,
      reviews: 203,
      details: {
        items: ["1 Chicken Pizza", "2 Chicken Momos", "1 Litti", "French Fries", "Mocktail"],
        serves: "1 person",
        time: "Available all day"
      }
    },
    {
      id: 4,
      name: "Non-Veg Sandwich Combo",
      description: "A filling non-veg sandwich combo with sides",
      price: 249,
      image: "/menu/combos/image4.png",
      rating: 4.8,
      reviews: 167,
      details: {
        items: ["Non-Veg Sandwich", "2 Chicken Momos", "1 Litti", "French Fries", "Mocktail"],
        serves: "1 person",
        time: "Available all day"
      }
    },
    {
      id: 5,
      name: "Non-Veg Burger Combo",
      description: "A classic non-veg burger combo with sides",
      price: 199,
      image: "/menu/combos/image1.png",
      rating: 4.7,
      reviews: 145,
      details: {
        items: ["Non-Veg Burger", "French Fries", "Mocktail"],
        serves: "1 person",
        time: "Available all day"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-primary-text relative">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8 pt-32">
        {/* Hero Section */}
        <div className="mb-16 relative flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="xl:w-1/2">
            <h1 className="text-6xl font-forum mb-4">
              it's not just<br />
              Food, It's an<br />
              Experience.
            </h1>
            <div className="flex gap-4 mb-8">
              <button className="bg-primary-pink text-white px-8 py-3 rounded-lg hover:bg-primary-pink/90 transition-all">
                View Menu
              </button>
              <button className="bg-white text-primary-bg px-8 py-3 rounded-lg hover:bg-white/90 transition-all">
                Book A Table
              </button>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <p className="text-lg mb-2">Reviews</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-primary-pink text-white flex items-center justify-center text-sm">
                    +24
                  </div>
                </div>
                <div className="flex text-primary-pink">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Hero Image */}
          <motion.div
            className="xl:w-1/2 relative h-[600px] w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/menu/combos/mainComboHero.png"
              alt="Maison Rose Combo Special"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <motion.div
              key={combo.id}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCombo(combo)}
            >
              <div className="relative mb-4">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <button className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-primary-pink transition-all">
                  <FaShoppingCart />
                </button>
              </div>
              <h3 className="text-xl font-forum mb-2">{combo.name}</h3>
              <p className="text-primary-text/70 text-sm mb-4 line-clamp-2">
                {combo.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-forum">₹{combo.price}</span>
                <div className="flex items-center gap-2">
                  <FaStar className="text-primary-pink" />
                  <span>{combo.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Combo Details */}
        {selectedCombo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50"
            onClick={(e) => e.target === e.currentTarget && setSelectedCombo(null)}
          >
            <div className="bg-primary-bg rounded-3xl p-8 max-w-3xl w-full">
              <div className="flex gap-8">
                <img
                  src={selectedCombo.image}
                  alt={selectedCombo.name}
                  className="w-1/2 h-80 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-forum mb-4">{selectedCombo.name}</h2>
                  <p className="text-primary-text/70 mb-6">{selectedCombo.description}</p>
                  <div className="mb-6">
                    <h4 className="text-xl mb-2">Includes:</h4>
                    <ul className="list-disc list-inside">
                      {selectedCombo.details.items.map((item, index) => (
                        <li key={index} className="text-primary-text/70">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-primary-text/70">Serves: {selectedCombo.details.serves}</p>
                      <p className="text-sm text-primary-text/70">{selectedCombo.details.time}</p>
                    </div>
                    <button className="bg-primary-pink text-white px-8 py-3 rounded-lg hover:bg-primary-pink/90 transition-all">
                      Add to Cart - ₹{selectedCombo.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Combos;
