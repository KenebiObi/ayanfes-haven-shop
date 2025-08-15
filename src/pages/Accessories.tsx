import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Accessories = () => {
  const accessoryProducts = products.filter(product => product.category === 'accessories');

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
              {accessoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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