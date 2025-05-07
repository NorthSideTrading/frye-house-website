import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, ChefHat, Ship, Coffee } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';
// Replaced collage with food image for consistency

export default function About() {
  return (
    <section className="py-12 md:py-20 flex-grow bg-pattern-section">
      <div className="container mx-auto px-4">
        {/* Hero Section with About Us Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">About Us</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Serving homemade comfort food in Farmingdale, Maine
          </p>
        </div>
        
        {/* Featured Image Banner */}
        <div className="rounded-xl overflow-hidden relative mb-16 shadow-xl">
          <img 
            src="/images/specialties/lobster-roll-hq.jpg" 
            alt="Frye House Specialty" 
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-12 px-6">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white">
                Good food, made simple
              </h2>
              <p className="text-white/90 max-w-lg">
                A taste of Maine comfort since we first opened our doors
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content - Story & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden h-full">
              {/* Background logo watermark */}
              <div className="absolute right-0 bottom-0 opacity-5 w-1/3">
                <img 
                  src={fryeHouseLogo} 
                  alt="Frye House Logo Background" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                  Est. Farmingdale, Maine
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Welcome to Frye House
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
                  <p className="text-lg leading-relaxed">
                    Welcome to Frye House — your go-to spot for classic comfort food in Farmingdale, Maine.
                  </p>
                  
                  <p className="leading-relaxed">
                    We're known for our crispy fried chicken, fresh seafood, and homemade favorites like burgers, 
                    chowders, and lobster rolls. Everything is made fresh and with care, just like you'd expect 
                    from a hometown kitchen.
                  </p>
                  
                  <p className="leading-relaxed">
                    Whether you're grabbing a quick bite or sitting down with family, our goal is to make you feel 
                    right at home. We offer takeout, delivery, and outdoor seating for your convenience.
                  </p>
                </div>
                
                {/* Values Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <div className="text-center p-4 border border-amber-100 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                      <ChefHat className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium text-primary mb-2">Homemade Quality</h3>
                    <p className="text-gray-600 text-sm">Made fresh daily with local ingredients when possible</p>
                  </div>
                  
                  <div className="text-center p-4 border border-amber-100 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                      <Ship className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium text-primary mb-2">Maine Seafood</h3>
                    <p className="text-gray-600 text-sm">Featuring local catches and Maine's famous lobster</p>
                  </div>
                  
                  <div className="text-center p-4 border border-amber-100 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                      <Coffee className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium text-primary mb-2">Comfort Food</h3>
                    <p className="text-gray-600 text-sm">Classic favorites that feel like home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visit Info */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-24">
              {/* Image */}
              <div className="relative mb-8 shadow-xl">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-amber-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-amber-100 rounded-lg -z-10"></div>
                <img 
                  src="/images/specialties/burger-hq.jpg" 
                  alt="Frye House Burger Special" 
                  className="rounded-lg w-full h-auto object-cover z-10"
                />
                <div className="absolute top-4 right-4 flex justify-center">
                  <div className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-medium text-primary text-sm">Good food, made simple</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hours & Visit Info */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-accent/10 p-4 border-b border-amber-100">
                  <h3 className="text-lg font-semibold text-primary flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Opening Hours
                  </h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tuesday - Saturday</span>
                      <span className="font-medium">11:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-100 pt-3">
                      <span className="text-gray-600">Sunday & Monday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-100 mt-6 pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">Find Us</h3>
                        <p className="text-gray-600 text-sm">{restaurantInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">Contact Us</h3>
                        <p className="text-gray-600 text-sm">{restaurantInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Link href="/menu" className="flex-1">
                      <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                        Our Menu
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white w-full">
                        Get Directions
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Location</h2>
              <p className="text-gray-600 mb-6">
                Conveniently located on Maine Avenue in Farmingdale, we're just a short drive from Augusta, Gardiner, and Hallowell. 
                Drop by for a freshly prepared meal or call ahead for pickup.
              </p>
              
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                <p className="font-medium text-primary">{restaurantInfo.address}</p>
                <p className="text-gray-600">{restaurantInfo.phone}</p>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] relative">
              <iframe 
                src={restaurantInfo.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Frye House Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Come Taste Maine's Comfort Food
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're a local or just passing through, we invite you to experience our 
            fresh, homemade food in a welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-lg">
                View Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}