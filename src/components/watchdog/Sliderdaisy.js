import React from 'react';
import watchdogImages from '../../data/watchdogImages.json';

const Sliderdaisy = () => {
  return (
    <div className="carousel carousel-end p-4 space-x-4 rounded-box">
      <div className="carousel-item hidden md:block">
        <img src={watchdogImages[0]} className="rounded-box" alt={`watch dog image 1`} />
      </div>

      {watchdogImages.slice(1).map((imageUrl, index) => (
        <div key={index} className="carousel-item">
          <img src={imageUrl} className="rounded-box" alt={`watch dog image ${index + 2}`} />
        </div>
      ))}
    </div>
  )
} 

export default Sliderdaisy
