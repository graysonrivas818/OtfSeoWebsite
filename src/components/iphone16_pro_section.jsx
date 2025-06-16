import backgroundImage from "../assets/iPhone_16_bg.png";
import phoneImage from "../assets/iPhone_16_Pro.png";
import arrowIcon from "../assets/circle-arrow-right-01.png";

import { useNavigate } from 'react-router-dom'

export default function MapPackHero() {
    const navigate = useNavigate()

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 lg:py-18 relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-80"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 ">
        {/* Header Content */}
        <div className="text-center">
          <h1 className="text-white text-4xl lg:text-5xl xl:text-[50px] font-bold font-montserrat mb-5 lg:leading-20">
            Turn Your Map Pack from
            <br />
            <span className="text-[#0063FF]">Red to Green</span>
          </h1>

          <p className="text-white  text-[17px] sm:text-lg lg:text-[20px] max-w-[1100px] mx-auto mb-8 font-montserrat font-normal leading-8">
            Boost local visibility with proven GMB & SEO strategies and see your profile at the top! Emphasize how important it is to be found on search by customers for local maps here.
          </p>

          {/* CTA Button */}
          
            <button onClick={() => navigate('/contact')} className="bg-[#0063FF] cursor-pointer sm:w-55 h-10 sm:h-17 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-[25px] font-semibold font-montserrat text-xl sm:text-xl lg:text-xl duration-200 inline-flex justify-center items-center  gap-2">
            Get Started
            <img
              src={arrowIcon}
              alt="arrow"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Phone Mockups */}
<div className="relative flex justify-center items-center">
  <div className="relative w-full max-w-6xl mx-auto px-4">
    <img
      src={phoneImage}
      alt="iPhone showing Google Maps with local business listings - before and after optimization"
      className="w-full h-auto max-w-[100%]  mx-auto sm:max-w-[500px] lg:max-w-[550px] lg:max-h-[500px] xl:max-w-[500px] xl:max-h-[750px]"
    />
  </div>
</div>



      </div>

   
    </section>
  );
}