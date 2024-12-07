import React from 'react'

const BuyNowButton = ({ SHARE_URL }) => {
    const message = `${SHARE_URL}\nI want to buy this product`;
    return (
        <a
            href={`https://wa.me/916290433603/?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-2 px-4 border-2 border-primary-border rounded-lg flex justify-center w-1/2 hover:bg-primary-text hover:text-black"
        >
            Buy Now
        </a>
    )
}

export default BuyNowButton