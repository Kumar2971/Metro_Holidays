import { useState, useEffect } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/10 to-gray-900/10"></div>
                <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
                    alt="Scenic road trip"
                    className="w-full h-full object-cover opacity-20"
                />
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-blue-50/40"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full text-sm shadow-sm border border-blue-100">
                                ✨ Your Journey, Our Priority
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                            Travel Safe,
                            <br />
                            <span className="text-blue-600">Travel Smart</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Experience the freedom of the open road with our reliable and comfortable vehicles.
                            We prioritize your safety and comfort.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking"
                                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                            >
                                Book Your Ride
                                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
                            </a>
                            <a
                                href="#fleet"
                                className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 text-center hover:text-blue-600"
                            >
                                View Fleet
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">10K+</div>
                                <div className="text-sm text-gray-600 mt-1">Happy Travelers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-600">50+</div>
                                <div className="text-sm text-gray-600 mt-1">Destinations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-600">100%</div>
                                <div className="text-sm text-gray-600 mt-1">Safety Record</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ring-1 ring-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
                                    alt="Luxury car on scenic route"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl animate-float border border-gray-100">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800">Verified Safe</div>
                                        <div className="text-sm text-gray-500">All vehicles inspected</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#features" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Hero
