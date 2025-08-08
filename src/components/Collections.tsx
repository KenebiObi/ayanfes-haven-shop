import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sneakersImage from "@/assets/sneakers-collection.jpg";
import resinImage from "@/assets/resin-crafts.jpg";
import accessoriesImage from "@/assets/accessories-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "The Perfect Bag",
      subtitle: "Style that defines you.",
      description: "Shop our collection of stylish bags and accessories.",
      image: accessoriesImage,
      alt: "Collection of stylish bags and accessories",
      cta: "SHOP BAGS",
      path: "/shop/accessories"
    },
    {
      title: "Watches that Make a Statement",
      subtitle: "Your time, your style.",
      description: "Discover timepieces that complement your unique aesthetic.",
      image: accessoriesImage,
      alt: "Statement watches collection",
      cta: "SHOP WATCHES",
      path: "/shop/accessories"
    },
    {
      title: "The Most Sought-After Brands",
      subtitle: "Shop your favorite brands.",
      description: "Premium sneakers and footwear from top brands.",
      image: sneakersImage,
      alt: "Collection of branded sneakers",
      cta: "SHOP SHOES",
      path: "/shop/sneakers"
    }
  ];

  return (
    <section id="collections" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover our carefully curated collections of premium fashion and unique handmade pieces.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title} 
              className="group overflow-hidden border-0 shadow-lg hover-lift bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-playfair font-bold mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {collection.subtitle}
                    </p>
                    <Link to={collection.path}>
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        {collection.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded-full"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;