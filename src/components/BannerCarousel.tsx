import React, { useState, useEffect } from 'react';
import banner1 from '@/assets/banners/banner1.jpg';
import banner2 from '@/assets/banners/banner2.jpg';
import banner3 from '@/assets/banners/banner3.jpg';
import banner4 from '@/assets/banners/banner4.jpg';
import banner5 from '@/assets/banners/banner5.jpg';

const banners = [banner1, banner2, banner3, banner4, banner5];

export const BannerCarousel: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-32 md:h-48 overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentBanner ? 'bg-primary' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};