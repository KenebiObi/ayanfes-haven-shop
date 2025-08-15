import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, CartContextType } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface CartState {
  cart: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; size?: string; color?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, size, color } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += quantity;
        return { ...state, cart: updatedCart };
      } else {
        const newItem: CartItem = {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== productId)
        };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      };
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const { toast } = useToast();

  const addToCart = (product: Product, quantity = 1, size?: string, color?: string) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, size, color } });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getTotalItems = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value: CartContextType = {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};