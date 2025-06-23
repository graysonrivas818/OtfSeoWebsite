import backgroundImage from "/assets/enterprise_bg.png";
import mobileImage from '/assets/enterprise_center_mobile.png';
import enterpriseCenter from "/assets/enterprise_center.png";

import { useNavigate } from 'react-router-dom'


const Enterprise = () => {
  const navigate = useNavigate()

    return (
        <div className="w-full relative min-h-[450px] lg:min-h-[500px]  flex items-center justify-center">
            {/* Background container */}
            <div className="absolute inset-0 w-full h-full">
                {/* Main background image */}
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>

                {/* Centered image overlay */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {/* Mobile version - visible below 640px */}
                    <img
                        src={mobileImage || "/placeholder.svg"}
                        alt="Enterprise Mobile"
                        className="block sm:hidden max-h-[90vh] w-[95vw] object-contain"
                    />

                    {/* Laptop version - visible from 1024px (lg) up to 1279px (before xl) */}
                    <img
                        src={enterpriseCenter}
                        alt="Enterprise Laptop"
                        className="hidden lg:block xl:hidden w-[80%] h-auto object-contain"
                    />

                    {/* Desktop version - visible from 1280px and above */}
                    <img
                        src={enterpriseCenter}
                        alt="Enterprise"
                        className=" hidden xl:block max-h-[80vh] max-w-[80%] object-contain"
                    />
                </div>

            </div>

            {/* Content overlay */}
            <div className="relative z-10 w-full flex items-center justify-center">
                <div className="text-center w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                    {/* Heading - responsive font sizes and spacing */}
                    <h1 className="text-white text-4xl sm:text-4xl md:text-[17px] lg:text-2xl xl:text-2xl font-normal
                     font-montserrat mb-3 sm:mb-4 md:mb-2 lg:mb-1 ">
                        Enterprise
                    </h1>

                    {/* Subtitle - responsive text and layout */}
                    <div className="text-white w-full text-sm sm:text-base md:text-[15px] lg:text-[20px] xl:text-[31px] font-bold font-montserrat mb-4 sm:mb-6 md:mb-3 lg:mb-7 space-y-1 sm:space-y-2">
                        <p className="leading-tight sm:leading-snug md:leading-normal">
                            National Wide & International SEO for Franchises and Multi-Location Businesses
                        </p>
                    </div>

                    {/* Button - responsive sizing */}
                    <button onClick={() => navigate('/contact')} className="bg-white/10 cursor-pointer  border-2 border-white text-white mt-4 sm:mt-0 py-3 px-10 sm:py-2.5 sm:px-6  md:px-5 lg:py-3.5 lg:px-8 rounded-lg font-semibold font-montserrat text-xl sm:text-base md:text-[10px] lg:text-[18px] shadow-lg -300">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Enterprise