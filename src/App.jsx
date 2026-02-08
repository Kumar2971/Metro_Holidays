import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Safety from './components/Safety'
import Fleet from './components/Fleet'
import BookingForm from './components/BookingForm'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <Navbar />
      <Hero />
      <Features />
      <Safety />
      <Fleet />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
