import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Clock, Phone } from 'lucide-react';

const FeatureDetail = () => {
    const { id } = useParams();

    // Mapping slugs to content
    const featuresData = {
        '24-7-availability': {
            title: '24/7 Availability',
            subtitle: 'Always There When You Need Us',
            description: 'Whether it is an early morning flight or a late-night arrival, our team is ready to serve you. We understand that travel does not follow a 9-to-5 schedule, and neither do we.',
            details: [
                'Round-the-clock customer support via phone and chat.',
                'Instant booking confirmations at any hour.',
                'Drivers available for emergency pickups.',
                'Night charges are transparent and reasonable.'
            ],
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            gradient: 'from-blue-500 to-cyan-500'
        },
        'verified-drivers': {
            title: 'Verified Drivers',
            subtitle: 'Safety Starts with the Driver',
            description: 'Your safety is our top priority. We go the extra mile to ensure that every driver behind the wheel is a verified professional with a clean track record.',
            details: [
                'Comprehensive background checks for all drivers.',
                'Mandatory defensive driving training.',
                'Regular health and vision screenings.',
                'Customer-rated drivers ensures top quality service.'
            ],
            icon: <Shield className="w-12 h-12 text-indigo-600" />,
            gradient: 'from-indigo-500 to-purple-600'
        },
        'affordable-pricing': {
            title: 'Affordable Pricing',
            subtitle: 'Premium Service, Fair Rates',
            description: 'We believe that luxury and comfort should not break the bank. Our pricing model is transparent, competitive, and designed to give you the best value for your money.',
            details: [
                'No hidden fees or surprise charges.',
                'Competitive per-kilometer rates.',
                'Special packages for outstation and long-term rentals.',
                'Transparent billing with digital receipts.'
            ],
            icon: <CheckCircle className="w-12 h-12 text-green-600" />,
            gradient: 'from-green-500 to-emerald-600'
        },
        'gps-tracking': {
            title: 'GPS Tracking',
            subtitle: 'Track Your Ride in Real-Time',
            description: 'Gain complete peace of mind with our advanced GPS tracking systems. Share your location with loved ones and monitor your journey progress in real-time.',
            details: [
                'Live location sharing with family.',
                'Real-time route optimization to avoid traffic.',
                'SOS emergency alert integration.',
                'Trip history logs for your records.'
            ],
            icon: <Phone className="w-12 h-12 text-orange-600" />,
            gradient: 'from-orange-500 to-red-600'
        },
        'comfort-first': {
            title: 'Comfort First',
            subtitle: 'Travel in Absolute Comfort',
            description: 'Our fleet is meticulously maintained to provide a smooth and relaxing journey. From plush seating to climate control, we prioritize your comfort above all else.',
            details: [
                'Premium upholstery and spacious legroom.',
                'Advanced climate control systems.',
                'Noise-insulated cabins for a quiet ride.',
                'Complimentary water bottles and tissues on request.'
            ],
            icon: <CheckCircle className="w-12 h-12 text-purple-600" />,
            gradient: 'from-purple-500 to-pink-600'
        },
        'easy-booking': {
            title: 'Easy Booking',
            subtitle: 'Book Your Ride in Seconds',
            description: 'We have streamlined the booking process to be as quick and effortless as possible. No complicated forms, just a simple path to getting your ride confirmed.',
            details: [
                'User-friendly online booking interface.',
                'Quick booking via WhatsApp or Phone call.',
                'Instant confirmation via SMS and Email.',
                'Flexible modification and cancellation policies.'
            ],
            icon: <Phone className="w-12 h-12 text-cyan-600" />,
            gradient: 'from-cyan-500 to-teal-600'
        }
    };

    const feature = featuresData[id];

    if (!feature) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                        Go Back Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className={`relative py-24 lg:py-32 bg-gradient-to-br ${feature.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                    <Link to="/#features" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Features
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 shadow-xl">
                            {feature.icon}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{feature.title}</h1>
                        <p className="text-xl md:text-2xl text-blue-50 font-medium">{feature.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">About this Feature</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        {feature.description}
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {feature.details.map((detail, index) => (
                            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{detail}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-100 flex justify-center">
                        <Link
                            to="/#booking"
                            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                            Book a Ride Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetail;
