import backgroundImage from "/assets/Header.webp";
import Footer from "./footer";

const PrivacyPolicy = () => {
    return (
        <section
            className="w-full bg-cover bg-no-repeat overflow-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "100% 100%",
            }}
        >
            <div className="min-h-screen  py-10 px-4 flex  font-montserrat justify-center">
                <div className="bg-white  rounded-lg shadow-md max-w-5xl w-full p-8">
                    <h1 className="text-[32px] sm:text-[43px] font-bold mb-6">Privacy Policy</h1>
                    <p className="mb-4">Effective Date: 1/1/2024</p>
                    <p className="mb-4 ">
                        Welcome to OTF Marketing, a digital marketing service specializing in Facebook and Google ads for businesses. Your privacy is critically important to us. This Privacy Policy outlines the types of personal information we receive and collect, how it is used, and your rights regarding your information.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information to provide better services to all our users. Information is collected in the following ways:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">a. Information You Provide</h3>
                    <p className="mb-4">For example, when signing up for an OTF Marketing account or submitting a form, we may collect:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Telephone number</li>
                        <li>Credit card or payment information</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">b. Information From Use of Our Services</h3>
                    <p className="mb-4">We may collect information about the services that you use and how you use them, including:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Device Information:</strong> Details like hardware model, operating system, and unique device identifiers.</li>
                        <li><strong>Log Information:</strong> Data such as IP addresses, browser type, and system activity.</li>
                        <li><strong>Location Information:</strong> Geo-location data if enabled on your device.</li>
                        <li><strong>Cookies and Similar Technologies:</strong> Information stored on your device to enhance functionality and analytics.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-2">2. How We Use Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Provide, maintain, protect, and improve our services.</li>
                        <li>Tailor content and advertisements to match your preferences.</li>
                        <li>Protect OTF Marketing and our users from unauthorized access or abuse of our services.</li>
                        <li>Respond to inquiries and provide customer support.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-2">3. Information We Share</h2>
                    <p className="mb-4">We do not share personal information with companies, organizations, or individuals outside of OTF Marketing unless one of the following applies:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>With Your Consent:</strong> We will share personal information with your explicit permission.</li>
                        <li><strong>For External Processing:</strong> Data shared with trusted partners (e.g., payment processors) is used solely to provide our services.</li>
                        <li><strong>For Legal Reasons:</strong> To comply with laws or respond to lawful requests by government entities.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-2">4. Information Security</h2>
                    <p className="mb-4">We work hard to protect OTF Marketing and our users from unauthorized access, alteration, or destruction of information. Specific measures include:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Encryption of sensitive data using SSL technology.</li>
                        <li>Regular review of our data collection and storage practices.</li>
                        <li>Limiting access to personal information to employees, contractors, and agents bound by strict confidentiality obligations.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-2">5. Data Retention</h2>
                    <p className="mb-4">We retain personal information only as long as necessary to provide our services or for legitimate business and legal purposes. Users may request data deletion by contacting sales@otf.marketing.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">6. Cookies and Tracking Technologies</h2>
                    <p className="mb-4">We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage or disable cookies through your browser settings. Please note that disabling cookies may limit certain functionalities of the website.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">7. Your Rights</h2>
                    <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Access the personal data we hold about you.</li>
                        <li>Request corrections to inaccurate or incomplete data.</li>
                        <li>Request deletion of your data (subject to business or legal requirements).</li>
                        <li>Opt out of marketing communications (e.g., by replying "STOP" to messages).</li>
                    </ul>
                    <p className="mb-4">For residents of California (CCPA) or the European Union (GDPR), you may have additional rights. Contact us at sales@otf.marketing to exercise these rights.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">8. Children's Privacy</h2>
                    <p className="mb-4">Our services are not intended for individuals under 13 years of age. We do not knowingly collect information from children. If you believe we have collected data from a child, contact us at sales@otf.marketing to address and delete it.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">9. Data Breach Notification</h2>
                    <p className="mb-4">In the event of a data breach that compromises personal information, we will notify affected users and relevant authorities promptly, as required by applicable laws.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">10. Opt-In and Opt-Out Policy</h2>
                    <p className="mb-4">You can opt-in to receive notifications by contacting us at (813) 669-7350. Opt out at any time by replying "STOP" during communications via text or email. Submission of a Facebook or website form confirms consent for OTF Marketing to contact you via the provided information.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">11. Changes to This Privacy Policy</h2>
                    <p className="mb-4">We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. Updates will be posted on this page, and significant changes will be communicated via email or a website notification.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-2">12. Contact Information</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                    <p>Email: sales@otf.marketing</p>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default PrivacyPolicy;