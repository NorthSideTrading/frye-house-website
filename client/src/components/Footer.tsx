import { Link } from 'wouter';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-heading font-bold">Frye House</h3>
            <p className="text-sm mt-1 text-secondary">Serving Farmingdale since 2010</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Frye House Restaurant. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://m.facebook.com/100044722821803/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-secondary transition duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
