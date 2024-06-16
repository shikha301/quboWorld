import React,{useEffect, useState} from 'react'

const images = [
  '../images/app-slide-1.png',
  '../images/app-slide-2.png',
  '../images/app-slide-3.png'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-${index} left-0 w-full h-full mt-${index} transform ${
            index === currentIndex ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{
            transition: 'transform 1.5s ease-in-out',
            zIndex: images.length - index,
          }}
        >
          <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};


const Fingertip = () => {
  return (
    <div className="px-20 pt-20 bg-black max-md:px-5 max-md:mb-5">
      <div className="flex gap-5 min-h-screen max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
          <ImageSlider/>
        </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <div className="text-5xl font-bold text-white leading-1 bg-clip-text">
              Security at
              <br />
              your fingertips
            </div>
            <div className="mt-5 text-lg leading-6 text-white">
              Get real time notifications, customize <br />
              your security or live monitor your <br />
              house from anywhere.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fingertip
