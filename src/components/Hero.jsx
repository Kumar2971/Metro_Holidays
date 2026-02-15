import { useState, useEffect } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-8 sm:pb-0">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/10 to-gray-900/10"></div>
                <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=75"
                    srcSet="
                        https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=640&q=60 640w,
                        https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1024&q=70 1024w,
                        https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=75 1920w
                    "
                    sizes="100vw"
                    alt="Scenic road trip"
                    className="w-full h-full object-cover opacity-20"
                    fetchPriority="high"
                    loading="eager"
                    width="1920"
                    height="1080"
                />
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-blue-50/40"></div>
            </div>

            {/* Floating Elements - Optimized for mobile */}
            <div className="absolute top-20 left-10 w-36 h-36 md:w-72 md:h-72 bg-blue-200/20 rounded-full blur-3xl animate-float will-change-transform"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float will-change-transform" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>


                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-gray-900">
                            Coimbatore's
                            <br />
                            <span className="transparent-text bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
                                Best Travels
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
                            Elevate your journey with Metro Holidays. Experience the perfect blend of luxury, safety, and affordability in every ride.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <a
                                href="#booking"
                                className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Book Now
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </a>
                            <a
                                href="#fleet"
                                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-bold text-lg shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300 border border-white/50 text-center"
                            >
                                View Fleet
                            </a>
                        </div>

                        {/* Modern Floating Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-10">
                            {[
                                { label: 'Happy Customers', value: '100+', color: 'text-blue-600' },
                                { label: 'Destinations', value: '20+', color: 'text-indigo-600' },
                                { label: 'Safety Record', value: '100%', color: 'text-purple-600' },
                            ].map((stat, idx) => (
                                <div key={idx} className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-lg -translate-y-1 md:shadow-sm md:translate-y-0 md:hover:shadow-md md:hover:-translate-y-1 transition-all duration-300">
                                    <div className={`text-2xl sm:text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                                    <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Abstract Composition */}
                    <div className={`relative mt-12 lg:mt-0 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 ring-8 ring-white/50 transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out-expo">
                            <img
                                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=75"
                                srcSet="
                                    https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=60 400w,
                                    https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=75 800w,
                                    https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80 1200w
                                "
                                sizes="(max-width: 1024px) 90vw, 50vw"
                                alt="Luxury Travel Experience"
                                className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                width="800"
                                height="600"
                                loading="eager"
                            />
                            {/* Glass Overlay Card */}
                            {/* Glass Overlay Card - Now Interactive */}
                            <a href="#booking" className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl -translate-y-1 md:shadow-lg md:translate-y-0 md:hover:bg-white/20 transition-all duration-300 cursor-pointer group/card block">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            <p className="text-sm font-medium opacity-80">Next Available Ride</p>
                                        </div>
                                        <p className="text-lg font-bold group-hover/card:text-blue-200 transition-colors">Toyota Innova Crysta</p>
                                    </div>
                                    <div className="h-10 w-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold shadow-lg group-hover/card:scale-110 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-300">
                                        Go
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Background blobs for depth */}
                        <div className="absolute -top-10 -right-10 w-36 h-36 md:w-72 md:h-72 bg-purple-500/30 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -left-10 w-36 h-36 md:w-72 md:h-72 bg-blue-500/30 rounded-full blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
