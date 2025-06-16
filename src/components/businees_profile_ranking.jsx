import backgroundImage from "../assets/businees_profile_ranking.png";
import rankingImage from "../assets/businees_profile_ranking_picture.png";
import arrowIcon from "../assets/circle-arrow-right-01.png";

import { useNavigate } from 'react-router-dom'

export default function BusinessProfileRanking() {
  const navigate = useNavigate()

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%", // Stretches to full width, height adjusts automatically
      }}
    >
      <div className="relative z-10 max-w-[1350px] w-full mx-auto px-4 sm:px-6   lg:py-24 flex items-center justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 sm:gap-8  items-center w-full">
          {/* Left Content */}
          <div className="order-1 lg:order-1 text-white space-y-8 p-6">
            <div>
              <h1 className="text-3xl sm:text-3xl lg:text-3xl xl:text-[43px] font-bold font-montserrat">
                {/* Large screens */}
                <div className="hidden lg:block leading-18">
                  <span className="text-[#0063FF]">Professional </span>
                  <span className="text-[#EA4335]">G</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#34A853]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#EA4335]">l</span>
                  <span className="text-[#34A853]">e </span>   
                  <span className="text-white ">My</span>
                  {/* <br /> */}
                  <span className="text-white block">
                   Business Profile Ranking
                  </span>
                </div>

                {/* Small/medium screens */}
                <div className="lg:hidden text-center pb-5 leading-12">
                  <div className="inline-block">
                    <div>
                      <span className="text-[#0063FF] text-4xl">
                        Professional
                      </span>
                    </div>
                    <div>
                      <span className="text-[#EA4335] text-4xl">G</span>
                      <span className="text-[#FBBC05] text-4xl">o</span>
                      <span className="text-[#34A853] text-4xl">o</span>
                      <span className="text-[#4285F4] text-4xl">g</span>
                      <span className="text-[#EA4335] text-4xl">l</span>
                      <span className="text-[#34A853] text-4xl">e</span> 
                    </div>
                    <div>
                      <span className="text-white text-4xl">
                        My Business Profile Ranking
                      </span>
                    </div>
                    {/* <div>
                      <span className="text-white text-4xl">
                        
                      </span>
                    </div> */}
                  </div>
                </div>
              </h1>

              <p className="text-[16px] sm:text-xl text-white max-w-[650px] font-normal font-montserrat leading-10">
                A roofing company moved from spot #7 to #2 in the map pack for
                "roof repair near me" and saw:
              </p>

              <ul className="leading-10 text-[16px] sm:text-lg font-montserrat pl-3">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>40% increase in phone calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>63% increase in website visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>20% increase in booked jobs</span>
                </li>
              </ul>

              <p className="text-white text-[16px] sm:text-lg font-montserrat leading-10">
                Similar results are reported for other local services as well,
                like medical practices, legal firms, and contractors.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button onClick={() => navigate('/contact')} className="bg-[#0063FF] cursor-pointer text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-[30px] font-semibold font-montserrat text-sm sm:text-base md:text-xl flex items-center gap-3">
                Get More Business
                <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-2 lg:order-2 flex justify-center">
            <div className="rounded-2xl">
              <img src={rankingImage} alt="Google My Business profile ranking improvement" className="w-full max-w-[500px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}