

import { useState,useEffect  } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import BirdlineIcon from "/assets/white-logo.png";
import Meta from "/assets/Meta.png";
import Google from "/assets/google.png";
import LinkedIn from "/assets/linkedin.png";
import Instagram from "/assets/instagram.png";
import GoogleGuaranteed from "/assets/google_guaranteed.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden"; // Prevent scroll
  } else {
    document.body.style.overflow = ""; // Re-enable scroll
  }

  // Cleanup when component unmounts
  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);
  // Smooth scroll function for same page sections
  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    setIsMenuOpen(false)
  }

  // Navigate to contact page
  const goToContact = () => {
    navigate('/contact')
    setIsMenuOpen(false)
  }

  // Navigate to home page
  const goToHome = () => {
    navigate('/')
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "SEO", sectionId: "seo", type: "scroll" },
    { name: "Pricing", sectionId: "pricing", type: "scroll" },
    { name: "Services", sectionId: "services", type: "scroll" },
    { name: "Portfolio", sectionId: "portfolio", type: "scroll" },
    { name: "Contact Us", action: goToContact, type: "navigate" },
  ]

  return (
    <header className="bg-[#132952] text-white top-0 left-0 right-0 py-1  z-40">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo - clickable to go home */}
          <div className="flex items-center cursor-pointer" onClick={goToHome}>
            <img
              src={BirdlineIcon}
              alt="OTF Logo"
              // width="30"
              // height="20"
              className="h-6 w-auto pl-4 sm:pl-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.type === "scroll" ? () => scrollToSection(item.sectionId) : item.action}
                className="text-white transition-colors hover:text-gray-300 font-medium font-montserrat cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={goToContact}
              className="bg-[#0063FF] cursor-pointer text-white px-6 py-2 rounded-full font-bold font-montserrat transition-all duration-200 hover:bg-[#0052CC]"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-[#3A3D6B] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div> */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              className="bg-[#0063FF] text-white px-3 py-1.5 rounded-full text-sm font-bold font-montserrat "
              onClick={goToContact}
            >
              Contact Us
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-[#3A3D6B] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#020816] z-50 flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between pb-2 pt-4 pr-2 pl-2">
              <img
                src={BirdlineIcon}
                alt="OTF Logo"
                className="h-6 w-auto pl-4 cursor-pointer"
                onClick={goToHome}
              />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between pl-6 pr-6 pb-6 pt-2">
              {/* Top Section */}
              <div className="space-y-3">
                {/* Tagline */}
                <div className="text-center">
                  <p className="text-[12px] text-white font-normal font-montserrat leading-relaxed">
                    Rank #1 on Google Search and GMB Profile
                    <br />
                    Guaranteed or We Work For Free!
                  </p>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={item.type === "scroll" ? () => scrollToSection(item.sectionId) : item.action}
                      className="block w-full text-left text-xl font-medium font-montserrat text-white border-t-2 border-white/20 pt-4 pl-5 hover:text-gray-300 transition-colors"

                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                <div className="flex justify-center">
                  <button
                    className="w-[200px] bg-[#04193D] mt-10 cursor-pointer  text-white py-2.5 rounded-full font-bold font-montserrat text-lg border border-[#0E49B0] hover:bg-[#0E49B0] transition-colors"
                    onClick={goToContact}
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-6">
                {/* Social Media Icons */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mx-5">
                    <a href="https://www.linkedin.com/in/sam-watts-2a4842b6/" target="_blank" rel="noopener noreferrer">

                      <img src={LinkedIn} alt="LinkedIn" className="h-7" />
                    </a>
                    <a href="https://www.instagram.com/otfmarketing/" target="_blank" rel="noopener noreferrer">

                      <img src={Instagram} alt="Instagram" className="h-6" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-6">
                  <img src={Meta} alt="Meta Partner" className="h-16" />
                  <img src={GoogleGuaranteed} alt="Google Guaranteed" className="h-10" />
                  <img src={Google} alt="Google Partner" className="h-16" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}