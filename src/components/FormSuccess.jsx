

import backgroundImage from "/assets/Header.png";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const FormSuccess = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-no-repeat overflow-auto min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="pt-20 md:pt-40 px-4 flex flex-col items-center font-montserrat justify-center min-h-[60vh]">
          <div className="bg-white rounded-[20px] p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl text-center shadow-lg">
            <div className="flex justify-center mb-4 md:mb-6">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800 mb-4 md:mb-6">
              Form Submitted Successfully!
            </h1>
            
            <div className="space-y-3 md:space-y-4 text-gray-600 mb-6 md:mb-8">
              <p className="text-base md:text-lg font-montserrat">Thank you! The form has been submitted successfully.</p>
              <p className="text-base md:text-lg font-montserrat">We will reply to you soon!</p>
            </div>
            
            <Link 
              to="/" 
              className="inline-block px-5 py-2 md:px-6 md:py-3 bg-blue-600 font-montserrat text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FormSuccess;