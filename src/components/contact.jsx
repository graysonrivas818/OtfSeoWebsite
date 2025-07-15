

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



import backgroundImage from "/assets/Header.webp";
import Footer from "./footer";

const Contact = () => {
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
            src="https://api.leadconnectorhq.com/widget/form/IJlmCA9Y7PJLaOGMDCgh"
               className="w-full rounded-[20px]"
            style={{ 
              border: "none", 
              height: "820px",
              minHeight: "973px"
            }}
            id="inline-IJlmCA9Y7PJLaOGMDCgh"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="SEO Form "
            data-height="803"
            data-layout-iframe-id="inline-IJlmCA9Y7PJLaOGMDCgh"
            data-form-id="IJlmCA9Y7PJLaOGMDCgh"
            title="SEO Form "
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