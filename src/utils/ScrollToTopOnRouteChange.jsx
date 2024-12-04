import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Runs every time the pathname changes

    return null;
};

export default ScrollToTopOnRouteChange;
