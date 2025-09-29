import React from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { wishlist, addToCart, removeFromWishlist } = useApp();

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="My Wishlist" 
        showBack={true} 
        showWishlist={false}
      />
      
      <main className="pb-20 md:pb-8">
        <section className="container mx-auto px-4 py-6">
          {wishlist.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-inter font-semibold text-xl">
                  {wishlist.length} Item{wishlist.length !== 1 ? 's' : ''} in Wishlist
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {wishlist.map((product) => (
                  <div key={product.id} className="bg-card rounded-lg p-4 card-shadow">
                    <div className="flex gap-4 cursor-pointer" onClick={() => window.location.href = `/product/${product.id}`}>
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 space-y-3">
                        <div className="space-y-1">
                          <h3 className="font-inter font-bold text-foreground text-base hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-primary font-bold text-lg">
                            ৳{product.price.toLocaleString()}
                          </p>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              const googleFormUrl = 'https://forms.gle/puEhZYTWGgTvKEa68';
                              const formData = `Product: ${product.name}\nQuantity: 1\nPrice: ৳${product.price}\nProduct ID: ${product.id}`;
                              // Copy details to clipboard
                              navigator.clipboard.writeText(formData).catch(() => {
                                console.log('Could not copy to clipboard');
                              });
                              window.open(`${googleFormUrl}?entry.1000000=${encodeURIComponent(formData)}`, '_blank');
                            }}
                            className="flex-1 md:flex-none md:px-4 bg-primary hover:bg-primary-hover text-primary-foreground md:text-sm"
                            size="sm"
                          >
                            Buy Now
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(product);
                            }}
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-2"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromWishlist(product.id);
                            }}
                            className="text-danger hover:text-danger p-2"
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-inter font-semibold text-xl mb-2">Your Wishlist is Empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding products you love to your wishlist
              </p>
              <Button asChild>
                <Link to="/">
                  Start Shopping
                </Link>
              </Button>
            </div>
          )}
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Wishlist;
