import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

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
    <nav className="bg-white text-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src={fryeHouseLogo} 
              alt="Frye House Logo" 
              className="h-14 w-auto mr-2"
            />
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
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`py-2 ${isActive('/') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300 font-semibold`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className={`py-2 ${isActive('/menu') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300 font-semibold`}
            >
              Menu
            </Link>
            <Link 
              href="/gallery" 
              className={`py-2 ${isActive('/gallery') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300 font-semibold`}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className={`py-2 ${isActive('/contact') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300 font-semibold`}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`block py-2 ${isActive('/') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              onClick={closeMenu}
              className={`block py-2 ${isActive('/menu') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300`}
            >
              Menu
            </Link>
            <Link 
              href="/gallery" 
              onClick={closeMenu}
              className={`block py-2 ${isActive('/gallery') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300`}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`block py-2 ${isActive('/contact') ? 'text-accent font-bold' : 'text-primary hover:text-accent'} transition duration-300`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
