import React from 'react';
import logo1 from '/assets/slider_logo_1.png';
import logo2 from '/assets/slider_logo_2.png';
import logo3 from '/assets/slider_logo_3.png';
import logo5 from '/assets/slider_logo_5.png';
import logo6 from '/assets/slider_logo_6.png';
import logo7 from '/assets/slider_logo_7.png';
import '../App.css';

const LogoSlider = () => {
  // const logos = [
  //   { id: 1, image: logo1, alt: "Logo 1" },
  //   { id: 2, image: logo2, alt: "Logo 2" },
  //   { id: 3, image: logo3, alt: "Logo 3" },
  //   { id: 4, image: logo5, alt: "Logo 5" },
  //   { id: 5, image: logo6, alt: "Logo 6" },
  //   { id: 6, image: logo7, alt: "Logo 7" }
  // ];
const logos = [
  { id: 1, image: logo1, alt: "Logo 1", sizeClass: "h-12 w-auto" },
  { id: 2, image: logo2, alt: "Logo 2", sizeClass: "h-23 w-auto" },
  { id: 3, image: logo3, alt: "Logo 3", sizeClass: "h-18 w-auto" },
  { id: 4, image: logo5, alt: "Logo 5", sizeClass: "h-15 w-auto" },
  { id: 5, image: logo6, alt: "Logo 6", sizeClass: "h-13 w-auto" },
  { id: 6, image: logo7, alt: "Logo 7", sizeClass: "h-20 w-auto" }
];

  return (
    <div className="relative w-full bg-[#146BFE] overflow-hidden py-8">
  <div className="relative flex w-full h-10 sm:h-10 md:h-28">
        {/* Double the logos for seamless looping */}
       <div className="flex items-center animate-marquee whitespace-nowrap">
  {/* {[...logos, ...logos, ...logos].map((logo, index) => (
    <div key={`${logo.id}-${index}`} className="inline-flex px-8 md:px-12">
      <img
        src={logo.image}
        alt={logo.alt}
        className="h-10 sm:h-18 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
      />
    </div>
  ))} */}
  {[...logos, ...logos, ...logos].map((logo, index) => (
  <div key={`${logo.id}-${index}`} className="inline-flex px-8 md:px-12">
    <img
      src={logo.image}
      alt={logo.alt}
      className={`${logo.sizeClass} object-contain opacity-90 hover:opacity-100 transition-opacity duration-200`}
    />
  </div>
))}

</div>

      </div>
    </div>
  );
};

export default LogoSlider;