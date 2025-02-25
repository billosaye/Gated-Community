import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Gated Estate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium inline-flex items-center">
                Buy
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium inline-flex items-center">
                Rent
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium inline-flex items-center">
                Sell
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link to="/mortgage" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
              Mortgage
            </Link>

            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium inline-flex items-center">
                Real Estate Agents
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link to="/feed" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
              Feed
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="/signin"
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Join / Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/buy"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              <Link
                to="/rent"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link
                to="/sell"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
              <Link
                to="/mortgage"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mortgage
              </Link>
              <Link
                to="/agents"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Real Estate Agents
              </Link>
              <Link
                to="/feed"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Feed
              </Link>
              <Link
                to="/signin"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Join / Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;