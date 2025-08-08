import { Instagram, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Ayanfe's Haven</h3>
            <p className="text-white/80 text-sm">
              Your one stop shop for fashion accessories and resins
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@ayanfeshaven.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/shop/sneakers" className="hover:text-white transition-colors">Sneakers</Link></li>
              <li><Link to="/shop/resin-crafts" className="hover:text-white transition-colors">Resin Crafts</Link></li>
              <li><Link to="/shop/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2024 Ayanfe's Haven. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for creative souls
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;