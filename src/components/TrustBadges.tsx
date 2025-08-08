import { Card, CardContent } from "@/components/ui/card";
import { Truck, Award, Gift, Shield } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "Speedy Delivery",
      description: "We ensure your order gets to you fast and on time, so you can enjoy your new style sooner."
    },
    {
      icon: Award,
      title: "Best Quality",
      description: "All our products are carefully selected for quality and authenticity, ensuring you get lasting style."
    },
    {
      icon: Gift,
      title: "Best Offers",
      description: "Get access to exclusive deals and special promotions on your favorite fashion and accessory items."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Shop with peace of mind. Your payment details are protected with safe and secure technology."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <Card key={badge.title} className="border-border hover-lift bg-card text-center">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <badge.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground">
                    {badge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-balance leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;