import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Ayanfe's Haven
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-secondary transition-colors">
                Home
              </a>
              <a href="#collections" className="text-foreground hover:text-secondary transition-colors">
                Collections
              </a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;