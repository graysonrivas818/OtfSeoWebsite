import React, { useState, useRef, useEffect } from 'react';

import { Star } from 'lucide-react';
import logo1 from '../assets/testinomial_logo1.png';
import logo2 from '../assets/testinomial_logo2.png';
import logo3 from '../assets/testinomial_logo3.png';
import backgroundImage from "../assets/testinomial_bg.png";
import testinomial_bg_mobile from '../assets/testinomial_bg_mobile.png';
// import cardsBackground from "../assets/cards_bg.png";
import cardsBackground from "../assets/cards_bg1.png";


function useMobile(){
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
const Testimonials = () => {
    const testimonials = [
        {
            logo: logo1,
            logoAlt: "UTC - United Team Construction",
            logoClass: "max-h-[100px]",  // Example size for this logo
            text: "Our online presence was practically non-existent until we partnered with OTF. They took the time to understand our goals, fixed technical issues on our site, improved content, and built high-quality seo content. The increase in organic visibility has been incredible — this is the kind of service that pays for itself.",
            name: "Alex K.",
            title: "Owner",
            company: "United Team Construction"
        },
        {
            logo: logo2,
            logoAlt: "WG - Wooden Gaze",
            logoClass: "max-h-[80px]",  // Smaller size
            text: "OTF completely transformed our Google Business Profile. They optimized everything — from photos and categories to reviews and keywords — and within weeks, we started showing up in the local map pack. We've seen a huge increase in calls, website visits, and walk-in customers. We can already seen a direct ROI and it's only been a few months. It's been most profitable than our paid ads.",
            name: "Adrian Martinez",
            title: "Owner",
            company: "Wooden Gaze"
        },
        {
            logo: logo3,
            logoAlt: "A - Helping Hand Staffing Services",
            logoClass: "max-h-[80px]",  // Medium size
            text: "You guys didn't just improve our site — they changed our business. Our traffic has more than doubled, and we're ranking above some of the biggest names in our industry. Their SEO work was strategic, transparent, and results-driven. Worth every dollar.",
            name: "Susan Lobser",
            title: "Owner",
            company: "Ahhand"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const cardWidth = slider.firstChild?.clientWidth || 300; // Use actual card width
            const gap = 24; // Your gap size
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setCurrentIndex(index);
        };

        slider.addEventListener('scroll', handleScroll, { passive: true });
        return () => slider.removeEventListener('scroll', handleScroll);
    }, []);

    
    const isMobile = useMobile();

    return (
        // <div
        //     className="w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24 relative"
        //     style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
        // >

    <div
      className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-16 relative"
      style={{ backgroundImage: `url(${isMobile ? testinomial_bg_mobile : backgroundImage})`, backgroundSize: "100% 100%" }}
    >
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-5 sm:mb-16">
                    <h3 className="text-white text-md font-medium font-montserrat mb-2 tracking-wide">
                        Testimonials
                    </h3>
                    <h2 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold font-montserrat">
                        Words From The <span className="text-[#146BFE] block sm:inline">Fam!</span>
                    </h2>
                </div>



                {/* Testimonial Cards */}
                <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3  gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                    <div
    key={index}
    className="backdrop-blur-sm w-full p-13 flex flex-col rounded-3xl"
    style={{ 
        backgroundImage: `url('${cardsBackground}')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "550px"
    }}
>



                            <div className="flex justify-center mb-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={testimonial.logo || "/placeholder.svg"}
                                        alt={testimonial.logoAlt}
                                        className={`max-w-full object-contain filter brightness-110 ${testimonial.logoClass}`}
                                    />
                                </div>
                            </div>

                            {/* Testimonial Text - Tightened spacing */}
                            <div className="flex-grow italic font-montserrat overflow-hidden">
                                <p className="text-white/90 text-xs leading-relaxed font-light">
                                    {testimonial.text}
                                </p>
                            </div>


                            {/* Divider */}
                            <div className="mb-4 mt-5">  {/* You can also reduce this to mb-2 if you want even tighter spacing */}
                                <div className="w-20 h-0.5 bg-white mx-auto"></div>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4 ">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400 mx-0.5" />
                                ))}
                            </div>

                            {/* Author Info */}
                            <div className="font-thin font-montserrat">
                                <h4 className="text-white font-semibold text-base mb-1">{testimonial.name}</h4>
                                <p className="text-white/70 text-xs mb-1">{testimonial.title}</p>
                                <p className="text-white/60 text-xs">{testimonial.company}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div ref={sliderRef}
                    className="flex sm:hidden overflow-x-auto gap-6 px-4" style={{ scrollSnapType: 'x mandatory' }}>
                    {testimonials.map((testimonial, index) => (
                        // <div
                        //     key={index}
                        //     className="flex-shrink-0 backdrop-blur-sm bg-[#1F345B]  rounded-3xl p-6 border border-blue-700/50 w-[280px] max-w-md max-h-[550px] flex flex-col"
                        // >
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] snap-start max-w-md p-10 max-h-[550px] mx-auto flex flex-col rounded-3xl"
                            style={{
                                backgroundImage: `url('${cardsBackground}')`,
                                  backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
                            }}
                        >
                            {/* Logo - Reduced height */}
                            <div className="flex justify-center mb-4">
                                <div className=" flex items-center justify-center">
                                    <img
                                        src={testimonial.logo || "/placeholder.svg"}
                                        alt={testimonial.logoAlt}
                                        className="max-w-full max-h-full object-contain filter brightness-110"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Text - Tightened spacing */}
                            <div className="flex-grow italic font-montserrat overflow-hidden">
                                <p className="text-white/90 text-xs leading-relaxed font-light">
                                    {testimonial.text}
                                </p>
                            </div>


                            {/* Divider */}
                            <div className="mb-4 mt-5">  {/* You can also reduce this to mb-2 if you want even tighter spacing */}
                                <div className="w-20 h-0.5 bg-white mx-auto"></div>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400 mx-0.5" />
                                ))}
                            </div>

                            {/* Author Info */}
                            <div className="font-thin font-montserrat">
                                <h4 className="text-white font-semibold text-base mb-1">{testimonial.name}</h4>
                                <p className="text-white/70 text-xs mb-1">{testimonial.title}</p>
                                <p className="text-white/60 text-xs">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
             <div className="flex sm:hidden justify-center mt-4">
  {testimonials.map((_, i) => (
    <span
      key={i}
      aria-label={`Slide ${i + 1}`}
      className={`w-3 h-3 mr-2 rounded-full transition-all ${
        i === currentIndex
          ? "bg-blue-500" // filled circle
          : "border-2 border-white" // outlined circle
      }`}
    ></span>
  ))}
</div>


            </div>
        </div>
    );
};

export default Testimonials;

