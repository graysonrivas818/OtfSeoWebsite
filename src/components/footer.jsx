import React from 'react';
import otfLogo from "../assets/otf_footer logo.png";
import Meta from "../assets/Meta.png";
import Google from "../assets/google.png";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white">
            {/* Desktop Layout */}
            <div className="hidden md:block max-w-8xl">
                <div className="max-w-7xl mx-auto px-6 pt-29">
                    {/* Increased gap from 6 to 16 for more space */}
                    <div className="grid grid-cols-12 gap-19">
                        {/* Left Section - Logo and Tagline */}
                        <div className="col-start-1 col-end-6">
                            <div className="mb-6">
                                <img src={otfLogo} alt="OTF Marketing" className="h-20 mb-1" />
                                <h2 className="text-xl font-normal font-montserrat leading-relaxed">
                                    Streamline Your Marketing<br />
                                    and Maximize Your Growth
                                </h2>
                            </div>
                        </div>

                        {/* Middle Section - Contact */}
                        <div className="col-start-7 col-end-10 ml-5">
                            <h3 className="text-[19px] font-semibold font-montserrat mb-6 tracking-wide">
                                CONTACT US
                            </h3>
                            <div className="space-y-1">
                                <p className="text-[15px] text-white font-bold    font-montserrat  leading-3">
                                    MAIL US DIRECTLY
                                </p>
                                <p className="text-[19px] font-normal font-montserrat leading-relaxed ">
                                    sales@otf.marketing
                                </p>
                            </div>
                        </div>

                        {/* Right Section - Company */}
                        <div className="col-start-11 col-end-13">
                            <h3 className="text-[19px] font-semibold font-montserrat mb-6 tracking-wide">
                                COMPANY
                            </h3>
                            <div className="space-y-2">
                                {/* <a
                                    href="#"
                                    className="block text-[16px] font-semibold font-montserrat leading-5">
                                    SEO Team
                                </a> */}
                                <HashLink smooth to="/#seoteam" className="block text-[16px] font-semibold font-montserrat leading-5">
                                    SEO Team
                                </HashLink>
                                <HashLink smooth to="/#pricing" className="block text-[16px] font-semibold font-montserrat leading-5">
                                    Pricing
                                </HashLink>
<a
  href="https://campaigns.otf.marketing/"
  className="block text-[16px] font-semibold font-montserrat leading-5"
  rel="noreferrer"
>
  Advertising
</a>

                                {/* <a
                                    href="#"
                                    className="block text-[16px ] font-semibold font-montserrat leading-5">
                                    Contact Us
                                </a> */}
                                 <Link to="/contact" className="block text-[16px ] font-semibold font-montserrat leading-5">
                                Contact Us
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full mx-auto flex flex-col items-center">
                    {/* Main container with extra-wide width */}
                    <div className="pt-5 w-full max-w-[1280px] mx-auto flex flex-row items-center justify-between gap-4 px-6">
                        {/* Left - Copyright */}
                        <div className="text-lg font-semibold font-montserrat text-center text-white">
                            2025 OTF Marketing All Rights Reserved
                        </div>

                        {/* Center - Partner Logos in a row */}
                        <div className="flex flex-row items-center justify-center gap-8 flex-nowrap ml-10">
                            <img src={Meta} alt="Meta" className="h-29" />
                            {/* <img src="/src/assets/google_guaranteed.png" alt="Google Guaranteed" className="h-14    " /> */}
                            <img src={Google} alt="Google Partner" className="h-38" />
                            <img src={LinkedIn} alt="LinkedIn" className="h-8" />
                            <img src={Instagram} alt="Instagram" className="h-8" />
                        </div>

                    </div>


                    {/* Extra-wide divider line */}
                    <div className="w-full max-w-[1300px] px-6 mx-auto mt-1">
                        <div className="flex items-center pb-6">
                            <div className="w-full border-t border-gray-500"></div>
                        </div>
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
                        <h2 className="text-md font-normal font-montserrat ">
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
  href="https://campaigns.otf.marketing/"
className="block text-[15px] font-montserrat leading-3"  rel="noreferrer"
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
                        </div>
                    </div>

                    {/* Partner Logos */}
                    <div className="">
                        <div className="flex justify-between items-center mx-1  ">
                            <img src={Meta} alt="Meta" className="h-20" />
                            {/* <img src="/src/assets/google_guaranteed.png" alt="Google Guaranteed" className="h-10" /> */}
                            <img src={Google} alt="Google Partner" className="h-27" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-center mx-3">
                            <img src={LinkedIn} alt="LinkedIn" className="h-7" />
                            <img src={Instagram} alt="Instagram" className="h-7" />
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