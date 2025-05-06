import { Link } from 'wouter';
import { Facebook, Instagram, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';

export default function Footer() {
  return (
    <footer className="mt-auto relative overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 -translate-y-1">
          <path d="M0,0 C150,40 350,10 500,30 C650,50 800,40 1000,20 L1200,0 V60 H0 V0 Z" 
                className="fill-primary/5"></path>
        </svg>
      </div>
      
      <div className="bg-texture pt-12 pb-6 bg-primary text-white">
        <div className="container mx-auto px-4">
          {/* Upper section with columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
            {/* Logo and about */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src={fryeHouseLogo}
                    alt="Frye House Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="ml-3 text-xl font-heading font-bold">Frye House</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Serving authentic Maine cuisine in a warm and friendly atmosphere since 2010.
              </p>
              <div className="flex space-x-3 mt-4">
                <a 
                  href="https://m.facebook.com/100044722821803/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 pb-2 border-b border-white/20">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/menu', label: 'Menu' },
                  { path: '/about', label: 'About' },
                  { path: '/gallery', label: 'Gallery' },
                  { path: '/contact', label: 'Contact' }
                ].map(item => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className="inline-flex items-center text-white/80 hover:text-accent transition duration-300"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 pb-2 border-b border-white/20">Contact Us</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 text-accent/80" />
                  <span>{restaurantInfo.phone}</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-accent/80" />
                  <span>{restaurantInfo.address}</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent/80" />
                  <div>
                    <div>Mon-Thu: {restaurantInfo.hours.monday}</div>
                    <div>Fri-Sat: {restaurantInfo.hours.friday}</div>
                    <div>Sun: {restaurantInfo.hours.sunday}</div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-heading font-semibold mb-4 pb-2 border-b border-white/20">Newsletter</h4>
              <p className="text-white/80 text-sm mb-4">
                Subscribe to receive updates on specials and events
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
                <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-r-md transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom copyright */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Frye House Restaurant. All rights reserved.</p>
            
            <div className="text-xs text-white/50">
              Site designed with <span className="text-red-400">♥</span> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
