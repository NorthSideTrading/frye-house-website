import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-sm shadow-sm py-3' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Styled like in the screenshot */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide transition-all duration-300 flex items-center">
                FRYE <span className="inline-block mx-1 w-6 h-6 relative">
                  <span className="absolute inset-0 flex items-center justify-center text-primary">⚓</span>
                </span> HOUSE
              </h1>
              <span className="text-xs text-gray-600 mt-0.5 tracking-wider font-light">Farmingdale, Maine</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <div className="flex flex-col space-y-1.5">
                  <span className="w-6 h-0.5 bg-primary block"></span>
                  <span className="w-6 h-0.5 bg-primary block"></span>
                  <span className="w-6 h-0.5 bg-primary block"></span>
                </div>
              )}
            </div>
          </button>
        </div>
        
        {/* Main Navigation Menu (appears when menu button is clicked) */}
        {isMenuOpen && (
          <div className="mt-4 pb-2">
            <ul className="flex flex-col space-y-2">
              {[
                { path: '/', label: 'HOME' },
                { path: '/menu', label: 'MENU' },
                { path: '/about', label: 'ABOUT' },
                { path: '/gallery', label: 'GALLERY' },
                { path: '/contact', label: 'CONTACT' }
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    href={path} 
                    onClick={closeMenu}
                    className={`block py-2 font-medium text-lg tracking-wide transition-all duration-200 ${
                      isActive(path) 
                        ? 'text-primary font-semibold' 
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
