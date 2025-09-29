import React from 'react';
import { Heart, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Product, CartItem } from '@/types';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'wishlist' | 'cart';
  cartItem?: CartItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'default',
  cartItem 
}) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, updateQuantity, removeFromCart } = useApp();
  
  const inWishlist = isInWishlist(product.id);
  
  const handleBuyNow = () => {
    const quantity = cartItem?.quantity || 1;
    const googleFormUrl = 'https://forms.gle/puEhZYTWGgTvKEa68';
    const formData = `Product: ${product.name}\nQuantity: ${quantity}\nPrice: ৳${product.price}\nProduct ID: ${product.id}`;
    
    // Copy details to clipboard
    navigator.clipboard.writeText(formData).catch(() => {
      // Fallback for browsers that don't support clipboard API
      console.log('Could not copy to clipboard');
    });
    
    // Open Google Form with product details
    window.open(`${googleFormUrl}?entry.1000000=${encodeURIComponent(formData)}`, '_blank');
  };
  
  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Card className="group overflow-hidden card-shadow hover:product-shadow transition-all duration-300 hover-lift">
      <CardContent className="p-3 md:p-4">
        <div className="relative mb-2 md:mb-3">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 md:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWishlistToggle}
            className={`absolute top-2 right-2 p-2 rounded-full ${
              inWishlist || variant === 'wishlist'
                ? 'bg-danger/20 text-danger hover:bg-danger/30'
                : 'bg-background/80 text-muted-foreground hover:bg-background'
            }`}
          >
            <Heart className={`h-4 w-4 ${inWishlist || variant === 'wishlist' ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        <div className="space-y-1 md:space-y-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-inter font-medium text-xs md:text-sm text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="text-primary font-semibold text-sm md:text-base">৳{product.price.toLocaleString()}</p>
          
          {variant === 'cart' && cartItem && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="font-medium w-8 text-center">{cartItem.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(product.id)}
                className="text-danger hover:text-danger p-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          <div className="flex gap-1 md:gap-2 pt-1 md:pt-2">
            <Button
              onClick={handleBuyNow}
              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-xs md:text-sm h-8 md:h-10"
            >
              Buy Now
            </Button>
            {variant !== 'cart' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => addToCart(product)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-1 md:p-2 h-8 md:h-10 w-8 md:w-10"
              >
                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
