import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) return;
    if (product.colors && !selectedColor) return;
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const canAddToCart = () => {
    if (!product.inStock) return false;
    if (product.sizes && !selectedSize) return false;
    if (product.colors && !selectedColor) return false;
    return true;
  };

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/shop" className="hover:text-primary transition-colors">
                Shop
              </Link>
              <span>/</span>
              <Link 
                to={`/shop/${product.category}`} 
                className="hover:text-primary transition-colors capitalize"
              >
                {product.category.replace('-', ' ')}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 lg:h-[600px] object-cover"
                  />
                  {!product.inStock && (
                    <Badge variant="secondary" className="absolute top-4 left-4">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-2">
                        {product.name}
                      </h1>
                      <p className="text-3xl font-bold text-primary">
                        ${product.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart className={cn("h-4 w-4", isLiked ? "fill-red-500 text-red-500" : "")} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Product Options */}
                <div className="space-y-6">
                  {/* Size Selection */}
                  {product.sizes && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Size
                      </label>
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="w-full">
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
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Color
                      </label>
                      <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger className="w-full">
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

                  {/* Quantity */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Quantity
                    </label>
                    <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  <Button 
                    onClick={handleAddToCart}
                    disabled={!canAddToCart()}
                    className="w-full h-12 text-lg"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>

                  {/* Product Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="h-5 w-5 text-primary" />
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <RotateCcw className="h-5 w-5 text-primary" />
                      <span>Easy Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">
                Related Products
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;