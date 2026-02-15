import { Users, Briefcase, Snowflake, Music, MapPin, Wifi, Star, ShieldCheck, CheckCircle, Wrench } from 'lucide-react';

const Fleet = ({ onBookNow }) => {
    const vehicles = [
        {
            name: 'Comfortable Sedan',
            category: 'Economy',
            passengers: '4 Passengers',
            luggage: '2 Large Bags',
            price: '₹12/km',
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
            features: ['AC', 'Music System', 'GPS'],
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Spacious SUV',
            category: 'Premium',
            passengers: '6-7 Passengers',
            luggage: '4 Large Bags',
            price: '₹18/km',
            image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
            features: ['AC', 'Premium Sound', 'GPS', 'Extra Space'],
            gradient: 'from-slate-700 to-slate-900',
            popular: true,
        },
        {
            name: 'Family MPV',
            category: 'Family',
            passengers: '7-8 Passengers',
            luggage: '5 Large Bags',
            price: '₹16/km',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
            features: ['AC', 'Music System', 'GPS', 'Child Seats'],
            gradient: 'from-indigo-500 to-indigo-600',
        },
        {
            name: 'Executive Sedan',
            category: 'Business',
            passengers: '4 Passengers',
            luggage: '3 Large Bags',
            price: '₹15/km',
            image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&q=80',
            features: ['AC', 'Leather Seats', 'GPS', 'WiFi'],
            gradient: 'from-gray-600 to-gray-800',
        },
    ]

    return (
        <section id="fleet" className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Background Elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-4">
                        <span className="mr-4">🚗</span>Our Fleet
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Choose Your{' '}
                        <span className="text-blue-600">
                            Perfect Ride
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        From comfortable sedans for daily commutes to spacious SUVs for family adventures,
                        we have the perfect vehicle for every journey and budget.
                    </p>
                </div>

                {/* Vehicles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {vehicles.map((vehicle, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border border-gray-50 -translate-y-2 shadow-2xl shadow-blue-500/20 md:translate-y-0 md:shadow-lg md:shadow-gray-200/50 md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-blue-500/10"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Popular Badge - Floating */}
                            {vehicle.popular && (
                                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold tracking-widest rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-1 backdrop-blur-sm">
                                    <Star className="w-3 h-3 fill-current" /> BEST SELLER
                                </div>
                            )}

                            {/* Image Area */}
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={vehicle.image}
                                    alt={`${vehicle.name} Rental in Coimbatore`}
                                    className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                    width="600"
                                    height="400"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>

                                {/* Floating Price Tag */}
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/50">
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Starting</div>
                                    <div className="text-xl font-black text-gray-900">{vehicle.price}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                {/* Category */}
                                <div className={`inline-block px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3 border border-gray-100`}>
                                    {vehicle.category}
                                </div>

                                <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-1">
                                    {vehicle.name}
                                </h3>

                                {/* Quick Specs */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600">{vehicle.passengers}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600">{vehicle.luggage}</span>
                                    </div>
                                </div>

                                {/* Features Tags - Minimal */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                                        <span key={idx} className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                                            {feature}
                                        </span>
                                    ))}
                                    {vehicle.features.length > 3 && (
                                        <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">+{vehicle.features.length - 3}</span>
                                    )}
                                </div>

                                <button
                                    onClick={() => onBookNow(vehicle.name)}
                                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                >
                                    Book Now
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center p-8 bg-white rounded-2xl animate-fade-in-up border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">All Vehicles Sanitized</h4>
                        <p className="text-gray-600">Deep cleaned before every trip for your safety.</p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl animate-fade-in-up border border-gray-200 hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                            <Wrench className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Regular Maintenance</h4>
                        <p className="text-gray-600">Serviced every 5,000 km to ensure reliability.</p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl animate-fade-in-up border border-gray-200 hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Fully Insured</h4>
                        <p className="text-gray-600">Comprehensive coverage included for peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fleet
