import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMenuTabs } from '@/hooks/use-menu-tabs';
import { dinnerBaskets, snacks, pints, specialties, soups, sandwiches, sides, drinks } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import type { MenuItem } from '../lib/types';

// Enhanced menu item component for a more stylish display
const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-accent group hover:bg-accent/5">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-heading font-bold text-primary group-hover:text-primary/90">{item.name}</h4>
          <p className="text-foreground/80 mt-2 leading-relaxed">{item.description}</p>
        </div>
        <span className="bg-accent/90 text-white font-semibold px-3 py-1 rounded-full ml-4 text-sm shadow-sm group-hover:bg-accent group-hover:shadow-md transition-all duration-300">{item.price}</span>
      </div>
    </div>
  );
};

export default function Menu() {
  const { activeCategory, changeCategory, isActive } = useMenuTabs();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Combine all menu items for searching
  const allMenuItems = [
    ...dinnerBaskets.map(item => ({ ...item, category: 'dinnerBaskets' })),
    ...snacks.map(item => ({ ...item, category: 'snacks' })),
    ...pints.map(item => ({ ...item, category: 'pints' })),
    ...specialties.map(item => ({ ...item, category: 'specialties' })),
    ...soups.map(item => ({ ...item, category: 'soups' })),
    ...sandwiches.map(item => ({ ...item, category: 'sandwiches' })),
    ...sides.map(item => ({ ...item, category: 'sides' })),
    ...drinks.map(item => ({ ...item, category: 'drinks' }))
  ];
  
  // Filter menu items based on search query
  const filteredItems = searchQuery 
    ? allMenuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <section className="py-12 md:py-20 bg-white bg-pattern-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
          Our Menu
        </h2>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search menu items..."
              className="pl-10 pr-10 py-2 border-accent/30 focus:border-accent focus:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-primary" />
              </button>
            )}
          </div>
        </div>
        
        {/* Search Results */}
        {searchQuery && (
          <div className="mb-12">
            <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
              Search Results ({filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found)
            </h3>
            
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredItems.map((item, index) => (
                  <div key={index} className="relative">
                    <MenuItemCard item={item} />
                    <p className="absolute bottom-2 right-3 text-xs text-gray-500">
                      Category: {item.category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-background rounded-lg">
                <p className="text-gray-500">No menu items found matching "{searchQuery}"</p>
                <p className="text-gray-500 text-sm mt-2">Try a different search term or browse by category below</p>
              </div>
            )}
          </div>
        )}
        
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
          {/* Only show menu categories when not searching */}
          {!searchQuery && (
            <>
              {/* Dinner Baskets Section */}
              {isActive('dinnerBaskets') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/dinner-basket-fried.jpg" 
                          alt="Frye House Dinner Baskets" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Dinner Baskets</h3>
                        <p className="text-foreground/90 italic mt-1">Our dinner baskets include fries, roll & coleslaw.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dinnerBaskets.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Snacks Section */}
              {isActive('snacks') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/nuggets-fries.jpg" 
                          alt="Frye House Chicken Nuggets and Fries" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Snacks</h3>
                        <p className="text-foreground/90 italic mt-1">Our snack options come with fries.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {snacks.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Pints Section */}
              {isActive('pints') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/pints.jpg" 
                          alt="Frye House Pints" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Pints</h3>
                        <p className="text-foreground/90 italic mt-1">Generous pint-sized servings of our delicious fried foods.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pints.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Specialties Section */}
              {isActive('specialties') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/lobster-roll-hq.jpg" 
                          alt="Frye House Specialties - Lobster Roll" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Specialties</h3>
                        <p className="text-foreground/90 italic mt-1">Try our specialties including the Family Meal, wings, and our famous lobster rolls.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {specialties.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Soups Section */}
              {isActive('soups') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/chowder-closeup.jpg" 
                          alt="Frye House Soups" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Soups & Stews</h3>
                        <p className="text-foreground/90 italic mt-1">Our hearty soups and stews are the perfect way to warm up on a cool day or add to your meal.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {soups.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sandwiches Section */}
              {isActive('sandwiches') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/fish-sandwich-closeup.jpg" 
                          alt="Frye House Sandwiches" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Sandwiches</h3>
                        <p className="text-foreground/90 italic mt-1">Our sandwiches are made with fresh ingredients and served on quality bread. Add fries to make it a meal.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sandwiches.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sides Section */}
              {isActive('sides') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/coleslaw-sides.jpg" 
                          alt="Frye House Sides" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Sides</h3>
                        <p className="text-foreground/90 italic mt-1">Complete your meal with our selection of delicious sides. From onion rings to fried pickles, we have the perfect complement to your main dish.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sides.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Drinks Section */}
              {isActive('drinks') && (
                <div className="menu-category">
                  <div className="mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-auto overflow-hidden rounded-lg bg-white p-1 mb-4">
                        <img 
                          src="/images/menu/milkshakes.webp" 
                          alt="Frye House Milkshakes and Drinks" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Drinks</h3>
                        <p className="text-foreground/90 italic mt-1">Quench your thirst with our selection of refreshing beverages and delicious milkshakes.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {drinks.map((item: MenuItem, index: number) => (
                      <MenuItemCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}