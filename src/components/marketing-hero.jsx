import React from "react";
import backgroundImage from "../assets/Header.png";
import rightpic from "../assets/Group 1686555164.png";
import logo1 from "../assets/image 15.png";
import logo2 from "../assets/qt=q_95 1.png";
import { useNavigate } from 'react-router-dom'

export default function MarketingLanding() {
  const navigate = useNavigate()
  return (
    <section
      class="w-full bg-cover bg-no-repeat overflow-auto"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
    >
      <div className="w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 h-full flex items-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center w-full">
            {/* Left Content - Text and CTA */}
            <div className="order-1 lg:order-1 text-white space-y-6  lg:pt-0">
              <div className="space-y-3 lg:space-y-4">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat leading-tight text-center lg:text-left mt-10 sm:mt-20">
                  <span className="font-normal block sm:inline">MORE</span>
                  <span className="font-bold"> RANKING.</span>
                  <br /> {/* Only break on mobile */}
                  <span className="font-normal">MORE </span>
                  <span className="font-bold">CLICKS.</span>
                  <br /> {/* Only break on mobile */}
                  <span className="font-normal">MORE </span>
                  <span className="font-bold">REVENUE.</span>
                </h1>
                <p className="text-[15px] sm:text-xl lg:text-xl m-7 text-white leading-relaxed  max-w-[310px] sm:max-w-lg mx-auto lg:mx-0 text-center lg:text-left font-normal font-montserrat">
                  OTF Marketing is the full service marketing company helps businesses dominate on search. Get your business seen by customers consistently and watch your business grow.                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#0063FF] text-white px-6 py-2 sm:px-8 sm:py-3 sm:w-[180px] sm:h-[50px] lg:px-6 lg:py-3 lg:w-[170px] rounded-full font-bold font-montserrat text-sm sm:text-base w-[150px] h-[40px]">
                  Start Ranking
                </button>
                <button onClick={() => navigate('/contact')} className="cursor-pointer border-2 border-white/30 hover:border-white text-white px-6 py-2 sm:px-8 sm:py-3 sm:w-[180px] sm:h-[50px] lg:px-6 lg:py-3 lg:w-[170px] rounded-full font-bold font-montserrat text-sm sm:text-base w-[150px] h-[40px]">
                  Get Started
                </button>
              </div>
              {/* Company Logos */}
              <div className="flex justify-center lg:justify-start pt-6">
                <div className="flex items-center gap-6">
                  <img
                    src={logo1}
                    alt="UJC Logo"
                    className="h-12 sm:h-16 lg:h-20 w-auto"
                  />
                  <img
                    src={logo2}
                    alt="Electric Logo"
                    className="h-10 sm:h-12 lg:h-16 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Image */}
            <div className="order-2 lg:order-2 relative w-full pb-8 lg:pb-0">
              <div className="relative z-20 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
                <div className="rounded-3xl p-1">
                  <img
                    src="/src/assets/Group 1686555164.png"
                    alt="Mobile Dashboard"
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
