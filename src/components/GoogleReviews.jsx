import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Load the Google Reviews Widget script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-forum text-primary-text text-center mb-12">
        What Our Guests Say
      </h2>
      <div 
        className="elfsight-app-13ed71af-39a3-4bd6-a38f-9590393a38cf" 
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
