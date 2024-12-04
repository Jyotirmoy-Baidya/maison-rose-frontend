import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // This will run only once when the component mounts

    return null; // This component doesn't render anything
};

export default ScrollToTop;
