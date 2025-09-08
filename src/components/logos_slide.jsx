import React from 'react';
import logo1 from '/assets/slider_logo_1.png';
// import logo2 from '/assets/slider_logo_2.png';
import logo3 from '/assets/slider_logo_3.png';
import logo5 from '/assets/slider_logo_5.png';
import logo6 from '/assets/slider_logo_6.png';
import logo7 from '/assets/slider_logo_7.png';
import '../App.css';

const LogoSlider = () => {

const logos = [
  { id: 1, image: logo1, alt: "Logo 1", sizeClass: "h-12 w-auto" },
  { id: 2, image: logo3, alt: "Logo 3", sizeClass: "h-18 w-auto" },
  { id: 3, image: logo5, alt: "Logo 5", sizeClass: "h-15 w-auto" },
  { id: 4, image: logo6, alt: "Logo 6", sizeClass: "h-13 w-auto" },
  { id: 5, image: logo7, alt: "Logo 7", sizeClass: "h-20 w-auto" }
];
  const repeatedLogos = Array(6).fill(logos).flat();

  return (
   
  
    <div className="relative w-full bg-[#146BFE] overflow-hidden py-8">
      <div className="relative flex w-full h-20 sm:h-20 md:h-28">
        <div className="flex items-center animate-marquee">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex-shrink-0 px-8 md:px-12">
              <img
                src={logo.image}
                alt={logo.alt}
                className={`${logo.sizeClass} object-contain opacity-90 hover:opacity-100 transition-opacity duration-200`}
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 50s;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;