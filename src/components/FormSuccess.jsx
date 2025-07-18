import backgroundImage from "/assets/Header.webp";
import Footer from "./footer";
import { Link } from "react-router-dom";

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
        <div className="pt-40 px-4 flex flex-col items-center font-montserrat justify-center min-h-[70vh]">
          <div className="bg-white rounded-[20px] p-8 max-w-2xl w-full text-center shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Form submitted successfully!
            </h1>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg">Thank you! The form has been submitted successfully.</p>
              <p className="text-lg">We will reply to you soon!</p>
            </div>
            
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Go back
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FormSuccess;