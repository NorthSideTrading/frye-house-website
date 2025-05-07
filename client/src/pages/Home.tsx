import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef, Clock, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-circular-logo.png';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <section className="py-12 md:py-20 flex-grow bg-pattern-section">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-2xl overflow-hidden mb-20">
          <div className="relative p-8 md:p-12">
            {/* Hero content with logo */}
            <div className="flex flex-col items-center">
              {/* Mobile: Logo above text for small screens */}
              <div className="flex md:hidden justify-center w-full mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-200/20 blur-xl transform scale-110"></div>
                  <div className="relative">
                    <img 
                      src={fryeHouseLogo} 
                      alt="Frye House Logo" 
                      className="w-48 h-auto object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Desktop layout: Side by side */}
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-center md:text-left">
                    Authentic Maine Cuisine
                  </h1>
                  <p className="text-lg mb-8 text-foreground leading-relaxed">
                    Experience delicious, home-style cooking in a warm and friendly atmosphere in Farmingdale, Maine. 
                    We're passionate about serving quality food made with locally-sourced ingredients that brings people together.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
                    <Link href="/menu">
                      <Button className="bg-accent hover:bg-primary text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md w-full sm:w-auto">
                        View Our Menu
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md w-full sm:w-auto">
                        Find Us
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Hide on mobile, show on desktop */}
                <div className="hidden md:flex md:w-2/5 justify-center items-center md:justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-200/20 blur-xl transform scale-110"></div>
                    <div className="relative">
                      <img 
                        src={fryeHouseLogo} 
                        alt="Frye House Logo" 
                        className="w-80 h-auto object-contain drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Info Bar */}
          <div className="bg-primary text-white py-4 px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">{restaurantInfo.phone}</span>
                </div>
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">Open Today: {restaurantInfo.hours.monday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features/Highlights Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Signature Specialties</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Frye House, we take pride in our home-cooked meals prepared with the freshest ingredients from local sources.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden my-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
              <img 
                src="/images/specialties/chicken-platter-hq.jpg" 
                alt="Frye House Platter with Wings, Chicken Nuggets and Tenders" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-amber-100 rounded-full text-accent mr-3">
                  <Utensils className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Home-Style Cooking & Fresh Maine Seafood</h3>
              </div>
              <p className="text-foreground mb-4">
                Experience our signature dishes including fried chicken platters, fresh lobster rolls, and juicy burgers. 
                All made with locally-sourced ingredients and served with Maine hospitality.
              </p>
              <Link href="/menu">
                <Button className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md self-start">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action */}
        <div className="bg-primary text-white text-center py-12 px-6 rounded-xl mt-20 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Taste of Maine Today</h3>
          <p className="mb-8 max-w-2xl mx-auto">Join us for a meal at Frye House and discover why we've become a favorite in Farmingdale since 2017.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-amber-100 font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md">
                Get Directions
              </Button>
            </Link>
            <Link href="/menu">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md">
                View Full Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
