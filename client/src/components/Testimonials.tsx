import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-3 h-3 md:w-4 md:h-4 ${index < rating ? 'text-accent fill-accent' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-10 md:py-16 bg-amber-50/40 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">What Our Customers Say</h2>
          <div className="w-16 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our customers have to say about their experience at Frye House.
          </p>
        </div>
        
        {/* Mobile Testimonial */}
        <div className="md:hidden">
          <div className="bg-white rounded-lg shadow-md p-5 transition duration-300 hover:shadow-lg relative mx-auto max-w-sm">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4" />
            </div>
            
            <div className="pt-2">
              <p className="text-foreground italic text-sm mb-3">"{testimonials[currentIndex].text}"</p>
              
              <div className="flex items-center mt-3">
                <div className="flex-1">
                  <p className="font-semibold text-primary text-sm">{testimonials[currentIndex].name}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                    <span className="ml-2 text-xs text-gray-500">{testimonials[currentIndex].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-8 w-8 p-0 border-accent text-accent hover:bg-accent hover:text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-8 w-8 p-0 border-accent text-accent hover:bg-accent hover:text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Desktop Testimonials */}
        <div className="hidden md:block">
          <table className="w-full border-separate border-spacing-4">
            <tbody>
              <tr>
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  return (
                    <td key={index} className="w-1/3 align-top">
                      <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg relative">
                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                          <Quote className="w-5 h-5" />
                        </div>
                        
                        <div className="pt-3">
                          <p className="text-foreground italic mb-4">"{testimonials[index].text}"</p>
                          
                          <div className="flex items-center mt-4">
                            <div className="flex-1">
                              <p className="font-semibold text-primary">{testimonials[index].name}</p>
                              <div className="flex items-center mt-1">
                                {renderStars(testimonials[index].rating)}
                                <span className="ml-2 text-sm text-gray-500">{testimonials[index].date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-10 w-10 p-0 border-accent text-accent hover:bg-accent hover:text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-10 w-10 p-0 border-accent text-accent hover:bg-accent hover:text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-6 md:mt-10">
          <a 
            href="https://www.google.com/search?q=Frye+House+Reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-primary transition-colors text-sm md:text-base"
          >
            See more reviews on Google 
            <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
