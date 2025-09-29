import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, ArrowLeft, Home, Phone } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';

interface TopNavProps {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showWishlist?: boolean;
  showCart?: boolean;
}

export const TopNavigation: React.FC<TopNavProps> = ({
  title = 'ZupraMart',
  showBack = false,
  showSearch = true,
  showWishlist = true,
  showCart = true
}) => {
  const { cart, wishlist } = useApp();
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          )}
          <h1 className="font-inter font-semibold text-lg text-foreground">{title}</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {showSearch && (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/search" className="p-2">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {showWishlist && (
            <Button variant="ghost" size="sm" asChild className="relative">
              <Link to="/wishlist" className="p-2">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-danger text-danger-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>
          )}
          {showCart && (
            <Button variant="ghost" size="sm" asChild className="relative">
              <Link to="/cart" className="p-2">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-danger text-danger-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/search', icon: Search, label: 'Search' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
    { href: '/contact', icon: Phone, label: 'Contact' }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location.pathname === href;
          return (
            <Button
              key={href}
              variant="ghost"
              size="sm"
              asChild
              className={`flex-1 flex-col h-full rounded-none ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Link to={href}>
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
