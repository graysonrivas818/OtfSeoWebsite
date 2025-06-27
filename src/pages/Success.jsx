// src/pages/ContactPage.jsx
import { useEffect } from "react";
import FormSuccess from "../components/FormSuccess.jsx";

export default function ContactPage() {

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        {/* <FormSuccess /> */}
      </div>
    </>
  )
}
