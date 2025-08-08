import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-tight">
              Creative fashion.
              <br />
              <span className="text-primary">Bold expression.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 text-balance">
              Step into a new era of urban fashion with our curated collection of statement footwear.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-full logo-glow">
                  SHOP NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="#collections">
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full">
                  FIND MORE
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden hover-lift">
              <img src={heroImage} alt="Ayanfe's Haven creative fashion collection featuring sneakers, resin crafts, and accessories" className="w-full h-[500px] lg:h-[600px] object-cover" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full animate-float opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full animate-float opacity-60" style={{
            animationDelay: "1s"
          }} />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;