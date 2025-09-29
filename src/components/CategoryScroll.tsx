import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryScrollProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryScroll: React.FC<CategoryScrollProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="overflow-x-auto pb-2 mb-6">
      <div className="flex gap-3 min-w-max px-4 md:px-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full transition-smooth ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};