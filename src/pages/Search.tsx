import React, { useState, useMemo, useEffect, useRef } from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [sortBy, setSortBy] = useState('name');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const maxPrice = Math.max(...products.map(p => p.price));

  useEffect(() => {
    // Auto-focus the search input when component mounts
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="Search Products" 
        showBack={true} 
        showSearch={false}
      />
      
      <main className="pb-20 md:pb-8">
        {/* Search Input */}
        <section className="container mx-auto px-4 py-4">
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-4 mb-6">
          <div className="bg-card rounded-lg p-4 card-shadow space-y-4">
            <h3 className="font-inter font-semibold text-lg">Filters & Sort</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg">
                    {categories.map(category => (
                      <SelectItem 
                        key={category} 
                        value={category}
                        className="hover:bg-accent focus:bg-accent"
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Sort by Name" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg">
                    <SelectItem value="name" className="hover:bg-accent focus:bg-accent">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low" className="hover:bg-accent focus:bg-accent">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="hover:bg-accent focus:bg-accent">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <div className="space-y-2 flex items-end">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, maxPrice]);
                    setSortBy('name');
                  }}
                  className="w-full"
                  size="sm"
                >
                  Clear All
                </Button>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Price Range</Label>
                <span className="text-sm text-muted-foreground">
                  ৳{priceRange[0].toLocaleString()} - ৳{priceRange[1].toLocaleString()}
                </span>
              </div>
              <div className="px-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={maxPrice}
                  min={0}
                  step={1000}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>৳0</span>
                <span>৳{maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-inter font-semibold text-lg">
              {filteredProducts.length} Products Found
            </h2>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange([0, maxPrice]);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Search;