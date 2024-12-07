import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GiHairStrands, GiNails, GiCoffeeCup } from 'react-icons/gi';
import { IoShirtOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/maison.rose.lifestyle?igsh=MXJlMGpqZTRtOGU2ZA==' },
    { icon: <FaFacebookF size={18} />, url: 'https://www.facebook.com/maison.rose.lifestyle?mibextid=ZbWKwL' }
  ];

  const services = [
    { name: 'Fashion Boutique', icon: <IoShirtOutline size={20} />, path: '/fashion' },
    { name: 'Luxury Salon', icon: <GiHairStrands size={20} />, path: '/salon' },
    { name: 'Café & Restaurant', icon: <GiCoffeeCup size={20} />, path: '/cafe' },
    { name: 'Nail Art Studio', icon: <GiNails size={20} />, path: '/nailart' }
  ];

  return (
    <footer className="bg-primary-bg border-t border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-forum text-2xl text-primary-text hover:text-primary-pink transition-colors">
                Maison Rose Lifestyle
              </h3>
            </Link>
            <p className="text-primary-text/80 text-sm leading-relaxed">
              Experience luxury and elegance at Kolkata's premier lifestyle destination,
              where fashion meets fine dining and beauty services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-primary-bg border border-primary-border rounded-full text-primary-text hover:text-primary-pink hover:border-primary-pink transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-forum text-xl text-primary-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-primary-text/80 hover:text-primary-pink transition-colors inline-flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-text/30 rounded-full group-hover:bg-primary-pink group-hover:w-2 transition-all duration-200"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-forum text-xl text-primary-text mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-primary-text/80 hover:text-primary-pink transition-colors flex items-center space-x-3 group"
                  >
                    <span className="text-primary-text/60 group-hover:text-primary-pink transition-colors">
                      {service.icon}
                    </span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-forum text-xl text-primary-text mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-pink mt-1 flex-shrink-0" />
                <p className="text-primary-text/80">
                  CE/1/B/96, Street no 238, Action Area 1
                  <br />
                  Newtown Kolkata - 700156, Near Axis Mall
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-pink flex-shrink-0" />
                <a
                  href="tel:+916290433603"
                  className="text-primary-text/80 hover:text-primary-pink transition-colors"
                >
                  +91 62904 33603
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-pink flex-shrink-0" />
                <a
                  href="mailto:maisonroselifestyle@gmail.com"
                  className="text-primary-text/80 hover:text-primary-pink transition-colors break-all"
                >
                  maisonroselifestyle@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-text/60 text-sm">
              &copy; {currentYear} Maison Rose Lifestyle. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-text/60 hover:text-primary-pink transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-text/60 hover:text-primary-pink transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
