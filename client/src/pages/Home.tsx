import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-circular-logo.png';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <section className="py-12 md:py-20 flex-grow bg-pattern-section">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-2xl overflow-hidden mb-12 md:mb-20">
          <div className="relative p-6 md:p-12">
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
                      className="w-40 h-auto object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Desktop layout: Side by side */}
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
                  <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 md:mb-6 text-center md:text-left">
                    Authentic Maine Cuisine
                  </h1>
                  <p className="text-base md:text-lg mb-6 md:mb-8 text-foreground leading-relaxed">
                    Experience delicious, home-style cooking in a warm and friendly atmosphere in Farmingdale, Maine. 
                    We're passionate about serving quality food made with locally-sourced ingredients.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-4">
                    <Link href="/menu">
                      <Button className="bg-accent hover:bg-primary text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md w-full sm:w-auto">
                        View Our Menu
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md w-full sm:w-auto">
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
          <div className="bg-primary text-white py-3 px-4 md:py-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2 text-xs md:text-sm">
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="whitespace-nowrap">{restaurantInfo.phone}</span>
                </div>
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="whitespace-nowrap">{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center w-full lg:w-auto justify-center">
                  <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="whitespace-nowrap">Open Today: {restaurantInfo.hours.monday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features/Highlights Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">Our Signature Specialties</h2>
          <div className="w-16 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            At Frye House, we take pride in our home-cooked meals prepared with the freshest ingredients from local sources. 
            Every dish is crafted with care to give you an authentic Maine dining experience.
          </p>
        </div>
        
        {/* Mobile specialties grid */}
        <div className="md:hidden space-y-6 mb-12">
          {/* First card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/images/specialties/chicken-platter-hq.jpg" 
                alt="Frye House Platter with Wings, Chicken Nuggets and Tenders" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Customer Favorite
              </div>
            </div>
            <div className="p-4 border-t-4 border-accent">
              <div className="inline-block p-2 bg-amber-100 rounded-full text-accent mb-3">
                <Utensils className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Home-Style Cooking</h3>
              <p className="text-sm text-foreground mb-3">
                Our fried chicken and comfort food classics are made from scratch using time-honored family recipes.
              </p>
              <Link href="/menu" className="inline-flex items-center text-accent font-medium hover:underline">
                Explore Menu <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Second card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/images/specialties/lobster-roll-hq.jpg" 
                alt="Frye House Maine Lobster Roll" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Maine Specialty
              </div>
            </div>
            <div className="p-4 border-t-4 border-accent">
              <div className="inline-block p-2 bg-amber-100 rounded-full text-accent mb-3">
                <Fish className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Fresh Maine Seafood</h3>
              <p className="text-sm text-foreground mb-3">
                From our famous lobster rolls to perfectly fried haddock, we serve only the freshest seafood caught locally.
              </p>
              <Link href="/menu" className="inline-flex items-center text-accent font-medium hover:underline">
                Explore Menu <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Third card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/images/specialties/burger-hq.jpg" 
                alt="Frye House Double Cheeseburger" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Family Favorite
              </div>
            </div>
            <div className="p-4 border-t-4 border-accent">
              <div className="inline-block p-2 bg-amber-100 rounded-full text-accent mb-3">
                <Beef className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Classic American Fare</h3>
              <p className="text-sm text-foreground mb-3">
                Savor our juicy burgers, golden fries, and hearty sandwiches – satisfying comfort food that brings people together.
              </p>
              <Link href="/menu" className="inline-flex items-center text-accent font-medium hover:underline">
                Explore Menu <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Desktop specialties table */}
        <div className="hidden md:block my-12 w-full">
          <table className="w-full border-separate border-spacing-4">
            <tbody>
              <tr>
                <td className="w-1/3 align-top">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src="/images/specialties/chicken-platter-hq.jpg" 
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
                </td>
                <td className="w-1/3 align-top">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src="/images/specialties/lobster-roll-hq.jpg" 
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
                </td>
                <td className="w-1/3 align-top">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src="/images/specialties/burger-hq.jpg" 
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action */}
        <div className="bg-primary text-white text-center py-8 px-4 md:py-12 md:px-6 rounded-xl mt-12 md:mt-20 mb-8">
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Experience the Taste of Maine Today</h3>
          <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">Join us for a meal at Frye House and discover why we've become a favorite in Farmingdale since 2017.</p>
          <div className="flex flex-col gap-3 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-amber-100 font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md w-full md:w-auto">
                Get Directions
              </Button>
            </Link>
            <Link href="/menu">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md w-full md:w-auto">
                View Full Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md w-full md:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
