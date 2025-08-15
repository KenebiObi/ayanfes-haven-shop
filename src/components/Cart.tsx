import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge 
              variant="default" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({totalItems} items)</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground">Your cart is empty</p>
                <p className="text-muted-foreground mb-6">Add some items to get started</p>
                <Button onClick={() => setIsOpen(false)}>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 py-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 space-y-2">
                      <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                      {item.selectedSize && (
                        <p className="text-xs text-muted-foreground">Size: {item.selectedSize}</p>
                      )}
                      {item.selectedColor && (
                        <p className="text-xs text-muted-foreground">Color: {item.selectedColor}</p>
                      )}
                      <p className="text-sm font-semibold text-primary">${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total: ${totalPrice.toFixed(2)}</span>
                  <Button variant="outline" onClick={clearCart} size="sm">
                    Clear Cart
                  </Button>
                </div>
                <Separator />
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Link to="/checkout" onClick={() => setIsOpen(false)}>
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;