import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sneakersImage from "@/assets/sneakers-collection.jpg";
import resinImage from "@/assets/resin-crafts.jpg";
import accessoriesImage from "@/assets/accessories-collection.jpg";

const Shop = () => {
  const categories = [
    {
      title: "Sneakers",
      description: "Trendy and comfortable footwear that makes a statement.",
      image: sneakersImage,
      alt: "Collection of stylish sneakers",
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
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Shop Our Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Discover our carefully curated collections of sneakers, handmade resin crafts, and fashion accessories.
            </p>
          </div>
        </section>

        {/* View All Products Button */}
        <section className="pb-8 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/shop/all">
              <Button size="lg" className="mb-8">
                <Grid3X3 className="mr-2 h-5 w-5" />
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card key={category.title} className="group overflow-hidden border-0 shadow-lg hover-lift bg-card">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-playfair font-bold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white/90 mb-4 text-balance">
                          {category.description}
                        </p>
                        <Link to={category.path}>
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          >
                            Shop Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
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

export default Shop;