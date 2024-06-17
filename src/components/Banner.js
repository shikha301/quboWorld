import React, { useState, useEffect } from 'react';

function Banner() {

    const images = [
        './images/bg-banner-1.jpg',
        './images/bg-banner-2.jpg'
      ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  useEffect(() => {
    setTextOpacity((textOpacity) => (textOpacity === 1 ? 0.5 : 1));
  }, [currentImageIndex]); 

  return (
    <div className="flex flex-col justify-center">
      <div className="flex overflow-hidden relative flex-col max-h-full justify-center items-start h-fpx-16 w-fullmax-md:px-5 max-md:max-w-full">
        <img
          src={images[currentImageIndex]}
          className="object-cover absolute inset-0 h-full w-full"
        />
        <div className="flex relative flex-col mt-36 mb-32  md:ml-24 max-w-full w-[431px] max-md:my-10">
          <div className="text-7xl font-bold text-white leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Smart Bullet <br />
            Camera
          </div>
          <div className="mt-8 text-2xl font-semibold leading-10 text-cyan-400 uppercase tracking-[2.4px] max-w-[431px] md:max-w-full"
               style={{ opacity: textOpacity }}>
            <span className="font-medium">Your very own</span>{" "}
            <span className="font-extrabold">Dark Knight</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;