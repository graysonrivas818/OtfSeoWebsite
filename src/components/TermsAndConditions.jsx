import backgroundImage from "/assets/Header.png";
import Footer from "./footer";

const TermsAndConditions = () => {
    return (
        <section
            className="w-full bg-cover bg-no-repeat overflow-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "100% 100%",
            }}
        >
            <div className="min-h-screen py-10 px-4 flex font-montserrat  justify-center">
                <div className="bg-white rounded-lg shadow-md max-w-5xl w-full p-8">
                    <h1 className="text-[25px] sm:text-[43px] font-bold mb-4">Terms and Conditions</h1>
                    <p className="mb-4">
                        Welcome to OTF Marketing. Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the www.otf.marketing website (the “Service”) operated by OTF Marketing (“us”, “we”, or “our”). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.          </p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">1. Intellectual Property</h2>
                    <p className="mb-4">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of OTF Marketing and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.          </p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">2. Use License</h2>
                    <h3 className="text-xl font-semibold mb-2">a. Permission</h3>
                    <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on OTF Marketing’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>Attempt to decompile or reverse engineer any software contained on OTF Marketing’s website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials;</li>
                        <li>Transfer the materials to another person or “mirror” the materials on any other server.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">b. Termination</h3>
                    <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by OTF Marketing at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">3. Disclaimer</h2>
                    <p className="mb-4">The materials on OTF Marketing’s website are provided on an ‘as is’ basis. OTF Marketing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">4. Limitation of Liability</h2>
                    <p className="mb-4">In no event shall OTF Marketing or its suppliers be liable for any damages arising out of the use or inability to use the materials on OTF Marketing’s website.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">5. Revisions and Errata</h2>
                    <p className="mb-4">The materials appearing on OTF Marketing’s website could include technical, typographical, or photographic errors. OTF Marketing does not warrant that any of the materials on its website are accurate, complete, or current.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">6. Links</h2>
                    <p className="mb-4">OTF Marketing has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. Use of any such linked website is at the user’s own risk.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">7. Modifications</h2>
                    <p className="mb-4">OTF Marketing may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">8. Governing Law</h2>
                    <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of Florida, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">9. Contact Us</h2>
                    {/* <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:sales@otf.marketing" className="text-blue-600 underline">
              sales@otf.marketing
            </a>.
          </p> */}
                    <p>If you have any questions about these Terms, please contact us at sales@otf.marketing.</p>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default TermsAndConditions;
