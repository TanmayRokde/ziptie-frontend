import React, { useState } from 'react';
import { Link as LinkIcon, Menu, X } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const primaryLinks = [
  {
    label: 'Docs',
    href: 'https://github.com/tanmayrokde/ziptie/tree/main/ziptie-mvp-backend#readme',
    external: true
  },
  {
    label: 'Pricing',
    href: '/pricing',
    external: false
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tanmayrokde/ziptie',
    external: true
  }
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav className="relative z-50 px-6 py-4 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-white tracking-wide">
                Ziptie
              </span>
              <span className="text-xs text-gray-500">Shorten • Route • Observe</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
            {primaryLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <RouterLink
                  key={link.label}
                  to={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </RouterLink>
              )
            )}
            </div>
            {currentUser ? (
              <>
                <RouterLink
                  to="/profile"
                  className="text-sm text-gray-100 hover:text-white transition-colors border border-gray-700/80 rounded-lg px-4 py-2"
                >
                  Profile
                </RouterLink>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-400 hover:text-orange-300 transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="bg-orange-500/90 hover:bg-orange-500 text-sm font-semibold text-white px-5 py-2 rounded-full shadow-lg shadow-orange-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/50"
                >
                  Sign up
                </button>
              </>
            )}
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
              {primaryLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <RouterLink
                    key={link.label}
                    to={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                )
              )}
              {currentUser ? (
                <>
                  <RouterLink
                    to="/profile"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </RouterLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-lg font-semibold text-left text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-transform duration-300"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modals rendered outside nav to avoid positioning issues */}
      <Login
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />
      <Signup
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
};

export default Navigation;
