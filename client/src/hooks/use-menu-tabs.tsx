import { useState } from 'react';

type MenuCategory = 'overview' | 'dinnerBaskets' | 'snacks' | 'pints' | 'specialties' | 'soups' | 'sandwiches' | 'sides' | 'drinks';

export function useMenuTabs(defaultCategory: MenuCategory = 'overview') {
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
