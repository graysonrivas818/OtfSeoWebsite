import React from "react";
import bgImage from "/assets/mission_is_rank_1_bg.webp";
import contentImage from "/assets/mission_is_rank_1_content.png";
import arrowIcon from "/assets/circle-arrow-right-01.png";

import { useNavigate } from 'react-router-dom'

export default function MissionToRankOne() {
  const navigate = useNavigate()

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "100% 100%", }}
    >


      <div className="relative z-10 w-full lg:max-w-[1200px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 py-16 lg:py-16 flex flex-col lg:flex-row items-center justify-center">
        {/* Content - Order changes based on screen size */}
        <div className="order-1 lg:order-2 lg:pl-[60px] text-white max-w-2xl sm:max-w-2xl lg:max-w-3xl xl:max-w-3xl space-y-4 lg:space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.5] font-montserrat text-white">
            <span className="text-[#0063FF]">
              Our Mission is to Rank #1,
              {/* <span className="text-white"> in</span> */}
            </span>
            <br className="hidden lg:block" />
            <span className="text-white"> in Every Niche We Touch</span>
          </h2>


          <p
            className="text-white  text-[16px] sm:text-xl lg:text-xl font-normal font-montserrat leading-9"
          >
            At OTF, we don't just aim to compete — we're built to lead. Our mission is simple: help brands reach and stay at the top. Whether it's search rankings, product visibility, or brand authority, our goal is to drive you to #1 in your niche — and keep you there.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start  mb-10 sm:mb-0">
            <button onClick={() => navigate('/contact')} className="bg-[#0063FF] cursor-pointer sm:w-55 h-10 sm:h-17 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-[25px] font-semibold font-montserrat text-xl sm:text-xl lg:text-xl duration-200 flex items-center justify-center gap-2">
              Get Started
              <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
            </button>
          </div>

        </div>

        <div className="order-2 lg:order-1 text-center sm:text-left">
          <img
            src={contentImage}
            alt="Mission to Rank #1"
            className="inline-block w-full max-w-[500px] h-auto"
          />
        </div>

      </div>
    </section>
  );
}