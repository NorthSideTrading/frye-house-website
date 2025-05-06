import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef, Clock, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import restaurantImage from '@/assets/frye-interior.jpg';
import burgerImage from '@/assets/frye-burger-new.jpg';
import friedChickenImage from '@/assets/frye-fried-platter.jpg';
import seafoodImage from '@/assets/frye-seafood-new.jpg';
import fryeHouseLogo from '@/assets/frye-house-circular-logo.png';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <section className="py-12 md:py-20 flex-grow bg-pattern-section">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-2xl overflow-hidden mb-20">
          <div className="relative p-8 md:p-12">
            {/* Hero content with single logo */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/5 mb-10 md:mb-0 md:pr-8">
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
              
              <div className="md:w-2/5 flex justify-center items-center md:justify-end">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Signature Specialties</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Frye House, we take pride in our home-cooked meals prepared with the freshest ingredients from local sources. 
            Every dish is crafted with care to give you an authentic Maine dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={friedChickenImage} 
                alt="Frye House Platter with Wings, Chicken Nuggets and Tenders" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Customer Favorite
              </div>
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="inline-block p-3 bg-amber-100 rounded-full text-accent mb-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Home-Style Cooking</h3>
              <p className="text-foreground">
                Our fried chicken and comfort food classics are made from scratch using time-honored family recipes and locally sourced ingredients.
              </p>
              <Link href="/menu" className="inline-block mt-4 text-accent font-medium hover:underline">
                Explore Menu →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={seafoodImage} 
                alt="Frye House Maine Lobster Roll" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Maine Specialty
              </div>
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="inline-block p-3 bg-amber-100 rounded-full text-accent mb-4">
                <Fish className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Fresh Maine Seafood</h3>
              <p className="text-foreground">
                From our famous lobster rolls to perfectly fried haddock, scallops, and clams, we serve only the freshest seafood caught locally.
              </p>
              <Link href="/menu" className="inline-block mt-4 text-accent font-medium hover:underline">
                Explore Menu →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={burgerImage} 
                alt="Frye House Double Cheeseburger" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Family Favorite
              </div>
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="inline-block p-3 bg-amber-100 rounded-full text-accent mb-4">
                <Beef className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Classic American Fare</h3>
              <p className="text-foreground">
                Savor our juicy burgers, golden fries, and hearty sandwiches – satisfying comfort food that brings people together.
              </p>
              <Link href="/menu" className="inline-block mt-4 text-accent font-medium hover:underline">
                Explore Menu →
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
