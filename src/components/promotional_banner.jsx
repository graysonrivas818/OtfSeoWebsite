import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import contentImage from "../assets/promotional_banner_bg.png";
import centerBlueImage from "../assets/center_blue_images.png";
import centerBlueImageMobile from "../assets/center_blue_images_mobile1.png";
// import centerBlueImageMobile from "../assets/center_blue_images_mobile.png";
import arrowIcon from "../assets/circle-arrow-right-01.png";

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
            <div className="w-full h-full relative">
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
                            className="hidden sm:block w-[100%] max-w-[1400px] object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" />

                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-16 px-6 md:py-24">
                        {/* Desktop version */}
                        {!isMobile && (
                            <>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                                    <span className="text-black">Rank #1</span> Guaranteed
                                </h2>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                                    Or We Work For Free!
                                </h2>
                                <p className="max-w-2xl md:max-w-3xl text-base md:text-lg mb-10 font-montserrat">
                                    We back our plans with a 60 day money back guarantee if they do not see measurable results and we also guarantee #1 rankings or we will work for free until you are ranked #1.
                                </p>
                                <button onClick={() => navigate('/contact')} className="bg-[#0a2952] cursor-pointer text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-[30px] font-semibold font-montserrat text-sm md:text-base lg:text-lg flex items-center gap-2">
                                    Get Started
                                    <img src={arrowIcon} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
                                </button>

                            </>
                        )}


                        {isMobile && (
                            <>
                                <h2 className="text-xl font-bold font-montserrat">
                                    Rank #1 Guaranteed
                                </h2>
                                <h2 className="text-xl font-bold mb-4 font-montserrat">
                                    Or We Work For Free!
                                </h2>
                                <p className="text-[15px] mb-4 max-w-[280px] font-montserrat">
                                    We back our plans with a 60 day money back guarantee if they do not see measurable results and we also guarantee #1 rankings or we will work for free until you are ranked #1.
                                </p>
                                <button onClick={() => navigate('/contact')} className="bg-[#0a2952] m-3 cursor-pointer text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-8 rounded-full font-semibold font-montserrat text-base sm:text-xl md:text-2xl flex items-center gap-4 mx-auto">
                                    Get Started
                                    <img
                                         src={arrowIcon}
                                        alt="arrow"
                                        className="w-5 h-5 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
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