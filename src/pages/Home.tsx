import React, { useState, useMemo } from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { CategoryScroll } from '@/components/CategoryScroll';
import { ProductCard } from '@/components/ProductCard';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { products, categories } from '@/data/products';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <main className="pb-20 md:pb-8">
        {/* Welcome Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-inter font-bold text-2xl md:text-3xl text-foreground mb-2">
              Welcome to ZupraMart
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Discover amazing products at great prices
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6">
          <CategoryScroll
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4">
          <h2 className="font-inter font-semibold text-xl mb-4">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <ScrollToTopButton />
      <BottomNavigation />
    </div>
  );
};

export default Home;
