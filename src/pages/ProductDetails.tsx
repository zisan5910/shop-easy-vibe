import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { useApp } from '@/context/AppContext';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const inWishlist = isInWishlist(product.id);

  const handleBuyNow = () => {
    const googleFormUrl = 'https://forms.gle/puEhZYTWGgTvKEa68';
    const formData = `Product: ${product.name}\nQuantity: 1\nPrice: ৳${product.price}\nProduct ID: ${product.id}`;
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
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="Product Details" 
        showBack={true}
      />
      
      <main className="pb-20 md:pb-8">
        {/* Product Details */}
        <section className="container mx-auto px-4 py-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleWishlistToggle}
                  className={`absolute top-4 right-4 p-3 rounded-full ${
                    inWishlist
                      ? 'bg-danger/20 text-danger hover:bg-danger/30'
                      : 'bg-background/80 text-muted-foreground hover:bg-background'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h1 className="font-inter font-bold text-2xl text-foreground mb-2">
                    {product.name}
                  </h1>
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <p className="text-3xl font-bold text-primary">
                    ৳{product.price.toLocaleString()}
                  </p>
                </div>

                <div>
                  <h3 className="font-inter font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleBuyNow}
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => addToCart(product)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="container mx-auto px-4 py-6">
            <h2 className="font-inter font-semibold text-xl mb-4">
              Similar Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {similarProducts.map((similarProduct) => (
                <ProductCard key={similarProduct.id} product={similarProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default ProductDetails;
