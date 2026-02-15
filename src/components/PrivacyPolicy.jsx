import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
            <Helmet>
                <title>Privacy Policy - Metro Holidays</title>
                <meta name="description" content="Read our Privacy Policy to understand how Metro Holidays handles your personal information with care and security." />
                <link rel="canonical" href="https://metroholidays.in/privacy-policy" />
                <meta property="og:title" content="Privacy Policy - Metro Holidays" />
                <meta property="og:url" content="https://metroholidays.in/privacy-policy" />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
                        <p className="text-xl font-medium text-gray-800">
                            Effective Date: {new Date().toLocaleDateString()}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Metro Holidays ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us at info@metroholidays.in.
                            </p>
                            <p className="mt-4">
                                This Privacy Policy applies to all information collected through our website (such as https://metroholidays.in), and/or any related services, sales, marketing or events.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; and other similar information.</li>
                                <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To post testimonials.</li>
                                <li>To request feedback.</li>
                                <li>To enable user-to-user communications.</li>
                                <li>To manage user accounts.</li>
                                <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                            <p>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at info@metroholidays.in or by post to:
                            </p>
                            <address className="not-italic mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <strong className="block text-gray-900 mb-1">Metro Holidays</strong>
                                123 Metro Plaza, MG Road<br />
                                Bangalore, Karnataka 560001<br />
                                India
                            </address>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
