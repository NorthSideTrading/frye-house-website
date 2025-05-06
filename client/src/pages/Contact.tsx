import { Phone, MapPin, Clock, Facebook } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
          Visit Us
        </h2>
        
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-foreground">{restaurantInfo.phone}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-foreground">{restaurantInfo.address}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="text-accent mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Hours</h4>
                    <ul className="text-foreground">
                      <li className="mb-1">Monday - Thursday: {restaurantInfo.hours.monday}</li>
                      <li className="mb-1">Friday - Saturday: {restaurantInfo.hours.friday}</li>
                      <li>Sunday: {restaurantInfo.hours.sunday}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={restaurantInfo.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-accent transition duration-300"
                >
                  <Facebook className="h-5 w-5 mr-2" /> Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <iframe
                src={restaurantInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                title="Google Maps - Frye House Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
