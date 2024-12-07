import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaShareAlt } from "react-icons/fa";

const CreativeShareButton = ({ SHARE_URL }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShareOptions = () => {
        setIsExpanded(!isExpanded);
    };

    const shareLinks = {
        // facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(SHARE_URL)}`,
    };

    return (
        <div className="relative">
            {/* Main Share Button */}
            <button
                onClick={toggleShareOptions}
                className="bg-primary p-4 rounded-full text-white shadow-lg hover:bg-primary-dark transition duration-300"
            >
                <FaShareAlt size={20} />
            </button>

            {/* Share Options */}
            <div
                className={`absolute top-1/2 left-full transform -translate-y-1/2 flex gap-3 transition-all duration-300 ${isExpanded
                    ? "opacity-100 translate-x-4"
                    : "opacity-0 translate-x-0 pointer-events-none"
                    }`}
            >
                {/* Facebook */}
                {/* <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
                >
                    <FaFacebookF size={16} />
                </a> */}

                {/* Twitter */}
                {/* <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 p-3 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
                >
                    <FaTwitter size={16} />
                </a> */}

                {/* LinkedIn */}
                {/* <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 p-3 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
                >
                    <FaLinkedinIn size={16} />
                </a> */}

                {/* WhatsApp */}
                <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
                >
                    <FaWhatsapp size={16} />
                </a>
            </div>
        </div>
    );
};

export default CreativeShareButton;
