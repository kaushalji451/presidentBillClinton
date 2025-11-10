import React from 'react';

import heroDesktop from '/assests/hero-desktop1.jpg';
import heroMobile from '/assests/hero-mobile1.jpg';
import homebg from '/assests/homebg.png';

const Slide1 = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      {/* Responsive images - covers full container */}
      <picture>
        {/* Mobile image for <=768px */}
        <source media="(max-width: 768px)" srcSet={heroMobile} />
        {/* Desktop fallback */}
        <img
          src={heroDesktop}
          alt="Alok Ji Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            minHeight: '100vh',   // Full viewport height
            maxHeight: '100vh',   // Prevent overflow
          }}
        />
      </picture>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        {/* <div className="text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Alok Ji’s Official Website
          </h1>
          <p className="text-lg md:text-xl">
            Explore his journey, legacy, and vision for India
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Slide1;
