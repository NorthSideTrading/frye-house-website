import { Button } from '@/components/ui/button';
import { useMenuTabs } from '@/hooks/use-menu-tabs';
import { burgers, seafood, sandwiches, sides } from '@/lib/data';
import burgerImage from '@/assets/frye-burger.jpg';
import seafoodImage from '@/assets/frye-seafood.jpg';
import sandwichImage from '@/assets/frye-sandwich.jpg';

export default function Menu() {
  const { activeCategory, changeCategory, isActive } = useMenuTabs();

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
          Our Menu
        </h2>
        
        {/* Menu Categories Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 md:gap-6">
          <Button
            variant={isActive('burgers') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('burgers') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-primary'
            }`}
            onClick={() => changeCategory('burgers')}
          >
            Burgers
          </Button>
          
          <Button
            variant={isActive('seafood') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('seafood') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-primary'
            }`}
            onClick={() => changeCategory('seafood')}
          >
            Seafood
          </Button>
          
          <Button
            variant={isActive('sandwiches') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('sandwiches') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-primary'
            }`}
            onClick={() => changeCategory('sandwiches')}
          >
            Sandwiches
          </Button>
          
          <Button
            variant={isActive('sides') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('sides') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-primary'
            }`}
            onClick={() => changeCategory('sides')}
          >
            Sides
          </Button>
        </div>
        
        {/* Menu Content */}
        <div className="menu-content">
          {/* Burgers Section */}
          {isActive('burgers') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={burgerImage} alt="Frye House Burgers" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Burgers</h3>
                  <p className="text-foreground">Our signature burgers are made with fresh, locally-sourced ingredients and cooked to perfection. Each burger comes with your choice of fries or house salad.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {burgers.map((burger, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-accent">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{burger.name}</h4>
                        <p className="text-foreground mt-2">{burger.description}</p>
                      </div>
                      <span className="text-accent font-semibold ml-4">{burger.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Seafood Section */}
          {isActive('seafood') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={seafoodImage} alt="Frye House Seafood" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Seafood</h3>
                  <p className="text-foreground">Our fresh seafood is sourced locally whenever possible. We take pride in serving the finest seafood dishes made with traditional recipes and a modern twist.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {seafood.map((item, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-accent">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{item.name}</h4>
                        <p className="text-foreground mt-2">{item.description}</p>
                      </div>
                      <span className="text-accent font-semibold ml-4">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Sandwiches Section */}
          {isActive('sandwiches') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={sandwichImage} alt="Frye House Sandwiches" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Sandwiches</h3>
                  <p className="text-foreground">Our sandwiches are made with freshly baked bread and premium ingredients. Each sandwich is served with your choice of fries, chips, or house salad.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sandwiches.map((sandwich, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-accent">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{sandwich.name}</h4>
                        <p className="text-foreground mt-2">{sandwich.description}</p>
                      </div>
                      <span className="text-accent font-semibold ml-4">{sandwich.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Sides Section */}
          {isActive('sides') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={seafoodImage} alt="Frye House Sides" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Sides</h3>
                  <p className="text-foreground">Complete your meal with our selection of delicious sides. From crispy fries to fresh salads, we have the perfect complement to your main dish.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sides.map((side, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-accent">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{side.name}</h4>
                        <p className="text-foreground mt-2">{side.description}</p>
                      </div>
                      <span className="text-accent font-semibold ml-4">{side.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
