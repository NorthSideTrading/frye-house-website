import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';
import fryeHouseTextLogo from '@/assets/frye-house-text-logo.png';

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
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
        : 'bg-white shadow-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <div className={`transition-all duration-300 ${
                scrolled ? 'h-8' : 'h-10'
              }`}>
                <img 
                  src={fryeHouseTextLogo} 
                  alt="Frye House" 
                  className="h-full w-auto object-contain transition-all duration-300 filter drop-shadow-sm hover:drop-shadow"
                />
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
          <div className="hidden md:flex space-x-1">
            {['/', '/menu', '/about', '/gallery', '/contact'].map((path) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2);
              
              return (
                <Link 
                  key={path}
                  href={path} 
                  className={`relative px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                    isActive(path) 
                      ? 'text-accent' 
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {isActive(path) && (
                    <span className="absolute inset-0 bg-accent/10 rounded-md -z-10"></span>
                  )}
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2 bg-amber-50/90 backdrop-blur-sm rounded-md p-3 border border-amber-100 shadow-inner">
            {['/', '/menu', '/about', '/gallery', '/contact'].map((path) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2);
              
              return (
                <Link 
                  key={path}
                  href={path} 
                  onClick={closeMenu}
                  className={`block py-2.5 px-3 rounded-md transition duration-300 ${
                    isActive(path) 
                      ? 'bg-white text-accent font-bold border-l-2 border-accent pl-4' 
                      : 'text-primary hover:bg-white hover:pl-4'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
