import { Users, Briefcase, Snowflake, Music, MapPin, Wifi, Star, ShieldCheck, CheckCircle, Wrench } from 'lucide-react';

const Fleet = () => {
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
        <section id="fleet" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-4">
                        🚗 Our Fleet
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {vehicles.map((vehicle, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-gray-100"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Popular Badge */}
                            {vehicle.popular && (
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> POPULAR
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${vehicle.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <span className={`inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3`}>
                                    {vehicle.category}
                                </span>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                                    {vehicle.name}
                                </h3>

                                {/* Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <Users className="w-5 h-5 mr-3 text-gray-400" />
                                        <span className="text-sm font-medium">{vehicle.passengers}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                                        <span className="text-sm font-medium">{vehicle.luggage}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {vehicle.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100 flex items-center gap-1"
                                        >
                                            {/* Optional: Add icons for specific features if desired, keeping it simple for now */}
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Starting from</div>
                                        <div className="text-2xl font-bold text-blue-600">{vehicle.price}</div>
                                    </div>
                                    <button className={`px-4 py-2 bg-gradient-to-r ${vehicle.gradient} text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                                        Book Now
                                    </button>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${vehicle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
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
