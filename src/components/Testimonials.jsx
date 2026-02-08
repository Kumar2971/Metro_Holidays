import { useState } from 'react'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Business Professional',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
            rating: 5,
            text: 'I\'ve been using Metro Holidays for my business trips for over a year now. The drivers are always punctual, professional, and the vehicles are immaculate. What I appreciate most is their commitment to safety—I always feel secure during my journeys.',
            trip: 'Mumbai to Pune',
        },
        {
            name: 'Priya Sharma',
            role: 'Teacher & Mother',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
            rating: 5,
            text: 'As a mother of two, safety is my top priority. Metro Holidays has never disappointed us. The drivers are courteous, the cars are clean and well-maintained, and they even provide child seats when needed. Our family trips have become so much more enjoyable!',
            trip: 'Bangalore to Mysore',
        },
        {
            name: 'Amit Patel',
            role: 'Software Engineer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
            rating: 5,
            text: 'The booking process is incredibly simple, and the pricing is transparent—no hidden charges! I recently took a weekend trip with friends, and the SUV was spacious and comfortable. The driver was friendly and knew all the best routes. Highly recommended!',
            trip: 'Delhi to Jaipur',
        },
        {
            name: 'Sneha Reddy',
            role: 'Marketing Manager',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
            rating: 5,
            text: 'I was impressed by their professionalism from start to finish. The customer service team was helpful when I had questions, and the driver arrived early. The journey was smooth, and I could work comfortably in the back seat. Will definitely use again!',
            trip: 'Hyderabad to Vijayawada',
        },
    ]

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-white text-purple-600 rounded-full font-semibold text-sm mb-4 shadow-lg">
                        ⭐ Customer Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Travelers Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Don't just take our word for it—hear from the families and professionals who trust us with their journeys.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
                        {/* Testimonial Content */}
                        <div className="text-center mb-8">
                            {/* Image */}
                            <div className="relative inline-block mb-6">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg ring-4 ring-purple-100"
                                />
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                    "
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-6 h-6 text-yellow-400 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonials[activeIndex].text}"
                            </p>

                            {/* Trip Badge */}
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                                <span className="text-sm font-semibold text-purple-600">
                                    📍 {testimonials[activeIndex].trip}
                                </span>
                            </div>

                            {/* Author */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">
                                    {testimonials[activeIndex].name}
                                </h4>
                                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center space-x-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Dots */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in-up">
                            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                            <div className="text-gray-600">Happy Customers</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                            <div className="text-gray-600">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
