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
      title: "Sneakers",
      description: "Trendy and comfortable footwear that makes a statement.",
      image: sneakersImage,
      alt: "Collection of stylish sneakers",
      featured: true,
      path: "/shop/sneakers"
    },
    {
      title: "Resin Crafts",
      description: "Handmade unique pieces that showcase artistry and creativity.",
      image: resinImage,
      alt: "Beautiful handmade resin crafts and jewelry",
      path: "/shop/resin-crafts"
    },
    {
      title: "Accessories",
      description: "Fashion-forward accessories to complete your bold look.",
      image: accessoriesImage,
      alt: "Fashion accessories collection",
      path: "/shop/accessories"
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
            Explore our curated collections that blend creativity with style. Each piece is carefully selected to help you express your unique personality.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title} 
              className={`group overflow-hidden border-0 shadow-lg hover-lift bg-card ${collection.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${collection.featured ? 'h-80' : 'h-64'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-white/90 mb-4 text-balance">
                      {collection.description}
                    </p>
                    <Link to={collection.path}>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
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