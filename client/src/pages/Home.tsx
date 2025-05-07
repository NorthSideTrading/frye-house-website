import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef, Clock, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-circular-logo.png';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <section className="flex-grow bg-pattern-section">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Condensed */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg overflow-hidden mb-10">
          {/* Info Bar - Moved to top */}
          <div className="bg-primary text-white py-3 px-4">
            <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>{restaurantInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{restaurantInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Open: {restaurantInfo.hours.monday}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col md:flex-row items-center">
            {/* Logo + Text - Side by side on desktop, stacked on mobile */}
            <div className="md:w-3/5 mb-4 md:mb-0 md:pr-8 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 text-center md:text-left">
                Authentic Maine Cuisine
              </h1>
              <p className="text-base mb-6 text-foreground">
                Experience delicious, home-style cooking in a warm and friendly atmosphere in Farmingdale, Maine. 
                We're passionate about serving quality food made with locally-sourced ingredients.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/menu">
                  <Button className="bg-accent hover:bg-primary text-white py-2 px-6 rounded-md shadow-sm">
                    View Our Menu
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white py-2 px-6 rounded-md">
                    Find Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end mb-4 md:mb-0">
              <img 
                src={fryeHouseLogo} 
                alt="Frye House Logo" 
                className="w-48 md:w-56 h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
        
        {/* Specialties Section - Grid layout instead of table */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">Our Signature Specialties</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/specialties/chicken-platter-hq.jpg" 
                  alt="Frye House Fried Chicken" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-2 left-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                  Customer Favorite
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Utensils className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-heading font-semibold">Home-Style Cooking</h3>
                </div>
                <p className="text-sm text-foreground">
                  Our fried chicken and comfort food classics made from scratch using time-honored family recipes.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/specialties/lobster-roll-hq.jpg" 
                  alt="Frye House Lobster Roll" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-2 left-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                  Maine Specialty
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Fish className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-heading font-semibold">Fresh Maine Seafood</h3>
                </div>
                <p className="text-sm text-foreground">
                  From lobster rolls to perfectly fried haddock and scallops, we serve only the freshest local seafood.
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/specialties/burger-hq.jpg" 
                  alt="Frye House Burger" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-2 left-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                  Family Favorite
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Beef className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-heading font-semibold">Classic American Fare</h3>
                </div>
                <p className="text-sm text-foreground">
                  Savor our juicy burgers, golden fries, and hearty sandwiches – satisfying comfort food for everyone.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link href="/menu">
              <Button className="bg-accent hover:bg-primary text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Condensed Testimonials */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <Testimonials />
        </div>
        
        {/* Call to Action - Simplified */}
        <div className="bg-primary text-white text-center py-8 px-4 rounded-lg mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Visit Us Today</h3>
          <p className="mb-6 max-w-lg mx-auto">Join us for a meal at Frye House and discover why we've become a favorite in Farmingdale since 2017.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-amber-100">
                Get Directions
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/80 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
