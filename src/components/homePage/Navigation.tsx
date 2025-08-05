import React, { useState } from 'react';
import { Link, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 animate-pulse">
            <Link className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ziptie
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Pricing</a>
          <a href="#docs" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Docs</a>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 px-6 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-orange-400 transition-colors">Docs</a>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold text-left">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;