import { useState } from 'react';

type MenuCategory = 'burgers' | 'seafood' | 'sandwiches' | 'sides';

export function useMenuTabs(defaultCategory: MenuCategory = 'burgers') {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(defaultCategory);

  const changeCategory = (category: MenuCategory) => {
    setActiveCategory(category);
  };

  const isActive = (category: MenuCategory) => {
    return activeCategory === category;
  };

  return {
    activeCategory,
    changeCategory,
    isActive
  };
}
