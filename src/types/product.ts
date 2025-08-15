export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'sneakers' | 'accessories' | 'resin-crafts';
  description: string;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}