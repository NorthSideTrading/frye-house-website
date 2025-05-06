import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Users, Utensils, Heart } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import fryeHouseLogo from '@/assets/frye-house-logo.jpg';
import collageImage from '@/assets/frye-collage.jpg';

export default function About() {
  return (
    <section className="py-12 md:py-20 flex-grow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">About Us</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Image side */}
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-lg -z-10"></div>
              <img 
                src={collageImage} 
                alt="Frye House Food Collage" 
                className="rounded-lg shadow-xl w-full h-auto object-cover z-10"
              />
              <div className="absolute top-4 right-4 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-100">
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="text-accent w-5 h-5" />
                    <span className="font-medium text-primary">Good food, made simple</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg mt-8 border border-amber-100 shadow-inner">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-accent" />
                Opening Hours
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Tuesday - Saturday</span>
                  <span className="font-medium">11:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday & Monday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Text content */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
              {/* Background logo watermark */}
              <div className="absolute right-0 bottom-0 opacity-5 w-1/2">
                <img 
                  src={fryeHouseLogo} 
                  alt="Frye House Logo Background" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
                  Welcome to Frye House
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    Welcome to Frye House — your go-to spot for classic comfort food in Farmingdale, Maine.
                  </p>
                  
                  <p>
                    We're known for our crispy fried chicken, fresh seafood, and homemade favorites like burgers, 
                    chowders, and lobster rolls. Everything is made fresh and with care, just like you'd expect 
                    from a hometown kitchen.
                  </p>
                  
                  <p>
                    Whether you're grabbing a quick bite or sitting down with family, our goal is to make you feel 
                    right at home. We offer takeout, delivery, and outdoor seating for your convenience.
                  </p>
                </div>
                
                {/* Map and Contact Info */}
                <div className="mt-8">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-4">Our Location</h3>
                  
                  {/* Google Map */}
                  <div className="rounded-lg overflow-hidden shadow-md border border-amber-100 mb-6">
                    <iframe 
                      src={restaurantInfo.mapEmbedUrl}
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Frye House Location"
                      className="w-full"
                    ></iframe>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100/50 flex flex-col md:flex-row justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Find Us</h3>
                        <p className="text-gray-600">{restaurantInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Contact Us</h3>
                        <p className="text-gray-600">{restaurantInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/menu">
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
                      View Our Menu
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white w-full sm:w-auto">
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl font-heading text-primary font-semibold">
                Frye House — good food, made simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}