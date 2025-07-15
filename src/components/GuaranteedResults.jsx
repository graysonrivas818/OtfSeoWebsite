import backgroundImage from "/assets/gurarented_result_bg.webp";
import resultImage1 from "/assets/gurarented_result_1.png";
import resultImage2 from "/assets/gurarented_result_2.png";
import resultImage3 from "/assets/gurarented_result_3.png";
import resultImage4 from "/assets/gurarented_result_4.png";
import resultImage5 from "/assets/gurarented_result_5.png";
import resultImage6 from "/assets/gurarented_result_6.png";

export default function GuaranteedResultsSEO() {
    const services = [
        "High-Quality Backlinks",
        "White Hat SEO Only",
        "GMB Optimization",
        "On-Page & Technical Fixes",
        "High-Quality Backlinks",
        "Keyword-Optimized Content",
        "Clear Monthly Reports",
        "Site Speed Optimization",
        "Local Citations"
    ];


    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-16 relative"
            
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
        >



            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6">
                
                {/* Services Feature List */}


                {/* Main Header */}
                <div className="text-center mb-9">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat text-white mb-2 leading-tight">
                        {/* Mobile/small screens - single line */}
                        <span className="lg:hidden">
                            Our SEO Services <span className="text-[#0063FF]">Deliver </span>
                            
                            <span className="text-[#0063FF]">Results Guaranteed!</span>
                        </span>

                        {/* Large screens - proper line breaks */}
                        <span className="hidden lg:block  text-5xl leading-16">
                            Our SEO Services <span className="text-[#0063FF]">Deliver</span>
                            <br />
                            <span className="text-[#0063FF]">Results Guaranteed!</span>
                        </span>
                    </h2>
                </div>
                <div className="text-center mb-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Mobile view - single column */}
<div className="flex flex-col items-center sm:items-start space-y-3 mb-8 md:hidden w-full">
  {services.map((service, index) => (
    <div 
      key={index} 
      className="flex items-start gap-3 w-full max-w-[320px] sm:max-w-none"
    >
      <div className="flex-shrink-0 w-5 h-5 bg-[#0063FF] rounded-full flex items-center justify-center mt-0.5">
        <svg
          className="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <circle cx="10" cy="10" r="8" fill="#0063FF" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-white text-base font-normal font-montserrat block -mt-[1px]">
        {service}
      </span>
    </div>
  ))}
</div>

                        {/* Desktop view - multi-row flex */}
                        <div className="hidden md:flex flex-wrap justify-center items-center font-sans gap-4 lg:gap-6 mb-8">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-2 text-white">
                                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm lg:text-base font-medium  font-montserrat whitespace-nowrap">
                                        {service}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Results Grid - Custom Layout */}
                <div className="w-full hidden sm:block ">
                    <div className="grid grid-cols-12  mx-20 lg:gap-3">
                        {/* Left Column - 2 stacked cards */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4 lg:space-y-3">
                            {/* Conversion Rate Card */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src={resultImage1}
                                    alt="Conversion rate analytics showing 340 conversions with 27.14% increase"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Traffic Rate Card */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img

                                    src={resultImage2}
                                    alt="Traffic rate dashboard showing 10.8K total clicks and 906.4K search impressions"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Center Column - RANK #1 Card */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="bg-white rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <img

                                    src={resultImage3}
                                    alt="Google search rankings showing #1 position for multiple search queries"
                                    className="w-auto h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Column - 3 cards */}
                        <div className="col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-3">
                            {/* Traffic Increase Map */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    //   src={resultImage5}
                                    src={resultImage4}
                                    alt="Traffic increase heat map showing improved local visibility"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Organic Traffic Chart */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src={resultImage5}
                                    alt="Organic traffic growth chart showing 249.3K impressions over time"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Analytics Dashboard - spans full width */}
                            <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src={resultImage6}
                                    alt="Complete analytics dashboard showing clicks, impressions, CTR and position metrics"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

