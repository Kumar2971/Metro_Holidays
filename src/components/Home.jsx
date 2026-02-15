import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';

// Lazy load below-the-fold components
const Features = lazy(() => import('./Features'));
const Safety = lazy(() => import('./Safety'));
const Fleet = lazy(() => import('./Fleet'));
const BookingForm = lazy(() => import('./BookingForm'));
const Contact = lazy(() => import('./Contact'));

const SectionLoader = () => (
    <div className="w-full h-32 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const Home = ({ selectedVehicle, handleVehicleSelect }) => {
    const location = useLocation();

    useEffect(() => {
        // Handle both hash navigation and cleaner path-based navigation
        let sectionId = '';

        // Priority to hash if present
        if (location.hash) {
            sectionId = location.hash.substring(1);
        }
        // Then check path based routes (e.g. /features -> features)
        else if (location.pathname !== '/' && location.pathname !== '/home') {
            sectionId = location.pathname.substring(1);
        } else if (location.pathname === '/home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (sectionId) {
            // Small delay to ensure components are mounted for lazy loading
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Metro Holidays - Best Travels in Coimbatore | Safe Car Rentals</title>
                <meta name="description" content="Looking for the best travels in Coimbatore? Metro Holidays offers safe, reliable, and comfortable car rentals and taxi services for local and outstation trips." />
                <meta name="keywords" content="coimbatore travels, travels in coimbatore, car rental coimbatore, taxi service coimbatore, cab booking coimbatore, best travels coimbatore, metro holidays" />
                <link rel="canonical" href="https://metroholidays.in/" />
                <meta property="og:title" content="Metro Holidays - Best Travels in Coimbatore | Safe Car Rentals" />
                <meta property="og:description" content="Safe, reliable, and comfortable car rentals and taxi services in Coimbatore." />
                <meta property="og:url" content="https://metroholidays.in/" />
                <meta property="twitter:title" content="Metro Holidays - Best Travels in Coimbatore" />
                <meta property="twitter:description" content="Safe, reliable, and comfortable car rentals and taxi services in Coimbatore." />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",
                            "name": "Metro Holidays",
                            "image": "https://metroholidays.in/og-image.png",
                            "@id": "https://metroholidays.in",
                            "url": "https://metroholidays.in",
                            "telephone": "+917904037684",
                            "priceRange": "₹₹",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "123 Metro Plaza, MG Road",
                                "addressLocality": "Coimbatore",
                                "addressRegion": "TN",
                                "postalCode": "641001",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 11.0168,
                                "longitude": 76.9558
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "00:00",
                                "closes": "23:59"
                            },
                            "sameAs": [
                                "https://www.facebook.com/metroholidays",
                                "https://www.instagram.com/metroholidays"
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <section id="home"><Hero /></section>

            <Suspense fallback={<SectionLoader />}>
                <section id="features"><Features /></section>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <section id="safety"><Safety /></section>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <section id="fleet"><Fleet onBookNow={handleVehicleSelect} /></section>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <section id="booking"><BookingForm selectedVehicle={selectedVehicle} /></section>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <section id="contact"><Contact /></section>
            </Suspense>
        </>
    );
};

export default Home;
