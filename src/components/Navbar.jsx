import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Safety', path: '/safety' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div
                className={`w-[95%] max-w-5xl flex items-center justify-between px-6 transition-all duration-500 ease-out will-change-transform
                ${isScrolled
                        ? 'mt-4 py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full border border-white/50'
                        : 'mt-6 py-4 bg-transparent scale-[1.05]'
                    }`}
                style={{ transform: 'translateZ(0)' }}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 flex items-center justify-center">
                        {/* Background box - vibrant blue gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300 shadow-md shadow-blue-600/30"></div>

                        <svg className="h-9 w-9 text-white animate-car-ride transition-all duration-300 group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 13h-3.5l-2.4-5.3A3 3 0 0 0 13.4 6H7a2 2 0 0 0-1.8 1.1L3.3 12H2v5h1.2a2.5 2.5 0 0 0 4.6 0H16.2a2.5 2.5 0 0 0 4.6 0H22v-4zM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm13 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                        {/* Tire dust particles */}
                        <div className="absolute left-1.5 bottom-1.5 w-1 h-1 bg-white/60 rounded-full animate-tire-dust z-10"></div>
                        <div className="absolute left-2 bottom-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-tire-dust-2 z-10"></div>
                        <div className="absolute left-1 bottom-1 w-1 h-1 bg-white/40 rounded-full animate-tire-dust-3 z-10"></div>
                        <div className="absolute right-1.5 bottom-1.5 w-0.5 h-0.5 bg-white/60 rounded-full animate-tire-dust z-10" style={{ animationDelay: '0.1s' }}></div>
                        <div className="absolute right-2 bottom-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-tire-dust-2 z-10" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                    <div className="flex flex-col justify-center h-12">
                        <span className={`text-2xl font-black tracking-tighter uppercase italic leading-none ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            METRO
                        </span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-blue-600 leading-tight ml-0.5 mt-0.5">
                            HOLIDAYS
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="px-5 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/#booking"
                        className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-2">
                            Book Now
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-full hover:bg-gray-100/50 transition-colors"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] flex md:hidden items-start justify-center pt-24 px-4">
                    <div
                        className="absolute inset-0 bg-gray-900/20 backdrop-blur-md transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    <div className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl p-6 animate-fade-in-up border border-gray-100">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 transition-all border border-transparent hover:border-gray-100"
                                >
                                    {link.name}
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                            <a
                                href="/#booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-center shadow-lg hover:bg-black transition-all"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

