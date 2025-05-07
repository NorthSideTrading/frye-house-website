import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useMenuTabs } from '@/hooks/use-menu-tabs';
import { dinnerBaskets, snacks, pints, specialties, soups, sandwiches, sides, drinks } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState<string[]>([]);
  
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
  
  // Extract keywords from menu items for autocomplete suggestions
  const menuItemNames = allMenuItems.map(item => item.name);
  const additionalKeywords = [
    'Lobster Roll', 'Chicken', 'Haddock', 'Scallops', 'Shrimp', 'Clam', 
    'Mixed Sea', 'Fish', 'Burger', 'Pint', 'Basket', 'Wings', 'Stew', 
    'Soup', 'Chowder', 'Sandwich', 'Fries', 'Onion Rings', 'Coleslaw',
    'Milkshake', 'Drink', 'Tenderloin', 'Seafood', 'Hot Dog', 'Grilled Cheese',
    'Philly', 'BBQ', 'Pizza', 'Salad', 'Dinner', 'Snack'
  ];
  
  // Remove duplicates from combined keywords array
  const combinedKeywords = [...menuItemNames, ...additionalKeywords];
  const uniqueKeywords: { [key: string]: boolean } = {};
  const autocompleteKeywords = combinedKeywords
    .filter(keyword => {
      if (!uniqueKeywords[keyword]) {
        uniqueKeywords[keyword] = true;
        return true;
      }
      return false;
    })
    .sort();
  
  // Update suggestions based on input
  useEffect(() => {
    if (searchQuery.length >= 1) {
      const filteredSuggestions = autocompleteKeywords.filter(keyword => 
        keyword.toLowerCase().startsWith(searchQuery.toLowerCase()) && 
        keyword.toLowerCase() !== searchQuery.toLowerCase()
      ).slice(0, 6); // Limit to top 6 suggestions
      
      setSuggestionsList(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
      setSuggestionsList([]);
    }
  }, [searchQuery]);
  
  // Handle selecting a suggestion
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
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
              onClick={(e) => {
                e.stopPropagation();
                if (searchQuery.length > 0 && suggestionsList.length > 0) {
                  setShowSuggestions(true);
                }
              }}
            />
            {searchQuery && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-primary" />
              </button>
            )}
            
            {/* Autocomplete Dropdown */}
            {showSuggestions && (
              <div 
                className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="py-1">
                  {suggestionsList.map((suggestion, index) => (
                    <li 
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 cursor-pointer flex items-center"
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      <Search className="h-3.5 w-3.5 mr-2 text-gray-400" />
                      <span>
                        {suggestion.split(new RegExp(`(${searchQuery})`, 'i')).map((part, i) => 
                          part.toLowerCase() === searchQuery.toLowerCase() ? 
                            <span key={i} className="font-bold text-accent">{part}</span> : 
                            <span key={i}>{part}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Keyword Suggestions */}
          <div className="mt-4 mb-2">
            <div className="flex items-center justify-center mb-2">
              <span className="text-sm text-gray-600 font-medium mr-2">Try popular searches:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Lobster Roll', 
                'Haddock', 
                'Scallops', 
                'Chicken', 
                'Basket', 
                'Clams', 
                'Burger', 
                'Pint',
                'Wings',
                'Milkshake',
                'Onion Rings',
                'Fries'
              ].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setSearchQuery(keyword)}
                  className="px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-primary text-xs font-medium rounded-full transition-all duration-200 hover:shadow-sm border border-accent/10 hover:border-accent/30"
                >
                  {keyword}
                </button>
              ))}
            </div>
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
            variant={isActive('overview') ? "default" : "secondary"}
            className={`rounded-full font-semibold ${
              isActive('overview') 
                ? 'bg-accent hover:bg-accent/90 text-white' 
                : 'bg-secondary hover:bg-accent hover:text-white text-white'
            }`}
            onClick={() => changeCategory('overview')}
          >
            Menu Overview
          </Button>
        
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
              {/* Menu Overview Section */}
              {isActive('overview') && (
                <div className="menu-category">
                  <div className="mb-8">
                    <div className="flex flex-col items-center">
                      <div className="text-center mb-4">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Category Selection</h3>
                        <p className="text-foreground/80 mt-2 max-w-2xl mx-auto text-sm">
                          Click any category below to explore our delicious offerings
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {[
                      {
                        category: 'dinnerBaskets',
                        title: 'Dinner Baskets',
                        description: 'Served with fries, roll & coleslaw',
                        image: '/images/menu/dinner-basket-fried.jpg'
                      },
                      {
                        category: 'snacks',
                        title: 'Snacks',
                        description: 'Quick bites served with fries',
                        image: '/images/menu/nuggets-fries.jpg'
                      },
                      {
                        category: 'pints',
                        title: 'Pints',
                        description: 'Generous pint-sized servings',
                        image: '/images/menu/pint-seafood.jpg'
                      },
                      {
                        category: 'specialties',
                        title: 'Specialties',
                        description: 'Featuring our famous lobster roll',
                        image: '/images/menu/lobster-roll-hq.jpg'
                      },
                      {
                        category: 'soups',
                        title: 'Soups & Stews',
                        description: 'Hearty soups to warm you up',
                        image: '/images/menu/chowder-closeup.jpg'
                      },
                      {
                        category: 'sandwiches',
                        title: 'Sandwiches',
                        description: 'Fresh and delicious sandwiches',
                        image: '/images/menu/fish-sandwich-closeup.jpg'
                      },
                      {
                        category: 'sides',
                        title: 'Sides',
                        description: 'Perfect complements to your meal',
                        image: '/images/menu/coleslaw-sides.jpg'
                      },
                      {
                        category: 'drinks',
                        title: 'Drinks',
                        description: 'Refreshing beverages and shakes',
                        image: '/images/menu/milkshakes.webp'
                      }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        onClick={() => changeCategory(item.category as any)} 
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent group border border-gray-100"
                      >
                        <div className="h-36 overflow-hidden relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-3 text-center bg-white group-hover:bg-accent/5 transition-colors duration-300">
                          <h4 className="text-base font-heading font-bold text-primary group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
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
                          src="/images/menu/pint-seafood.jpg" 
                          alt="Frye House Seafood Pint" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Pints</h3>
                        <p className="text-foreground/90 italic mt-1">Our pint-sized servings - great for sharing or a hearty meal.</p>
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
                          alt="Frye House Lobster Roll" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Specialties</h3>
                        <p className="text-foreground/90 italic mt-1">Our specialty items including our famous lobster roll.</p>
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
                          alt="Frye House Seafood Stew" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Soups & Stews</h3>
                        <p className="text-foreground/90 italic mt-1">Our signature soups and stews to warm you up.</p>
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
                          alt="Frye House Fish Sandwich" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Sandwiches</h3>
                        <p className="text-foreground/90 italic mt-1">Our delicious sandwich options.</p>
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
                          alt="Frye House Side Orders" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Sides</h3>
                        <p className="text-foreground/90 italic mt-1">Perfect additions to complete your meal.</p>
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
                          alt="Frye House Milkshakes" 
                          className="w-full max-h-[400px] object-contain mx-auto" 
                        />
                      </div>
                      <div className="text-center mb-4 border-b-2 border-primary pb-2 max-w-md">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Drinks</h3>
                        <p className="text-foreground/90 italic mt-1">Refreshing beverages to accompany your meal.</p>
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