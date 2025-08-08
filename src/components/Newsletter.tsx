import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to know about new collections and exclusive offers.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "@ayanfeshaven" },
    { icon: Mail, href: "#", label: "hello@ayanfeshaven.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Newsletter */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Stay in the Loop
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Subscribe to get updates on new collections, exclusive offers, and style inspiration.
              </p>
            </div>

            <Card className="bg-primary border-0 coral-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-primary-foreground mb-4">
                  Get 10% Off Your First Order
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Subscribe to our newsletter and receive exclusive discounts and updates.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white border-white text-charcoal placeholder:text-charcoal/60"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-balance mb-8">
                Have questions about our products or need styling advice? 
                We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-muted-foreground">hello@ayanfeshaven.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Follow Us</div>
                  <div className="text-muted-foreground">@ayanfeshaven</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Studio Location</div>
                  <div className="text-muted-foreground">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-muted border-0">
              <CardContent className="p-6">
                <h4 className="font-playfair font-semibold text-foreground mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;