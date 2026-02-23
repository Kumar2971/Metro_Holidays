import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import './App.css';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const Footer = lazy(() => import('./components/Footer'));
const FeatureDetail = lazy(() => import('./components/FeatureDetail'));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Wrapper component to handle route changes/scroll restoration if needed
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleVehicleSelect = (vehicleName) => {
    setSelectedVehicle({ name: vehicleName, timestamp: Date.now() });
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`relative min-h-screen bg-neutral-50 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Animated, vibrant background shapes - Optimized for mobile: Hidden on small screens */}
        <div className="hidden md:block pointer-events-none fixed inset-0 -z-10 overflow-hidden transform-gpu">
          <div className="absolute left-[-10vw] top-[-10vw] w-[60vw] h-[60vw] bg-gradient-to-br from-blue-400 via-fuchsia-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-float will-change-transform" style={{ animationDuration: '12s' }}></div>
          <div className="absolute right-[-8vw] bottom-[-8vw] w-[40vw] h-[40vw] bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-400 opacity-20 rounded-full blur-2xl animate-float will-change-transform" style={{ animationDuration: '16s', animationDelay: '2s' }}></div>
        </div>

        <Helmet>
          <title>Coimbatore Travels | Metro Holidays - Best Car Rental & Taxi Service</title>
          <meta name="description" content="Coimbatore Travels at its best with Metro Holidays. We offer premium car rental, reliable outstation cab booking, and top-rated taxi service in Covai." />
          <meta name="keywords" content="coimbatore travels, covai travels, coimbatore best travels, covai best travels, coimbatore car travels, covai car travels, travels in coimbatore, car rental coimbatore, taxi service coimbatore, cab booking coimbatore, metro holidays" />
          <link rel="canonical" href="https://metroholidays.in/" />
        </Helmet>

        <Navbar />

        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/home" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/features" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/safety" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/fleet" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/booking" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/contact" element={<Home selectedVehicle={selectedVehicle} handleVehicleSelect={handleVehicleSelect} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/feature/:id" element={<FeatureDetail />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
