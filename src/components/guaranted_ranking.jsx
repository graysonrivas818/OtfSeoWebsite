import { Check } from "lucide-react";
import backgroundImage from "/assets/map_guaranted.png";
import searchImage from "/assets/Group 1686555130.png";
import { useNavigate } from 'react-router-dom'
import arrowIcon from "/assets/circle-arrow-right-01.png";


export default function LocalSEOLanding() {
  const navigate = useNavigate()

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat overflow-auto"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}

    >

      <div className="w-full h-full bg-opacity-70">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-12 lg:py-24 h-full flex items-center">
          <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4 lg:gap-6 items-center w-full">
            {/* Right Content - Search Image (now on left) */}
            <div className="order-2 lg:order-1  relative w-full">
              <div className="rounded-2xl p-2 -ml-6 lg:-ml-12">
                <img
                  src={searchImage}
                  alt="Google search results showing top rankings"
      className="w-full max-w-[550px] h-auto rounded-xl mx-auto"
                />
              </div>
            </div>

            {/* Left Content - Text and CTA (now on right) */}
            <div className="order-1 lg:order-2  text-white space-y-6 lg:space-y-8 ">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[50px] font-bold font-montserrat leading-tight">
                  {/* Desktop layout (lg+) - Single line with line break */}
                  <div className="hidden lg:block">
                    <span className="whitespace-nowrap text-[#0063FF]">
                      Climb to the <span className="text-white">#1 Spot on </span>
                      <br />
                      <span className="text-[#EA4335]">G</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#34A853]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#EA4335]">l</span>
                      <span className="text-[#34A853]">e</span>
                      <span className="text-white"> Maps Guaranteed!</span>
                    </span>
                  </div>
                  {/* Mobile layout (lg-) - Stacked lines with centered text */}
                  <div className="lg:hidden text-center leading-10">
                    <div className="whitespace-nowrap">
                      <span className="text-[#0063FF] text-4xl">Climb to the #1 </span>
                    </div>
                    <div className="whitespace-nowrap ">
                      <span className="text-white text-4xl ">Spot on </span>
                      {/* </div>
                        <div className="whitespace-nowrap"> */}
                      <span className="text-[#EA4335] text-4xl">G</span>
                      <span className="text-[#FBBC05] text-4xl">o</span>
                      <span className="text-[#34A853] text-4xl">o</span>
                      <span className="text-[#4285F4] text-4xl">g</span>
                      <span className="text-[#EA4335] text-4xl">l</span>
                      <span className="text-[#34A853] text-4xl">e</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="text-white text-4xl ">Maps</span>
                    </div>

                    <div className="whitespace-nowrap">
                      <span className="text-white text-4xl "> Guaranteed!</span>
                    </div>
                  </div>
                </h1>


                <p className="text-white text-[17px] sm:text-lg w-full max-w-full p-1 mx-auto text-center sm:text-center lg:text-left font-normal font-montserrat leading-relaxed block sm:hidden">
We help you reach the top of Google Maps with complete SEO solutions. Optimizing everything from your content and keywords to technical performance and backlinks. Whether local or national, we drive long-term growth, higher rankings, and real results or your money back.                </p>

                <p className="text-white text-base w-full sm:text-lg max-w-3xl text-center sm:text-center lg:text-left font-light font-montserrat leading-10 hidden sm:block">
                  We help you reach the top of Google with complete SEO solutions. Optimizing everything from your content and keywords to technical performance and backlinks. Whether local or national, we drive long-term growth, higher rankings, and real results or your money back.
                  Our strategies are data-driven, ethical, and tailored to your business goals. No shortcuts. Just consistent visibility, traffic, and ROI that compounds over time.
                </p>

              </div>



              {/* CTA Button */}
              <div className="pt-4 ">
                <div className="flex justify-center sm:justify-start">
                  <button onClick={() => navigate('/contact')} className="bg-[#0063FF] cursor-pointer sm:w-4- h-10 sm:h-17 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-[25px] font-semibold font-montserrat text-xl sm:text-xl lg:text-xl duration-200 flex items-center justify-center gap-2">
                    Rank #1
                    <img src={arrowIcon}alt="arrow" className="w-5 h-5" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}