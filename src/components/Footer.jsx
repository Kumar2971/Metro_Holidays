const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Company: ['About Us', 'Our Fleet', 'Careers', 'Blog'],
        Services: ['Airport Transfer', 'City Tours', 'Corporate Travel', 'Wedding Events'],
        Support: ['Help Center', 'Safety', 'Terms & Conditions', 'Privacy Policy'],
        Quick: ['Book Now', 'Track Booking', 'Cancel Booking', 'FAQs'],
    }

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold">Metro Holidays</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            Your trusted travel companion. We're committed to providing safe, comfortable,
                            and reliable transportation services for every journey.
                        </p>

                        {/* Newsletter */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <h4 className="font-semibold mb-3">Subscribe to Our Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                                />
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-lg font-bold mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-slate-400 text-sm">
                            © {currentYear} Metro Holidays. All rights reserved. Made with ❤️ for travelers.
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center space-x-4">
                            <span className="text-slate-400 text-sm">We Accept:</span>
                            <div className="flex space-x-2">
                                {['Visa', 'MC', 'UPI', 'GPay'].map((method) => (
                                    <div
                                        key={method}
                                        className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-lg text-xs font-semibold border border-white/10 text-slate-300"
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {[
                                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-white/10 text-slate-300"
                                    aria-label={social.name}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-slate-400 text-sm">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>100% Secure Payments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Verified Drivers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Licensed & Insured</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
