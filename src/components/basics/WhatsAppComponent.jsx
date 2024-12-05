import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppComponent = () => {
    return (
        <a
            href="https://wa.me/916290433603"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#181818] hover:bg-[#252525] text-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-[#25D366]"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    )
}

export default WhatsAppComponent