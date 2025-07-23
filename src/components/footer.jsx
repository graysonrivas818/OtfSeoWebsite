import React from 'react';
import otfLogo from "/assets/otf_footer logo.png";
import Meta from "/assets/Meta.png";
import Google from "/assets/google.png";
import LinkedIn from "/assets/linkedin.png";
import Instagram from "/assets/instagram.png";
import GoogleGuaranteed from "/assets/google_guaranteed.png";

import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white/80">
            {/* Desktop Layout */}
            <div className="hidden md:block max-w-[1400px] mx-auto">
                <div className="max-w-8xl mx-auto px-6 pt-29 pb-17">
                    {/* Increased gap from 6 to 16 for more space */}
                    <div className="grid grid-cols-12">
                        {/* Left Section - Logo and Tagline */}
                        <div className="col-start-2 col-span-5">
                            <div className="mb-6">
                                <img src={otfLogo} alt="OTF Marketing" className="h-21 mb-4" />
                                <h2 className="text-[27px] font-normal font-montserrat leading-relaxed">
                                    Streamline Your Marketing<br />
                                    and Maximize Your Growth
                                </h2>
                            </div>
                        </div>

                        {/* Middle Section - Contact */}
                        <div className="col-span-3">
                            <h3 className="text-[17px] font-semibold font-montserrat mb-7 tracking-wide">
                                CONTACT US
                            </h3>
                            <div className="space-y-1">
                                <p className="text-[13px]  font-bold font-montserrat leading-3">
                                    MAIL US DIRECTLY
                                </p>
                                <p className="text-[20px] font-normal font-montserrat leading-relaxed">
                                    sales@otf.marketing
                                </p>
                                <p className="text-[16px] font-normal font-montserrat leading-relaxed">
                                    Phone number
                                </p>
   <p 
  className="text-[16px] font-normal font-montserrat leading-relaxed hover:underline cursor-pointer"
  onClick={() => window.location.href = 'tel:813-669-7356'}
>
  813-669-7356
</p>
                            </div>
                        </div>

                        {/* Right Section - Company */}
                        <div className="col-span-3">
                            <h3 className="text-[17px] font-semibold font-montserrat mb-7 tracking-wide">
                                COMPANY
                            </h3>
                            <div className="space-y-2">
                                <HashLink smooth to="/#seoteam" className="block text-[15px] font-normal font-montserrat leading-5">
                                    SEO Team
                                </HashLink>
                                <HashLink smooth to="/#pricing" className="block text-[15px] font-normal font-montserrat leading-5">
                                    Pricing
                                </HashLink>
                                <a
                                    href="https://ads.otf.marketing/"
                                    className="block text-[15px] font-normal font-montserrat leading-5"
                                    rel="noreferrer"
                                >
                                    Advertising
                                </a>
                                <Link to="/contact" className="block text-[15px] font-normal font-montserrat leading-5">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full mx-auto flex flex-col items-center">
                    {/* Main container with extra-wide width */}
                    <div className="pt-5 w-full max-w-[1290px]  mx-auto flex flex-row items-center justify-between gap-4 px-6">
                        {/* Left - Copyright */}
                        <div className="text-xl font-normal    font-montserrat text-center text-white/80">
                            2025 OTF Marketing All Rights Reserved
                        </div>

                        {/* Center - Partner Logos in a row */}
                        <div className="flex flex-row items-center justify-center gap-8 flex-nowrap ">
                            <img src={Meta} alt="Meta" className="h-20" />
                            <img src={GoogleGuaranteed} alt="Google Guaranteed" className="h-12    " />
                            <img src={Google} alt="Google Partner" className="h-25" />
                            <a href="https://www.linkedin.com/in/sam-watts-2a4842b6/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" className="h-7" />
                            </a>

                            <a href="https://www.instagram.com/otfmarketing/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" className="h-7" />
                            </a>
                        </div>

                    </div>


                    {/* Extra-wide divider line */}

                </div>
                <div className="w-full max-w-[1250px] px-6 mx-auto mt-1 mr-4">
                    <div className="flex items-center pb-6">
                        <div className="w-full border-t border-white/30"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
                <div className="px-6 py-8">
                    {/* Logo and Tagline */}
                    <div className="mb-8">
                        <img
                            src={otfLogo}
                            alt="OTF Marketing"
                            className="h-17 mb-4"
                        />
                        <h2 className="text-md font-normal text-white font-montserrat ">
                            Streamline Your Marketing and<br />
                            Maximize Your Growth
                        </h2>
                    </div>

                    {/* Company Section */}

                    <div className="mb-8">
                        <h3 className="text-md font-semibold font-montserrat mb-4 tracking-wide">COMPANY</h3>
                        <div className="space-y-3">
                            <HashLink smooth to="/#seoteam" className="block text-[15px] font-montserrat leading-3">
                                SEO Team
                            </HashLink>

                            {/* HashLink will take you back to home and scroll smoothly to #packages */}
                            <HashLink smooth to="/#pricing" className="block text-[15px] font-montserrat leading-3">
                                Pricing
                            </HashLink>
                            {/* <HashLink smooth to="/#about" className="block text-[15px] font-montserrat leading-3">
                                Advertising
                            </HashLink> */}
                            <a
                                href="https://ads.otf.marketing/"
                                className="block text-[15px] font-montserrat leading-3" rel="noreferrer"
                            >
                                Advertising
                            </a>

                            <Link to="/contact" className="block text-[15px] font-montserrat leading-3">
                                Contact Us
                            </Link>
                        </div>
                    </div>


                    {/* Contact Section */}
                    <div className="mb-8">
                        <h3 className="text-md font-semibold font-montserrat mb-4 tracking-wide">CONTACT US</h3>
                        <div className="space-y-2">
                            <p className="text-[15px] font-normal font-montserrat">Mail us directly</p>
                            <p className="text-[14px] font-montserrat">sales@otf.marketing</p>
                            <p className="text-[14px] font-montserrat">Phone number</p>
                            <p className="text-[14px] font-montserrat"  onClick={() => window.location.href = 'tel:813-669-7356' }>813-669-7356</p>
                        </div>
                    </div>

                    {/* Partner Logos */}
                    <div className="">
                        <div className="flex justify-between items-center mx-auto  ">
                            <img src={Meta} alt="Meta" className="h-19" />
                            <img src={GoogleGuaranteed} alt="Google Guaranteed" className="h-10" />
                            <img src={Google} alt="Google Partner" className="h-22" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-around items-center mx-1">
                            <a href="https://www.linkedin.com/in/sam-watts-2a4842b6/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" className="h-6" />
                            </a>

                            <a href="https://www.instagram.com/otfmarketing/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" className="h-6" />
                            </a>

                        </div>
                    </div>
                    <div className="relative max-w-4xl mx-auto mt-2">
                        <div className="set-0 flex items-center pb-5">
                            <div className="w-full border-t border-gray-500"></div>
                        </div>

                    </div>
                    {/* Copyright */}
                    <div className="text-sm font-montserrat text-gray-400 text-center">
                        2025 OTF Marketing All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;