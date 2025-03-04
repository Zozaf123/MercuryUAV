import React, { useState } from 'react';
import { Moon, ChevronDown, Globe2, Zap } from 'lucide-react';
import HomePage from './pages/HomePage';
import SpecificationsPage from './pages/SpecificationsPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-white hover:text-[#EBB11A] transition-colors"
              >
                <Moon className="w-8 h-8 text-gradient-to-r from-[#B21010] via-[#CF6015] to-[#EBB11A]" />
                <span className="font-black text-xl">MERCURY</span>
              </button>
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-semibold transition-colors ${currentPage === 'home' ? 'text-[#EBB11A]' : 'text-white hover:text-gray-300'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('specifications')}
                className={`text-sm font-semibold transition-colors ${currentPage === 'specifications' ? 'text-[#EBB11A]' : 'text-white hover:text-gray-300'}`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`text-sm font-semibold transition-colors ${currentPage === 'about' ? 'text-[#EBB11A]' : 'text-white hover:text-gray-300'}`}
              >
                About Mercury
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'specifications' && <SpecificationsPage />}
        {currentPage === 'about' && <AboutPage />}
      </div>
    </div>
  );
}

export default App;