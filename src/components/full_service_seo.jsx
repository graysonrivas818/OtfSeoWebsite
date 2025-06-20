

import React, { useState, useRef, useEffect } from 'react';

// Mock images - replace with your actual imports
import marvelJacketBefore from '../assets/350_before.jpeg';
import marvelJacketAfter from '../assets/350_after.jpeg';
import packNFreshBefore from '../assets/211_before.jpeg';
import packNFreshAfter from '../assets/211_after.jpeg';
import aahandBefore from '../assets/360_before.jpeg';
import aahandAfter from '../assets/360_after.jpeg';
import unitedTeamBefore from '../assets/211_before.jpeg';
import unitedTeamAfter from '../assets/300_after.jpeg';
import afterIcon from '../assets/After.png';
import beforeIcon from '../assets/Before.png';
import mover from '../assets/Drag_Handle.png';
// import mover from '../assets/switch-base.png';
import backgroundImage from "../assets/full_service_bg.png";

export default function FullServiceSEO() {

  const caseStudies = [
    {
      id: 1,
      title: "Marvel Jacket",
      linksBuilt: 350,
      duration: "6 Months",
      beforeImage: marvelJacketBefore,
      afterImage: marvelJacketAfter,
      gradientPosition: "top-left"
    },
    {
      id: 2,
      title: "Pack N Fresh",
      linksBuilt: 211,
      duration: "4 Months",
      beforeImage: packNFreshBefore,
      afterImage: packNFreshAfter,
      gradientPosition: "top-right"
    },
    {
      id: 3,
      title: "Aahand",
      linksBuilt: 360,
      duration: "4 Months",
      beforeImage: aahandBefore,
      afterImage: aahandAfter,
      gradientPosition: "bottom-left"
    },
    {
      id: 4,
      title: "United Team",
      linksBuilt: 300,
      duration: "7 Months",
      beforeImage: unitedTeamBefore,
      afterImage: unitedTeamAfter,
      gradientPosition: "bottom-right"
    },
  ];
  const getGradientBorderClasses = (position) => {
    switch (position) {
      case "top-left":
        return "p-[1px] bg-gradient-to-br from-white/70 via-white/10 to-transparent rounded-xl";
      case "top-right":
        return "p-[1px] bg-gradient-to-bl from-white/40 via-white/10 to-transparent rounded-xl";
      case "bottom-left":
        return "p-[1px] bg-gradient-to-tr from-white/40 via-white/10 to-transparent rounded-xl";
      case "bottom-right":
        return "p-[1px] bg-gradient-to-tl from-white/40 via-white/10 to-transparent rounded-xl";
      default:
        return "p-[1px] rounded-3xl";
    }
  };

  // Separate Mobile Widget Component
  const MobileBeforeAfterWidget = ({ caseStudy }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const updateSliderPosition = (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
      e.stopPropagation();
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
    };

    const handleTouchEnd = (e) => {
      setIsDragging(false);
      e.stopPropagation();
    };

    const handleClick = (e) => {
      updateSliderPosition(e.clientX);
    };

    return (
      <div className={getGradientBorderClasses(caseStudy.gradientPosition)}>
        <div className="bg-[#1F345D] rounded-xl shadow-2xl overflow-hidden relative z-10">
          {/* Header with title and stats */}
          <div className="p-4 border-b border-slate-600">
            <div className="flex justify-center font-semibold font-sans mb-3">
              <h3 className="text-white text-lg font-semibold font-montserrat">{caseStudy.title}</h3>
            </div>

            <div className="flex px-4">
              <div className="flex-1 text-center">
                <div className="text-xs text-white font-montserrat mb-1">Links Built</div>
                <div className="bg-[#061D49] px-3 py-1 rounded-lg inline-block">
                  <span className="text-white text-sm  font-medium font-montserrat">{caseStudy.linksBuilt}</span>
                </div>
              </div>

              <div className="w-px h-12 bg-slate-300 mx-2 opacity-50"></div>

              <div className="flex-1 text-center">
                <div className="text-xs text-white font-montserrat mb-1">Duration Of Project</div>
                <div className="bg-[#061D49] px-3 py-1 rounded-lg inline-block">
                  <span className="text-white text-sm  font-montserrat font-medium">{caseStudy.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Slider - Mobile */}
          <div className="p-4">
            <div
              className="relative w-full h-48 bg-gray-900 rounded-md overflow-hidden select-none"
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleClick}
              style={{ touchAction: 'none' }}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <img
                  src={caseStudy.beforeImage}
                  alt={`${caseStudy.title} - Before SEO results`}
                  className="w-full h-full "
                  draggable={false}
                />
                {/* <div
    className="absolute top-0 left-0 w-full h-full bg-gray-500"
    style={{opacity:'0.2'}}
  ></div> */}
                <div className="absolute top-1 right-1 px-2 py-1">
                  <div className="flex items-center gap-1">
                    <img
                      src={beforeIcon}
                      alt="Before"
                      className="h-4 w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={caseStudy.afterImage}
                  alt={`${caseStudy.title} - After SEO results`}
                  className="w-full h-full"
                  draggable={false}
                />
                <div className="absolute top-1 left-1 px-2 py-1">
                  <div className="flex items-center gap-1">
                    <img
                      src={afterIcon}
                      alt="After"
                      className="h-4 w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Slider Line - Mobile */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <img
                      src={mover}
                      alt="slider icon"
                      // className="object-contain" 
                      style={{ height: '240px' }}  // Adjust this value as needed
                    // Or use a Tailwind class like h-6, h-8, etc.
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Desktop Widget Component
  const DesktopBeforeAfterWidget = ({ caseStudy }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const updateSliderPosition = (clientX) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      updateSliderPosition(e.clientX);
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      updateSliderPosition(e.touches[0].clientX);
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const handleContainerClick = (e) => {
      if (e.type === 'click') {
        updateSliderPosition(e.clientX);
      }
    };

    useEffect(() => {
      const handleGlobalMouseMove = (e) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();
      const handleGlobalTouchMove = (e) => handleTouchMove(e);
      const handleGlobalTouchEnd = () => handleTouchEnd();

      if (isDragging) {
        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
        document.addEventListener('touchend', handleGlobalTouchEnd);

        return () => {
          document.removeEventListener('mousemove', handleGlobalMouseMove);
          document.removeEventListener('mouseup', handleGlobalMouseUp);
          document.removeEventListener('touchmove', handleGlobalTouchMove);
          document.removeEventListener('touchend', handleGlobalTouchEnd);
        };
      }
    }, [isDragging]);

    return (
      <div className={getGradientBorderClasses(caseStudy.gradientPosition)}>
        <div className="bg-[#1F345D] rounded-xl shadow-2xl overflow-hidden relative z-10">
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left Container */}
              <div className="w-full md:w-1/3 font-semibold ">
                <h3 className="text-white text-2xl font-medium font-montserrat mb-8 tracking-wide">{caseStudy.title}</h3>

                {/* Links Built Section */}
                <div className="mb-6">
                  <div className="text-sm text-white mb-2 font-thin font-montserrat tracking-wider">Links Built</div>
                  <div className="text-xl font-bold text-white">
                    <div className="inline-flex items-center text-sm font-thin font-montserrat justify-center w-16 h-9 bg-[#061D49] rounded-lg">
                      {caseStudy.linksBuilt}
                    </div>
                  </div>
                </div>

                {/* Dotted Divider */}
                <div className="my-3">
                  <div className="border-b border-dashed border-white tracking-wider w-1/3"></div>
                </div>

                {/* Duration Section */}
                <div>
                  <div className="text-sm text-white mb-2 font-thin font-montserrat tracking-wider">Duration Of Project</div>
                  <div className="inline-flex items-center justify-center font-montserrat text-sm w-24 h-9 bg-[#061D49] font-thin rounded-lg text-white">{caseStudy.duration}</div>
                </div>
              </div>

              {/* Right Container with Before/After Images */}
              <div className="w-full md:w-[450px] flex justify-center">
                <div
                  className="relative w-full max-w-[650px] h-[240px] bg-gray-900 rounded-xl overflow-hidden cursor-ew-resize select-none shadow-lg"
                  ref={containerRef}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  onClick={handleContainerClick}
                >
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <img
                      src={caseStudy.beforeImage}
                      alt={`${caseStudy.title} - Before SEO results`}
                      className="w-full h-full "
                      draggable={false}
                      onError={(e) => {
                        e.target.onerror = null;
                      }}
                    />
                    {/* <div
    className="absolute top-0 left-0 w-full h-full bg-gray-500"
    style={{opacity:'0.2'}}
  ></div> */}
                    <div className="absolute top-1 right-1 px-2 py-1 ">
                      <div className="flex items-center gap-1">
                        <img
                          src={beforeIcon}
                          alt="Before"
                          className="h-4 w-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* After Image */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src={caseStudy.afterImage}
                      alt={`${caseStudy.title} - After SEO results`}
                      className="w-full h-full"
                      draggable={false}
                      onError={(e) => {
                        e.target.onerror = null;
                      }}
                    />
                    <div className="absolute top-1 left-1 px-2 py-1">
                      <div className="flex items-center gap-1">
                        <img
                          src={afterIcon}
                          alt="After"
                          className="h-4 w-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 h-100px"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-ew-resize">
                      <img
                        src={mover}
                        alt="slider icon"
                        // className="object-contain" 
                        style={{ height: '240px' }}  // Adjust this value as needed
                      // Or use a Tailwind class like h-6, h-8, etc.
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative  py-12"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-white text-sm lg:text-[22px] mb-4 font-bold font-montserrat">
            Maximize your visibility
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-5xl font-bold font-montserrat text-white mb-16 leading-12">
            {/* Mobile/small screens - single line */}
            <span className="lg:hidden">
              Full Service SEO with{" "}
              <span className="text-[#146BFE]">Measurable Results.</span>
            </span>

            {/* Large screens - broken into two lines */}
            <span className="hidden lg:block font-montserrat pd-5 leading-19">
              Full Service SEO with
              <br />
              <span className="text-[#146BFE]">Measurable Results.</span>
            </span>
          </h2>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:mx-20">
            {caseStudies.map((study) => (
              <div key={study.id}>
                {/* Mobile Widget */}
                <div className="sm:hidden">
                  <MobileBeforeAfterWidget caseStudy={study} />
                </div>
                {/* Desktop Widget */}
                <div className="hidden sm:block">
                  <DesktopBeforeAfterWidget caseStudy={study} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}