export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AppContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  showAlert: (message: string, type?: 'success' | 'error') => void;
}

export interface AlertType {
  id: string;
  message: string;
  type: 'success' | 'error';
}