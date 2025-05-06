import { Button } from '@/components/ui/button';
import { useMenuTabs } from '@/hooks/use-menu-tabs';
import { dinnerBaskets, snacks, pints, specialties, soups, sandwiches, sides, drinks } from '@/lib/data';
import burgerImage from '@/assets/frye-burger.jpg';
import seafoodImage from '@/assets/frye-seafood.jpg';
import sandwichImage from '@/assets/frye-sandwich-new.jpg';
import dinnerBasketImage from '@/assets/frye-dinner-basket.jpg';
import snacksImage from '@/assets/frye-snacks.jpg';
import pintsImage from '@/assets/frye-pints.jpg';
import specialtiesImage from '@/assets/frye-specialties.jpg';
import sidesImage from '@/assets/frye-sides.jpg';
import soupsImage from '@/assets/frye-soups.jpg';
import drinksImage from '@/assets/frye-drinks.jpg';
import type { MenuItem } from '../lib/types';

export default function Menu() {
  const { activeCategory, changeCategory, isActive } = useMenuTabs();

  return (
    <section className="py-12 md:py-20 bg-white bg-pattern-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
          Our Menu
        </h2>
        
        {/* Menu Categories Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 md:gap-6">
          <Button
            variant={isActive('dinnerBaskets') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('dinnerBaskets') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('dinnerBaskets')}
          >
            Dinner Baskets
          </Button>
          
          <Button
            variant={isActive('snacks') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('snacks') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('snacks')}
          >
            Snacks
          </Button>

          <Button
            variant={isActive('pints') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('pints') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('pints')}
          >
            Pints
          </Button>
          
          <Button
            variant={isActive('specialties') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('specialties') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('specialties')}
          >
            Specialties
          </Button>
          
          <Button
            variant={isActive('soups') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('soups') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('soups')}
          >
            Soups
          </Button>
          
          <Button
            variant={isActive('sandwiches') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('sandwiches') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
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
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('sides')}
          >
            Sides
          </Button>
          
          <Button
            variant={isActive('drinks') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('drinks') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('drinks')}
          >
            Drinks
          </Button>
        </div>
        
        {/* Menu Content */}
        <div className="menu-content">
          {/* Dinner Baskets Section */}
          {isActive('dinnerBaskets') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={dinnerBasketImage} alt="Frye House Dinner Baskets" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Dinner Baskets</h3>
                  <p className="text-foreground">Our dinner baskets include fries, roll & coleslaw.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dinnerBaskets.map((item: MenuItem, index: number) => (
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
          
          {/* Snacks Section */}
          {isActive('snacks') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={snacksImage} alt="Frye House Snacks" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Snacks</h3>
                  <p className="text-foreground">Our snack options come with fries.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {snacks.map((item: MenuItem, index: number) => (
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
          
          {/* Pints Section */}
          {isActive('pints') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={pintsImage} alt="Frye House Pints" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Pints</h3>
                  <p className="text-foreground">Generous pint-sized servings of our delicious fried foods.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pints.map((item: MenuItem, index: number) => (
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
          
          {/* Specialties Section */}
          {isActive('specialties') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={specialtiesImage} alt="Frye House Specialties" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Specialties</h3>
                  <p className="text-foreground">Try our specialties including the Family Meal, wings, and our famous lobster rolls.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specialties.map((item: MenuItem, index: number) => (
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
          
          {/* Soups Section */}
          {isActive('soups') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={soupsImage} alt="Frye House Soups" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Soups & Stews</h3>
                  <p className="text-foreground">Our hearty soups and stews are the perfect way to warm up on a cool day or add to your meal.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {soups.map((item: MenuItem, index: number) => (
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
                  <p className="text-foreground">Our sandwiches are made with fresh ingredients and served on quality bread. Add fries to make it a meal.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sandwiches.map((item: MenuItem, index: number) => (
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
          
          {/* Sides Section */}
          {isActive('sides') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={sidesImage} alt="Frye House Sides" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Sides</h3>
                  <p className="text-foreground">Complete your meal with our selection of delicious sides. From onion rings to fried pickles, we have the perfect complement to your main dish.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sides.map((item: MenuItem, index: number) => (
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
          
          {/* Drinks Section */}
          {isActive('drinks') && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="md:w-1/3">
                  <img src={drinksImage} alt="Frye House Drinks" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Drinks</h3>
                  <p className="text-foreground">Quench your thirst with our selection of refreshing beverages and delicious milkshakes.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {drinks.map((item: MenuItem, index: number) => (
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
        </div>
      </div>
    </section>
  );
}
