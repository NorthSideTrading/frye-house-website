import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';
import restaurantImage from '@/assets/frye-interior.jpg';
import burgerImage from '@/assets/frye-burger.jpg';
import friedChickenImage from '@/assets/frye-sandwich.jpg';
import seafoodImage from '@/assets/frye-seafood.jpg';

export default function Home() {
  return (
    <section className="py-12 md:py-20 flex-grow">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Welcome to {restaurantInfo.name}
            </h1>
            <p className="text-lg mb-8 text-foreground leading-relaxed">
              Experience delicious, home-style cooking in a warm and friendly atmosphere in Farmingdale, Maine. 
              We're passionate about serving quality food that brings people together.
            </p>
            <Link href="/menu">
              <Button className="bg-accent hover:bg-primary text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md">
                View Our Menu
              </Button>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src={restaurantImage} 
              alt="Frye House Restaurant Interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Features/Highlights Section */}
        <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center mt-16">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={friedChickenImage} alt="Fried Chicken" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="text-accent mb-3">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Homemade Specialties</h3>
              <p className="text-foreground">
                Enjoy our selection of homemade dishes prepared with locally sourced ingredients.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={seafoodImage} alt="Seafood" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="text-accent mb-3">
                <Fish className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Fresh Seafood</h3>
              <p className="text-foreground">
                We're known for our delicious seafood options, freshly prepared to perfection.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={burgerImage} alt="Burger" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 border-t-4 border-accent">
              <div className="text-accent mb-3">
                <Beef className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Signature Burgers</h3>
              <p className="text-foreground">
                Try our famous burgers with a variety of toppings and house special sauces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
