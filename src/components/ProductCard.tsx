import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      return;
    }
    if (product.colors && !selectedColor) {
      return;
    }
    addToCart(product, 1, selectedSize, selectedColor);
  };

  const canAddToCart = () => {
    if (!product.inStock) return false;
    if (product.sizes && !selectedSize) return false;
    if (product.colors && !selectedColor) return false;
    return true;
  };

  return (
    <Card className={cn("group hover-lift bg-card border-border", className)}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart className={cn("h-5 w-5", isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
          </button>
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-4 left-4">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-primary">
              ${product.price}
            </p>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <Button 
            onClick={handleAddToCart}
            disabled={!canAddToCart()}
            className="w-full"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;