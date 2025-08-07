import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import accessoriesImage from "@/assets/accessories-collection.jpg";

const Accessories = () => {
  // Sample product data - in a real app, this would come from a database
  const products = [
    {
      id: 1,
      name: "Vintage Leather Belt",
      price: "$49.99",
      image: accessoriesImage,
      description: "Premium leather belt with vintage brass buckle."
    },
    {
      id: 2,
      name: "Designer Sunglasses",
      price: "$89.99",
      image: accessoriesImage,
      description: "Stylish sunglasses with UV protection and trendy frames."
    },
    {
      id: 3,
      name: "Statement Watch",
      price: "$129.99",
      image: accessoriesImage,
      description: "Bold timepiece that makes a fashion statement."
    },
    {
      id: 4,
      name: "Crossbody Bag",
      price: "$65.99",
      image: accessoriesImage,
      description: "Versatile bag perfect for everyday adventures."
    },
    {
      id: 5,
      name: "Silk Scarf Collection",
      price: "$35.99",
      image: accessoriesImage,
      description: "Luxurious silk scarves in various patterns and colors."
    },
    {
      id: 6,
      name: "Minimalist Wallet",
      price: "$42.99",
      image: accessoriesImage,
      description: "Sleek leather wallet with RFID protection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Accessories Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Complete your look with our carefully selected fashion accessories.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover-lift bg-card">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/90 hover:bg-white text-muted-foreground hover:text-destructive"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {product.price}
                        </span>
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;