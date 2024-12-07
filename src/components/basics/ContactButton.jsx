import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // Icons
import { NavLink } from "react-router-dom";

const ContactButton = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(true);

        // Set it back to false after 2 seconds
        setTimeout(() => {
            setShowLinks(false);
        }, 3000);
    };

    return (
        <div className="relative">
            {/* Main Button */}
            <NavLink
                to='/contact'
                className="border px-4 py-2 cursor-pointer uppercase font-sans tracking-wide rounded-xl bg-[#18181850] border-primary-border hover:border-primary-pink flex items-center justify-center gap-2"
                onMouseEnter={() => handleShowLinks()}
            >
                <span>Contact</span>
            </NavLink>

            {/* Pop-up Links */}
            {showLinks && (
                <div className="absolute top-full mt-2 bg-[#181818] border border-primary-border rounded-lg shadow-lg p-4 flex flex-col space-y-3 z-10 w-52">
                    <a
                        href="https://www.instagram.com/maison.rose.lifestyle?igsh=MXJlMGpqZTRtOGU2ZA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white hover:text-primary-pink transition"
                    >
                        <FaInstagram className="text-2xl" /> {/* Instagram Icon */}
                        <span>Instagram</span>
                    </a>
                    <a
                        href="https://www.facebook.com/maison.rose.lifestyle?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white hover:text-primary-pink transition"
                    >
                        <FaFacebookF className="text-2xl" /> {/* Facebook Icon */}
                        <span>Facebook</span>
                    </a>
                    <a
                        href="https://wa.me/916290433603"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white hover:text-primary-pink transition"
                    >
                        <FaWhatsapp className="text-2xl" /> {/* WhatsApp Icon */}
                        <span>WhatsApp</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ContactButton;
