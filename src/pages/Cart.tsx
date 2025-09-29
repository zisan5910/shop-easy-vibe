import React from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Heart, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, addToWishlist, isInWishlist } = useApp();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 100 : 0; // ৳100 shipping fee
  const total = subtotal + shipping;

  const handleCheckout = () => {
    const productDetails = cart.map(item => 
      `${item.name} (Qty: ${item.quantity}, Price: ৳${item.price})`
    ).join('\n');
    
    const orderSummary = `Order Summary:\n${productDetails}\n\nSubtotal: ৳${subtotal.toLocaleString()}\nShipping: ৳${shipping}\nTotal: ৳${total.toLocaleString()}`;
    
    // Copy details to clipboard
    navigator.clipboard.writeText(orderSummary).catch(() => {
      console.log('Could not copy to clipboard');
    });
    
    const googleFormUrl = 'https://forms.gle/puEhZYTWGgTvKEa68';
    window.open(`${googleFormUrl}?entry.1000000=${encodeURIComponent(orderSummary)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="Shopping Cart" 
        showBack={true} 
        showCart={false}
      />
      
      <main className="pb-20 md:pb-8">
        <section className="container mx-auto px-4 py-6">
          {cart.length > 0 ? (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                <h2 className="font-inter font-semibold text-xl">
                  Cart Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
                
                {cart.map((item) => (
                  <div key={item.id} className="bg-card rounded-lg p-4 card-shadow">
                    <div className="flex gap-4 cursor-pointer" onClick={() => window.location.href = `/product/${item.id}`}>
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 space-y-3">
                        <div className="space-y-1">
                          <h3 className="font-inter font-bold text-foreground text-base hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-primary font-bold text-lg">
                            ৳{item.price.toLocaleString()}
                          </p>
                        </div>
                        
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, item.quantity - 1);
                              }}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, item.quantity + 1);
                              }}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              const googleFormUrl = 'https://forms.gle/puEhZYTWGgTvKEa68';
                              const formData = `Product: ${item.name}\nQuantity: ${item.quantity}\nPrice: ৳${item.price}\nProduct ID: ${item.id}`;
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
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToWishlist(item);
                            }}
                            className={`p-2 ${
                              isInWishlist(item.id)
                                ? 'text-danger hover:text-danger'
                                : 'text-muted-foreground hover:text-danger'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${isInWishlist(item.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="text-danger hover:text-danger p-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-inter text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>৳{shipping}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-primary">৳{total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button 
                      onClick={handleCheckout}
                      className="w-full md:w-auto md:px-6 bg-primary hover:bg-primary-hover text-primary-foreground"
                      size="lg"
                    >
                      Proceed to Checkout
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full md:w-auto md:px-6"
                    >
                      <Link to="/">Continue Shopping</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-inter font-semibold text-xl mb-2">Your Cart is Empty</h2>
              <p className="text-muted-foreground mb-6">
                Add some products to your cart to get started
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

export default Cart;
