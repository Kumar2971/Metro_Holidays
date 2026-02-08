import { useState } from 'react'

const BookingForm = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        date: '',
        time: '',
        passengers: '1',
        vehicle: '',
        name: '',
        email: '',
        phone: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const vehicles = [
        'Comfortable Sedan (4 Passengers)',
        'Spacious SUV (6-7 Passengers)',
        'Family MPV (7-8 Passengers)',
        'Executive Sedan (4 Passengers)',
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccess(true)

            // Reset form after 3 seconds
            setTimeout(() => {
                setShowSuccess(false)
                setFormData({
                    from: '',
                    to: '',
                    date: '',
                    time: '',
                    passengers: '1',
                    vehicle: '',
                    name: '',
                    email: '',
                    phone: '',
                })
            }, 3000)
        }, 1500)
    }

    return (
        <section id="booking" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-sm mb-4">
                        📅 Book Your Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Hit the Road?
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Fill in your details below and we'll get you on your way. It only takes a minute!
                    </p>
                </div>

                {/* Booking Form */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-fade-in-up">
                        {showSuccess ? (
                            <div className="text-center py-12 animate-scale-in">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-6 animate-bounce">
                                    ✓
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                                <p className="text-xl text-white/80">
                                    Thank you! We've received your booking request. Our team will contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Trip Details */}
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                        <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                                        Trip Details
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">From</label>
                                            <input
                                                type="text"
                                                name="from"
                                                value={formData.from}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter pickup location"
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">To</label>
                                            <input
                                                type="text"
                                                name="to"
                                                value={formData.to}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter destination"
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Time</label>
                                            <input
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Number of Passengers</label>
                                            <select
                                                name="passengers"
                                                value={formData.passengers}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                    <option key={num} value={num} className="bg-gray-800">
                                                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Vehicle Type</label>
                                            <select
                                                name="vehicle"
                                                value={formData.vehicle}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            >
                                                <option value="" className="bg-gray-800">Select a vehicle</option>
                                                {vehicles.map((vehicle, idx) => (
                                                    <option key={idx} value={vehicle} className="bg-gray-800">
                                                        {vehicle}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Personal Details */}
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                        <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                                        Your Details
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your name"
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 font-semibold mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center">
                                                Confirm Booking
                                                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                            </span>
                                        )}
                                    </button>
                                    <p className="text-white/60 text-sm mt-4">
                                        By booking, you agree to our terms and conditions
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingForm
