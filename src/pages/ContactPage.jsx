// src/pages/ContactPage.jsx
import { useEffect } from "react";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";

export default function ContactPage() {

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  )
}
