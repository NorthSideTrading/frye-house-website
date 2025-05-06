import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Utensils, Fish, Beef } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

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
              src="https://img.freepik.com/free-photo/restaurant-interior-with-wooden-tables-elegant-chairs_176474-762.jpg" 
              alt="Frye House Restaurant" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Features/Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <div className="text-accent mb-3">
              <Utensils className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Homemade Specialties</h3>
            <p className="text-foreground">
              Enjoy our selection of homemade dishes prepared with locally sourced ingredients.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <div className="text-accent mb-3">
              <Fish className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Fresh Seafood</h3>
            <p className="text-foreground">
              We're known for our delicious seafood options, freshly prepared to perfection.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <div className="text-accent mb-3">
              <Beef className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Signature Burgers</h3>
            <p className="text-textDark">
              Try our famous burgers with a variety of toppings and house special sauces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
