import { useNavigate } from 'react-router-dom'
import browsePlanBg from "../assets/Browse_plan_bg.png";
import otfForPricing from "../assets/otf_for_pricing.png";

const BrowsePlans = () => {
  const navigate = useNavigate()

  const plans = [
    {
      title: "Rank #1 - Website",
      subtitle: "For Businesses Looking to Rank on Search",
      price: "$2,500",
      period: "/mo",
      priceNote: "*Estimated Price Based Average Client Rate",
      featured: false,
      searchPlatform: "Google Search",
      timeline: "*Estimated 7-12 Months",
      reporting: ["Monthly Search Rank Results", "Monthly Search Traffic Reports"],
      keywords: "10 Keywords",
      isPopular: false

    },
    {
      title: "Rank #1 - Website + GMB",
      subtitle: "For Businesses Looking to Dominate Search",
      price: "$3,500",
      period: "/mo",
      priceNote: "*Estimated Price Based Average Client Rate",
      featured: true,
      searchPlatform: "Google Search + Google Maps",
      timeline: "*Estimated 7-12 Months",
      reporting: ["Monthly GMB & SEO Rank Results", "Monthly Search Traffic Reports"],
      keywords: "12 Keywords",
      isPopular: true
    },
    {
      title: "Rank #1 - Website + GMB",
      subtitle: "For Businesses Looking to Close More Fast",
      price: "$7,500",
      period: "/mo",
      priceNote: "*Estimated Price Based Average Client Rate",
      featured: false,
      searchPlatform: "Google Search + Google Maps",
      timeline: "*Estimated 5-9 Months",
      reporting: ["Monthly GMB & SEO Rank Results", "Monthly Search Traffic Reports"],
      keywords: "20 Keywords",
      isPopular: false

    },
  ]

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-16 relative "
      style={{  backgroundImage: `url('${browsePlanBg}')`, backgroundSize: "100% 100%", }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        {/* Header */}
        <div className="text-center  mb-5 sm:mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-3">
            Browse <span className="text-[#0063FF]">Plans</span>
          </h2>
          <p className="text-white text-[13px] md:text-xl font-montserrat   max-w-[310px] sm:max-w-[800px] mx-auto leading-relaxed">
            All plans are backed by our 60 Day Measurable Results Money Back Guarantee & Our Rank #1 Guarantee!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                  backdrop-blur-sm pt-5 pb-5 rounded-2xl p-4 border 
                  ${plan.featured ? "bg-[#006BFF]/90 border-white transform lg:scale-108 lg:shadow-2xl" : "bg-[#1E335B]/80 border-white"}
                  max-w-[320px] sm:max-w-[360px] mx-auto w-full
                `}

            >
               
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-white text-[19px] font-bold font-montserrat mb-2">{plan.title}</h3>
                <p className="text-white text-[12px] font-montserrat mb-4">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-white text-4xl font-bold font-montserrat">{plan.price}</span>
                  <span className="text-white/80 text-lg font-montserrat ml-1">{plan.period}</span>
                </div>
                <p className="text-white/60 text-xs font-montserrat mb-5">{plan.priceNote}</p>

                {/* CTA Button */}
                <button
                  onClick={() => navigate('/contact')}
                  className={`
                                    w-full py-3  cursor-pointer px-6 rounded-lg font-semibold font-montserrat transition-all duration-300
                                    ${plan.featured
           ? "bg-[#1F345C] text-white hover:bg-gray-100 hover:text-[#1F345C]"
: "bg-blue-600 text-white hover:bg-gray-100 hover:text-blue-600"
                    }
                                `}
                >
                  Rank #1 Guaranteed
                </button>
              </div>

              {/* Plan Features */}
              <div className="space-y-6">
                {/* Search Platform */}
                <div>
                  <h4 className="text-white font-semibold font-montserrat mb-1 text-sm">
                    Search Platform
                  </h4>
                  <p className="text-white/80 text-sm font-montserrat mb-0">
                    {plan.searchPlatform}
                  </p>
                  <span className="border border-white/20 block w-full mt-3"></span>

                </div>

                {/* Timeline Section */}
                <div>
                  <h4 className="text-white font-semibold font-montserrat mb-2 text-sm">
                    Rank #1 Timeline
                  </h4>
                  <p className="text-white/80 text-sm font-montserrat">{plan.timeline}</p>
                  <span className="border border-white/20 block w-full mt-3"></span>

                </div>


                {/* Reporting Section */}
                <div>
                  <h4 className="text-white font-semibold font-montserrat mb-2 text-sm">
                    Reporting
                  </h4>
                  <div className="space-y-1">
                    {plan.reporting.map((item, idx) => (
                      <p key={idx} className="text-white/80 text-sm font-montserrat">
                        {item}
                      </p>
                    ))}
                  </div>
                  <span className="border border-white/20 block w-full mt-3"></span>

                </div>



                {/* Keywords Section */}
                <div>
                  <h4 className="text-white font-semibold font-montserrat mb-2 text-sm">
                    Keywords
                  </h4>
                  <p className="text-white/80 text-sm font-montserrat">{plan.keywords}</p>
                </div>
 {/* OTF Logo - Bottom Right */}
                            <div className="absolute bottom-4 right-4">
                                <div className="p-2">
                                    <img
                                        src={otfForPricing}
                                        alt="OTF Logo"
                                        className="w-15 h-15 object-contain"
                                    />
                                </div>
                            </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowsePlans
