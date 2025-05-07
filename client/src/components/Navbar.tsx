import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';
import fryeHouseTextLogo from '@/assets/frye-house-text-logo-new.png';

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
        ? 'bg-white/98 backdrop-blur-sm shadow-sm py-2' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <div className={`transition-all duration-300 flex items-center ${
                scrolled ? 'h-8' : 'h-10'
              }`}>
                <h1 className="text-xl md:text-2xl font-black tracking-wide transition-all duration-300">
                  FRYE<span className="inline-block mx-0.5 transform translate-y-0.5">⚓</span>HOUSE
                </h1>
              </div>
              <span className="text-xs text-primary/70 mt-0.5 tracking-wider font-light">Farmingdale, Maine</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { path: '/', label: 'HOME' },
              { path: '/menu', label: 'MENU' },
              { path: '/about', label: 'ABOUT' },
              { path: '/gallery', label: 'GALLERY' },
              { path: '/contact', label: 'CONTACT' }
            ].map(({ path, label }) => (
              <Link 
                key={path}
                href={path} 
                className={`relative px-4 py-2 font-medium tracking-wide text-sm transition-all duration-300 ${
                  isActive(path) 
                    ? 'text-primary' 
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2 bg-white rounded-md p-3 border border-gray-100 shadow-md">
            {[
              { path: '/', label: 'Home' },
              { path: '/menu', label: 'Menu' },
              { path: '/about', label: 'About' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link 
                key={path}
                href={path} 
                onClick={closeMenu}
                className={`block py-2.5 px-3 rounded-md transition duration-300 ${
                  isActive(path) 
                    ? 'bg-primary/5 text-primary font-semibold border-l-2 border-primary pl-4' 
                    : 'text-secondary hover:bg-gray-50 hover:pl-4'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
