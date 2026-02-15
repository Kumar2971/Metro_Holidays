import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Company: [
            { name: 'About Us', path: '/' },
            { name: 'Our Fleet', path: '/fleet' },
            { name: 'Careers', path: '#' },
            { name: 'Blog', path: '#' }
        ],
        Services: [
            { name: 'Airport Transfer', path: '/features' },
            { name: 'City Tours', path: '/features' },
            { name: 'Corporate Travel', path: '/features' },
            { name: 'Wedding Events', path: '/features' }
        ],
        Support: [
            { name: 'Help Center', path: '/contact' },
            { name: 'Safety', path: '/safety' },
            { name: 'Privacy Policy', path: '/privacy-policy' }
        ],
    }

    return (
        <footer className="relative bg-slate-900 text-white pt-20 overflow-hidden">


            {/* Glowing Orbs - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
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
                                <span className="text-2xl font-black tracking-tighter uppercase italic leading-none text-white">
                                    METRO
                                </span>
                                <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-blue-400 leading-tight ml-0.5 mt-0.5">
                                    HOLIDAYS
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Elevating your travel experience with premium fleet and professional service. Every mile with us is a memory cherished.
                        </p>

                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="text-lg font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 inline-block">
                                    {category}
                                </h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.path}
                                                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300"></span>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Metro Holidays. All rights reserved.
                    </p>


                </div>
            </div>
        </footer>
    )
}

export default Footer
