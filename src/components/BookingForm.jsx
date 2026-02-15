import { useState, useEffect } from 'react'
import { MapPin, Calendar, Clock, Users, Car, User, Mail, Phone, ChevronRight, Check } from 'lucide-react'

const BookingForm = ({ selectedVehicle }) => {
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

    // Using objects to map values (matching Fleet component) to display labels
    const vehicles = [
        { value: 'Comfortable Sedan', label: 'Comfortable Sedan (4 Seats)' },
        { value: 'Spacious SUV', label: 'Spacious SUV (6-7 Seats)' },
        { value: 'Family MPV', label: 'Family MPV (7-8 Seats)' },
        { value: 'Executive Sedan', label: 'Executive Sedan (4 Seats)' },
    ]

    useEffect(() => {
        if (selectedVehicle?.name) {
            setFormData(prev => ({
                ...prev,
                vehicle: selectedVehicle.name
            }))
        }
    }, [selectedVehicle])

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
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Ambient Background - Hidden on mobile for performance */}
            <div className="absolute inset-0 bg-slate-50/50 -z-20"></div>
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-md border border-white/60 rounded-full text-blue-600 font-semibold text-sm mb-6 shadow-sm">
                        <span className="mr-2">📅</span> Start Your Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ride</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                        Seamless booking experience. Fill in your details and we'll handle the rest.
                    </p>
                </div>

                {/* Booking Form Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl shadow-blue-900/5 border border-white/50 relative overflow-hidden">

                        {/* Top Decorative Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                        {showSuccess ? (
                            <div className="text-center py-20 animate-scale-in flex flex-col items-center justify-center">
                                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200 animate-success-bounce">
                                    <Check className="w-10 h-10" strokeWidth={3} />
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Booking Confirmed!</h3>
                                <p className="text-xl text-gray-600 max-w-md mx-auto">
                                    We've received your request. Our team will contact you shortly to confirm details.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                {/* Trip Details Group */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        Where are you going?
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">From</label>
                                            <input
                                                type="text"
                                                name="from"
                                                value={formData.from}
                                                onChange={handleChange}
                                                required
                                                placeholder="Pickup Location"
                                                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all focus:bg-white hover:border-gray-300"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">To</label>
                                            <input
                                                type="text"
                                                name="to"
                                                value={formData.to}
                                                onChange={handleChange}
                                                required
                                                placeholder="Destination"
                                                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all focus:bg-white hover:border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Date</label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="dd/mm/yyyy"
                                                    onFocus={(e) => e.target.showPicker?.()}
                                                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all focus:bg-white appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                                                />
                                                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Time</label>
                                            <div className="relative">
                                                <select
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all focus:bg-white appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled>Select time</option>
                                                    {Array.from({ length: 48 }).map((_, i) => {
                                                        const hour24 = Math.floor(i / 2);
                                                        const minute = i % 2 === 0 ? '00' : '30';
                                                        const ampm = hour24 < 12 ? 'AM' : 'PM';
                                                        const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
                                                        const timeString = `${hour12}:${minute} ${ampm}`;
                                                        return <option key={i} value={timeString}>{timeString}</option>;
                                                    })}
                                                </select>
                                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Passengers</label>
                                            <div className="relative">
                                                <select
                                                    name="passengers"
                                                    value={formData.passengers}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all focus:bg-white appearance-none cursor-pointer"
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                                <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Vehicle</label>
                                            <div className="relative">
                                                <select
                                                    name="vehicle"
                                                    value={formData.vehicle}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all focus:bg-white appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Type</option>
                                                    {vehicles.map((v, idx) => (
                                                        <option key={idx} value={v.value}>{v.value}</option>
                                                    ))}
                                                </select>
                                                <Car className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                                {/* Personal Details Group */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                            <User className="w-5 h-5" />
                                        </div>
                                        Your Details
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all focus:bg-white hover:border-gray-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Phone</label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    className="w-full pl-12 pr-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all focus:bg-white hover:border-gray-300"
                                                />
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full pl-12 pr-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all focus:bg-white hover:border-gray-300"
                                                />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto md:min-w-[300px] mx-auto block px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-3">
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Confirm Booking
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        )}
                                    </button>
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
