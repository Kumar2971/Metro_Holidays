import { ShieldCheck } from 'lucide-react';

const Safety = () => {

    const safetyFeatures = [
        {
            title: 'Regular Vehicle Inspections',
            description: 'Every vehicle in our fleet undergoes comprehensive safety checks before each trip. We maintain strict standards to ensure all mechanical systems, brakes, tires, and safety equipment are in perfect working condition.',
            icon: '🔧',
        },
        {
            title: 'Professional Driver Training',
            description: 'Our drivers are not just experienced—they\'re trained professionals. Each driver completes rigorous safety training programs, defensive driving courses, and customer service workshops to provide you with the best experience.',
            icon: '👨‍✈️',
        },
        {
            title: 'Emergency Preparedness',
            description: 'We\'re prepared for any situation. All vehicles are equipped with first-aid kits, emergency tools, and 24/7 roadside assistance. Our drivers are trained in emergency response protocols to handle unexpected situations calmly and effectively.',
            icon: '🚨',
        },
        {
            title: 'Insurance Coverage',
            description: 'Travel with complete peace of mind. Every journey is fully insured with comprehensive coverage for passengers and vehicles. Your safety and security are our top priorities, and we\'ve got you covered.',
            icon: '🛡️',
        },
    ]

    return (
        <section id="safety" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
            {/* Animated Background Elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-float"></div>
            <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full font-semibold text-sm mb-6 shadow-sm border border-blue-100">
                            <span className="mr-4">🛡️</span>Your Safety Matters
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Safety is Not Just a Feature,{' '}
                            <span className="text-blue-600">
                                It's Our Promise
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            We understand that when you travel with us, you're trusting us with what matters most—your safety and that of your loved ones.
                            That's why we've built our entire service around one core principle: getting you to your destination safely, every single time.
                        </p>

                        {/* Safety Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 transition-shadow border border-gray-100 shadow-xl -translate-y-1 md:shadow-sm md:translate-y-0 md:hover:shadow-lg md:hover:-translate-y-0">
                                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-gray-600 font-medium">Safety Compliance</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 transition-shadow border border-gray-100 shadow-xl -translate-y-1 md:shadow-sm md:translate-y-0 md:hover:shadow-lg md:hover:-translate-y-0">
                                <div className="text-4xl font-bold text-slate-700 mb-2">24/7</div>
                                <div className="text-gray-600 font-medium">Support Available</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 transition-shadow border border-gray-100 shadow-xl -translate-y-1 md:shadow-sm md:translate-y-0 md:hover:shadow-lg md:hover:-translate-y-0">
                                <div className="text-4xl font-bold text-green-600 mb-2">Zero</div>
                                <div className="text-gray-600 font-medium">Compromise Policy</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 transition-shadow border border-gray-100 shadow-xl -translate-y-1 md:shadow-sm md:translate-y-0 md:hover:shadow-lg md:hover:-translate-y-0">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
                                <div className="text-gray-600 font-medium">Safe Journeys</div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                                alt="Safe travel"
                                className="w-full h-64 object-cover"
                                loading="lazy"
                                width="800"
                                height="256"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
                                <p className="text-white font-semibold text-lg">
                                    "Your family's safety is our responsibility"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Safety Features */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {safetyFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-100 shadow-2xl shadow-blue-500/10 -translate-y-2 md:shadow-sm md:shadow-none md:translate-y-0 md:hover:shadow-2xl md:hover:shadow-blue-500/20 md:hover:-translate-y-1"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl group-hover:bg-blue-100 transition-colors duration-300">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar Animation */}
                                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                </div>
                            </div>
                        ))}

                        {/* Improved Safety Badge - Glassmorphic Gradient */}
                        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 p-8 text-white shadow-2xl shadow-blue-500/20 transition-transform hover:-translate-y-1 duration-300 group">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative flex items-center space-x-6 z-10">
                                <div className="flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-colors duration-300">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 tracking-tight">Certified & Verified</h4>
                                    <p className="text-blue-100/90 leading-relaxed text-sm font-medium">
                                        All safety standards meet and exceed government regulations. Your security is our guarantee.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safety
