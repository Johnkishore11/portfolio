// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the "Go to Top" button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* "Go to Top" Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 end-5 p-3 bg-gray-400 text-white rounded-full shadow-lg hover:bg-gray-800 transition z-50"
          >
          <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
      </svg>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;

{/* "Go to Top" Button */}
// {isVisible && (
//   <button
//     onClick={scrollToTop}
//     className="fixed bottom-5 right-5 p-2 bg-gray-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition z-50"
//   >
//     ↑
//   </button>
// )}