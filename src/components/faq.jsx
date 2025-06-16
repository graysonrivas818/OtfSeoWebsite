import { useState,useEffect } from 'react';
import FAQbg from '../assets/FAQ_bg.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Desktop: open first FAQ by default
        setActiveIndex(0);
      } else {
        // Mobile: close all FAQs
        setActiveIndex(null);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqs = [
    {
      question: "What is OTF Marketing?",
      answer: "OTF Marketing is a small team of experts that specialize in SEO optimization services. We offer a seamless marketing experience that will not only deliver for your business, we guarantee it by proving it upfront. Our team will go above and beyond to scale your business. Creating a custom tailored strategy for your business based on your goals that will not only work for your business, but has worked for a number of other businesses before. We not only run ads, we analyze and optimize every step of your customers journey to ensure you maximize your investment. We offer our services upfront to qualified companies that are looking to expand and grow at a rapid rate. We look forward to collaborating with your business!"
    },
    {
      question: "What SEO services does OTF Marketing offer?",
      answer: "We offer a full range of SEO services including keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, and performance tracking to help boost your website's ranking and traffic."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "Typically, you can expect to see initial results within 3-6 months, with more significant improvements appearing after 6-12 months of consistent optimization efforts."
    },
    {
      question: "How are you better than other agencies?",
      answer: "We provide transparent reporting, measurable results guarantees, and customized strategies tailored to your specific business goals rather than using a one-size-fits-all approach."
    },
    {
      question: "Do I need to make a new website if I am doing SEO?",
      answer: "Not necessarily. We can optimize your existing website in most cases, though sometimes a redesign may be recommended if the site has significant technical issues."
    },
    {
      question: "Is it possible for me to cancel at any time?",
      answer: "Our SEO services are flexible, and you can cancel at any time—no long-term contracts or hidden fees. We believe in earning your trust month by month. "
    },
    {
      question: "Can SEO guarantee #1 rankings on Google?",
      answer: "Yes — we guarantee our commitment, expertise, and proven strategies that have helped many clients reach the #1 position."
    },
    {
      question: "Do I need SEO if I’m already running paid ads?",
      answer: "Yes, SEO complements paid ads by providing long-term, organic visibility. While ads stop when the budget runs out, SEO builds lasting traffic and trust—helping reduce overall marketing costs over time."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-24 relative"
      style={{ backgroundImage: `url(${FAQbg})`, backgroundSize: "100% 100%" }}
    >
        <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-7 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6">
            FAQ's
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden w-full transition-all duration-300 ${activeIndex === index && window.innerWidth >= 768 ? 'border-2 border-white' : 'border-2 border-transparent'
                } min-h-[80px] sm:min-h-auto flex flex-col justify-center`}
            >
              <button
                className={`w-full flex justify-between items-center text-left transition-all duration-300 ${activeIndex === index ? 'p-6' : 'p-4 md:p-6'}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-white text-lg md:text-xl font-medium font-montserrat">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-white transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`px-6 pb-6 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-white/80 font-thin font-montserrat leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FAQ;