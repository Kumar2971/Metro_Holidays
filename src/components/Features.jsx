import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '24/7 Availability',
            description: 'Book your ride anytime, day or night. Our team is always ready to serve you with prompt and reliable service.',
            gradient: 'from-blue-500 to-blue-600',
            slug: '24-7-availability'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Verified Drivers',
            description: 'All our drivers undergo thorough background checks and training to ensure your safety and peace of mind throughout your journey.',
            gradient: 'from-slate-600 to-slate-700',
            slug: 'verified-drivers'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Affordable Pricing',
            description: 'Transparent and competitive rates with no hidden charges. Quality service that fits your budget perfectly.',
            gradient: 'from-green-500 to-emerald-600',
            slug: 'affordable-pricing'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'GPS Tracking',
            description: 'Real-time tracking for added security. Share your trip details with loved ones and travel with confidence.',
            gradient: 'from-orange-500 to-red-500',
            slug: 'gps-tracking'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            ),
            title: 'Comfort First',
            description: 'Well-maintained, clean vehicles with air conditioning and comfortable seating for a pleasant journey every time.',
            gradient: 'from-indigo-500 to-purple-600',
            slug: 'comfort-first'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Easy Booking',
            description: 'Simple and quick booking process. Reserve your vehicle in just a few clicks and get instant confirmation.',
            gradient: 'from-cyan-500 to-blue-500',
            slug: 'easy-booking'
        },
    ]

    return (
        <section id="features" className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Background Decorations - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-snug md:leading-normal">
                        Experience the{' '}
                        <span className="text-blue-600">
                            Difference
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We go beyond just transportation. Every journey with us is crafted with care,
                        ensuring your comfort, safety, and satisfaction at every mile.
                    </p>
                </div>

                {/* Features Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature, index) => (
                        <Link
                            to={`/feature/${feature.slug}`}
                            key={index}
                            className="group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 -translate-y-2 shadow-2xl shadow-blue-500/15 md:translate-y-0 md:shadow-sm md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-blue-500/10 border border-gray-100 bg-white block"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br ${feature.gradient} opacity-[0.08] md:opacity-[0.03] md:group-hover:opacity-[0.08] transition-opacity duration-500 blur-3xl`}></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg shadow-blue-500/20 mb-6 md:group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-blue-600 md:group-hover:to-purple-600 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center text-blue-600 font-semibold opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                                    <span>Learn more</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                < div className="text-center mt-16 animate-fade-in-up" >
                    <a
                        href="#booking"
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Journey Today
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Features
