
import { Check } from "lucide-react";
// import backgroundImage from "/assets/local_search.webp";
import dashboardImage2 from "/assets/Frame 1686555124.png";
import arrowIcon from "/assets/circle-arrow-right-01.png";
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function LocalSEOLanding() {
  const navigate = useNavigate()

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat seo-desktop  relative "
      // style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
    >
      
      <div className="w-full h-full">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:py-8 h-full flex items-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content - Text and CTA */}
            <div className="order-1 lg:order-1 text-white space-y-6 lg:space-y-8 lg:pr-8 pt-8 lg:pt-0 max-w-2xl lg:ml-10">
              <div className="space-y-4 lg:space-y-6 w-full">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
                  {/* Desktop layout (lg+) - Single line for each phrase */}
                  <div className="hidden lg:block">
                    <span className="whitespace-nowrap">
                      <span className="text-[#0063FF] font-montserrat">Rank Higher </span>
                      on{" "}
                      <span className="text-[#EA4335] font-montserrat">G</span>
                      <span className="text-[#FBBC05] font-montserrat">o</span>
                      <span className="text-[#34A853] font-montserrat">o</span>
                      <span className="text-[#4285F4] font-montserrat">g</span>
                      <span className="text-[#EA4335] font-montserrat">l</span>
                      <span className="text-[#34A853] font-montserrat">e</span> Maps &
                    </span>
                    <br />
                    <span className="text-white font-montserrat whitespace-nowrap">
                      Local Search in Just 60 Days
                    </span>
                  </div>

                  {/* Mobile layout - Multiple lines */}
                  <div className="lg:hidden text-center ">
                    <div className="whitespace-nowrap leading-13">
                      <span className="text-[#0063FF] text-4xl font-montserrat">Rank Higher</span>
                      <span className="text-white text-4xl font-montserrat"> on</span>
                    </div>
                    <div className="whitespace-nowrap text-4xl  font-montserra leading-13">
                      {/* on{" "} */}
                      <span className="text-[#EA4335] text-4xl font-montserrat">G</span>
                      <span className="text-[#FBBC05] text-4xl font-montserrat">o</span>
                      <span className="text-[#34A853] text-4xl font-montserrat">o</span>
                      <span className="text-[#4285F4] text-4xl font-montserrat">g</span>
                      <span className="text-[#EA4335] text-4xl font-montserrat">l</span>
                      <span className="text-[#34A853] text-4xl font-montserrat">e</span> Maps &
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="text-white text-4xl font-montserrat  leading-13">Local Search in</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="text-white text-4xl font-montserrat  leading-13">Just 60 Days</span>
                    </div>
                  </div>
                </h1>

                <p className="text-white text-[17px] sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal font-montserrat text-center lg:text-left leading-8">
                  Boost your Google rankings and organic traffic with backlinks
                  from trusted, niche-relevant websites. Our white-hat, manual
                  outreach strategy ensures safe, sustainable growth and real
                  SEO impact.
                </p>

              </div>
              <div className="flex flex-col items-center sm:items-start">

                <div className="space-y-3 w-full max-w-[320px] sm:max-w-none">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#0063FF] rounded-md flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-base font-normal font-montserrat block -mt-[1px]">
                      Do-follow backlinks from real sites
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#0063FF] rounded-md flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-base font-normal font-montserrat block -mt-[1px]">
                      Improved keyword rankings
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#0063FF] rounded-md flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-base font-normal font-montserrat block -mt-[1px]">
                      More traffic, leads, and conversions
                    </span>
                  </div>
                </div>
              </div>



              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-4">
                <button onClick={() => navigate('/contact')} className="bg-[#0063FF]  cursor-pointer sm:w-55 h-10 sm:h-17  font-semibold font-montserrat text-white px-8 py-4 rounded-[25px] text-xl sm:text-xl lg:text-xl inline-flex justify-center items-center gap-2">
                  Get Started
                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Image Only */}
            <div className="order-2 lg:order-2 relative w-full pt-0 pb-8 lg:mt-35">
              <div className="relative z-20 max-w-[430px] sm:max-w-[430px] md:max-w-[470px] lg:max-w-[600px] xl:max-w-[630px] mx-auto">
                {/* Dashboard Image */}
                <div className="relative mt-2">
                  <div className="rounded-2xl p-2">
                    <img
                      src={dashboardImage2}
                      alt="Analytics Dashboard showing growth metrics"
                      className="w-full sm:ml-10 h-auto rounded-xl mx-auto sm:mx-0"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
