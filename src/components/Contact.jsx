const Contact = () => {
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            details: ['+91 98765 43210', '+91 87654 32109'],
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            details: ['info@metroholidays.com', 'support@metroholidays.com'],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Office',
            details: ['123 Metro Plaza, MG Road', 'Bangalore, Karnataka 560001'],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Hours',
            details: ['24/7 Customer Support', 'Always Here for You'],
            gradient: 'from-orange-500 to-red-500',
        },
    ]

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm mb-4">
                        📞 Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        We're Here to{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Help You
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Have questions or need assistance? Our friendly team is available 24/7 to help you plan your perfect journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                            <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-white/90 text-lg mb-8">
                                Whether you're planning a family vacation, a business trip, or just need a reliable ride,
                                we're here to make it happen. Reach out to us through any of these channels.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold mb-2">{info.title}</h4>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-white/80">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                {[
                                    { name: 'Facebook', color: 'from-blue-600 to-blue-700' },
                                    { name: 'Twitter', color: 'from-sky-500 to-sky-600' },
                                    { name: 'Instagram', color: 'from-pink-500 to-purple-600' },
                                    { name: 'LinkedIn', color: 'from-blue-700 to-blue-800' },
                                ].map((social, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map & Quick Info */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl h-96 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                                alt="Office location"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold mb-2">Visit Our Office</h4>
                                    <p className="text-white/90">123 Metro Plaza, MG Road, Bangalore</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Emergency Support</h4>
                            <p className="text-gray-600 mb-6">
                                Need immediate assistance? Our emergency hotline is available 24/7 for urgent matters.
                            </p>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Emergency Line
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
