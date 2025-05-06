import { Button } from '@/components/ui/button';
import { useMenuTabs } from '@/hooks/use-menu-tabs';
import { burgers, seafood, sandwiches, sides } from '@/lib/data';

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
              <h3 className="text-2xl font-heading font-semibold mb-8 menu-section-title">Burgers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {burgers.map((burger, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
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
              <h3 className="text-2xl font-heading font-semibold mb-8 menu-section-title">Seafood</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {seafood.map((item, index) => (
                  <div key={index} className="bg-neutral p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{item.name}</h4>
                        <p className="text-textDark mt-2">{item.description}</p>
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
              <h3 className="text-2xl font-heading font-semibold mb-8 menu-section-title">Sandwiches</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sandwiches.map((sandwich, index) => (
                  <div key={index} className="bg-neutral p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{sandwich.name}</h4>
                        <p className="text-textDark mt-2">{sandwich.description}</p>
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
              <h3 className="text-2xl font-heading font-semibold mb-8 menu-section-title">Sides</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sides.map((side, index) => (
                  <div key={index} className="bg-neutral p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-primary">{side.name}</h4>
                        <p className="text-textDark mt-2">{side.description}</p>
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
