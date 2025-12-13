import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fdffec] px-4 md:px-20 py-4 flex items-center justify-between relative z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src="/assets/landing/image-430.png" alt="NaturoFit" className="h-10 md:h-12 object-contain" />
        </Link>
      </div>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {/* <Link to="/about" className="text-[#2f4f4f] font-medium font-sans hover:text-primary transition-colors">About Us</Link> */}
        {/* <Link to="/shop" className="text-[#2f4f4f] font-medium font-sans hover:text-primary transition-colors">Shop</Link>
        <Link to="/wellness" className="text-[#2f4f4f] font-medium font-sans hover:text-primary transition-colors">Wellness</Link>
        <Link to="/yoga" className="text-[#2f4f4f] font-medium font-sans hover:text-primary transition-colors">Yoga Exercise</Link> */}
      </nav>

      <div className="hidden md:block">
        <Link 
          to="/onboarding"
          className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-md hover:bg-opacity-90 transition-all"
        >
          Register as Doctor
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-800 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t border-gray-100">
          {/* <Link to="/about" className="text-[#2f4f4f] font-medium text-lg" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/shop" className="text-[#2f4f4f] font-medium text-lg" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/wellness" className="text-[#2f4f4f] font-medium text-lg" onClick={() => setIsMenuOpen(false)}>Wellness</Link>
          <Link to="/yoga" className="text-[#2f4f4f] font-medium text-lg" onClick={() => setIsMenuOpen(false)}>Yoga Exercise</Link> */}
          <Link 
            to="/onboarding"
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center shadow-md hover:bg-opacity-90 transition-all mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Register as Doctor
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
