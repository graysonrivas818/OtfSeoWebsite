

// // export default Contact;
// import backgroundImage from "/assets/Header.png";
// import Footer from "./footer";

// const Contact = () => {
//   return (
//     <>
//     <section
//       className="w-full bg-cover bg-no-repeat overflow-auto"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "100% 100%",
//       }}
//     >
//       <div className="pt-20 px-4">
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl leading-[36px] text-center font-bold text-white">
//             Work With Us
//           </h2>
//         </div>

//         <iframe
//           src="https://api.leadconnectorhq.com/widget/form/s74gmAtjPfoCAN4Zous6"
//           className="min-h-[1200px] max-sm:min-h-[1200px] max-321:!min-h-[1800px] max-h-[1990px] w-full"
//           id="inline-s74gmAtjPfoCAN4Zous6"
//           data-layout="{'id':'INLINE'}"
//           data-trigger-type="alwaysShow"
//           data-trigger-value=""
//           data-activation-type="alwaysActivated"
//           data-activation-value=""
//           data-deactivation-type="neverDeactivate"
//           data-deactivation-value=""
//           data-form-name="Landing Page Website Form Blue/White"
//           data-height="1489"
//           data-layout-iframe-id="inline-s74gmAtjPfoCAN4Zous6"
//           data-form-id="s74gmAtjPfoCAN4Zous6"
//           title="Landing Page Website Form Blue/White"
//         ></iframe>
//       </div>
//     </section>
//           <Footer />
//           </>
//   );
// };

// export default Contact;



import backgroundImage from "/assets/Header.png";
import Footer from "./footer";
import { useEffect } from 'react';

const Contact = () => {
useEffect(() => {
    // Method 1: Add viewport meta tag to prevent zoom
    const addViewportMeta = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        document.head.appendChild(viewport);
      }
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    };

    // Method 2: Add CSS to prevent zoom on form elements
    const addZoomPreventionCSS = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Prevent zoom on iOS devices */
        input, select, textarea {
          font-size: 16px !important;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        /* Additional iframe styling to prevent zoom */
        iframe {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-overflow-scrolling: touch;
        }
        
        /* Prevent zoom on touch */
        * {
          touch-action: manipulation;
        }
      `;
      document.head.appendChild(style);
    };

    // Method 3: Handle iframe load and try to communicate with it
    const handleIframeLoad = () => {
      const iframe = document.getElementById('inline-JHxFvBGJog1VN2TzWxc4');
      if (iframe) {
        try {
          // Add touch-action to iframe
          iframe.style.touchAction = 'manipulation';
          
          // Try to access iframe content (will only work if same-origin)
          if (iframe.contentDocument) {
            const iframeHead = iframe.contentDocument.head;
            if (iframeHead) {
              const iframeStyle = iframe.contentDocument.createElement('style');
              iframeStyle.textContent = `
                input, select, textarea, button {
                  font-size: 16px !important;
                  -webkit-transform: translateZ(0);
                  transform: translateZ(0);
                }
                * {
                  touch-action: manipulation;
                }
              `;
              iframeHead.appendChild(iframeStyle);
            }
          }
        } catch (e) {
          console.log('Cannot access iframe content due to CORS policy');
        }
      }
    };

    addViewportMeta();
    addZoomPreventionCSS();

    // Wait for iframe to load
    const iframe = document.getElementById('inline-JHxFvBGJog1VN2TzWxc4');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <>
      <section
        className="w-full bg-cover bg-no-repeat overflow-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="pt-20 px-4 pb-18">
          <div className="mb-12 text-center">
            <h2 className="text-4xl leading-[36px] text-center font-bold font-montserrat text-white">
              Work With Us
            </h2>
          </div>
 <iframe
            src="https://api.leadconnectorhq.com/widget/form/JHxFvBGJog1VN2TzWxc4"
            className="w-full"
            style={{  
              border: "none !important", 
              height: "auto",
              minHeight: "1100px",
              maxHeight: "1400px",
              overflow: "hidden",
              outline: "none",
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
              touchAction: "manipulation", // Prevent zoom on touch
              WebkitOverflowScrolling: "touch"
            }}
            id="inline-JHxFvBGJog1VN2TzWxc4"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="SEO"
            data-height="960"
            data-layout-iframe-id="inline-JHxFvBGJog1VN2TzWxc4"
            data-form-id="JHxFvBGJog1VN2TzWxc4"
            title="SEO"
          ></iframe>
        </div>
      </section>
      <Footer />
      {/* Script for form embed functionality */}
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </>
  );
};

export default Contact;