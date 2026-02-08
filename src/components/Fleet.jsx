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
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Spacious SUV',
            category: 'Premium',
            passengers: '6-7 Passengers',
            luggage: '4 Large Bags',
            price: '₹18/km',
            image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
            features: ['AC', 'Premium Sound', 'GPS', 'Extra Space'],
            gradient: 'from-purple-500 to-pink-500',
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
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            name: 'Executive Sedan',
            category: 'Business',
            passengers: '4 Passengers',
            luggage: '3 Large Bags',
            price: '₹15/km',
            image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&q=80',
            features: ['AC', 'Leather Seats', 'GPS', 'WiFi'],
            gradient: 'from-orange-500 to-red-500',
        },
    ]

    return (
        <section id="fleet" className="py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm mb-4">
                        🚗 Our Fleet
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Choose Your{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
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
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Popular Badge */}
                            {vehicle.popular && (
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                    ⭐ POPULAR
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${vehicle.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${vehicle.gradient} text-white text-xs font-semibold rounded-full mb-3`}>
                                    {vehicle.category}
                                </span>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                                    {vehicle.name}
                                </h3>

                                {/* Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="text-sm">{vehicle.passengers}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        <span className="text-sm">{vehicle.luggage}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {vehicle.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <div className="text-sm text-gray-500">Starting from</div>
                                        <div className="text-2xl font-bold text-purple-600">{vehicle.price}</div>
                                    </div>
                                    <button className={`px-4 py-2 bg-gradient-to-r ${vehicle.gradient} text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                                        Book Now
                                    </button>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${vehicle.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl animate-fade-in-up">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            ✓
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">All Vehicles Sanitized</h4>
                        <p className="text-gray-600">Deep cleaned before every trip</p>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            🔧
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Regular Maintenance</h4>
                        <p className="text-gray-600">Serviced every 5,000 km</p>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            🛡️
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Fully Insured</h4>
                        <p className="text-gray-600">Comprehensive coverage included</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fleet
