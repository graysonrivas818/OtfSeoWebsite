import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import contentImage from "/assets/promotional_banner_bg.png";
import centerBlueImage from "/assets/center_blue_images.png";
import centerBlueImageMobile from "/assets/center_blue_images_mobile1.png";
// import centerBlueImageMobile from "/assets/center_blue_images_mobile.png";
import arrowIcon from "/assets/circle-arrow-right-01.png";

import { useNavigate } from 'react-router-dom'

// Define useMobile here if you don't have it already
function useMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

export default function PromotionalBanner() {
    const isMobile = useMobile()
    const navigate = useNavigate()

    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat  py-8 lg:py-13  relative"
            style={{ backgroundImage: `url(${contentImage})`, backgroundSize: "100% 100%" }}
        >
            <div className="w-full h-full max-w-[1600px] mx-auto relative">
                {/* Image wrapper - make sure it's relative */}
                <div className="relative xl:mt-2 w-full rounded-3xl">
                    {/* Background images */}
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <img
                            src={centerBlueImageMobile}
                            alt="Enterprise Mobile"
                            className="block sm:hidden w-[100%] max-w-[400px]"
                        />

                        {/* Desktop version - centered vertically and horizontally */}
                        <img
                            src={centerBlueImage}
                            alt="Enterprise"
                            className="hidden sm:block w-[100%] max-w-[1550px] object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" />

                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-white justify-center text-center py-16 px-6 md:py-30">
                        {/* Desktop version */}
                        {!isMobile && (
                            <>
                                <h2 className="text-4xl md:text-[50px] font-extrabold text-white mb-4 font-montserrat">
                                    <span className="text-[#061D49]">Rank #1</span> Guaranteed
                                </h2>
                                <h2 className="text-4xl md:text-[50px]  text-white font-extrabold mb-6 font-montserrat">
                                    Or We Work For Free!
                                </h2>
                                <p className="max-w-2xl md:max-w-[735px]  text-white/70 text-base md:text-[19px] mb-10  font-montserrat">
                                    We back our plans with a 60 day money back guarantee if you do not see measurable results and we also guarantee #1 rankings or we will work for free until you are ranked #1!.
                                </p>
                                <button onClick={() => navigate('/contact')} className="bg-[#0a2952] cursor-pointer text-white px-4 py-2 md:px-6 md:py-3 lg:px-10 lg:py-4 rounded-[25px] font-semibold font-montserrat text-sm md:text-base lg:text-xl flex items-center gap-2">
                                    Get Started
                                    <img src={arrowIcon} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
                                </button>

                            </>
                        )}


                        {isMobile && (
                            <>
                                <h2 className="text-[21px] font-black font-montserrat">
                                    Rank #1 Guaranteed
                                </h2>
                                <h2 className="text-[21px] font-black mb-4 font-montserrat">
                                    Or We Work For Free!
                                </h2>
                                <p className="text-[14px] text-white/80 mb-4 max-w-[290px] font-montserrat">
                                    We back our plans with a 60 day money back guarantee if you do not see measurable results and we also guarantee #1 rankings or we will work for free until you are ranked #1!.
                                </p>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="
    bg-[#002B70] m-3 cursor-pointer text-white 
    px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 lg:px-20 lg:py-9 
    rounded-full font-semibold font-montserrat 
    text-lg sm:text-2xl md:text-3xl lg:text-4xl
    flex items-center gap-4 mx-auto
  "
                                >
                                    Get Started
                                    <img
                                        src={arrowIcon}
                                        alt="arrow"
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                                    />
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}