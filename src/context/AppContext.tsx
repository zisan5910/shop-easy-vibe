import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, AppContextType, AlertType } from '@/types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopeasy-cart');
    const savedWishlist = localStorage.getItem('shopeasy-wishlist');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save to localStorage whenever cart or wishlist changes
  useEffect(() => {
    localStorage.setItem('shopeasy-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shopeasy-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showAlert('Added to Cart', 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showAlert('Removed from Cart', 'success');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
    showAlert('Added to Wishlist', 'success');
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
    showAlert('Removed from Wishlist', 'success');
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const showAlert = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now().toString();
    const alert: AlertType = { id, message, type };
    
    setAlerts(prev => [...prev, alert]);
    
    // Remove alert after 2 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(a => a.id !== id));
    }, 2000);
  };

  const value: AppContextType = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    showAlert
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {/* Alert notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className={`px-4 py-2 rounded-lg shadow-lg animate-in slide-in-from-right duration-300 ${
              alert.type === 'success' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-danger text-danger-foreground'
            }`}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};