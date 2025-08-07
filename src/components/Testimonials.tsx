import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      review: "The resin jewelry I bought is absolutely stunning! The quality and uniqueness are unmatched. I get compliments every time I wear it.",
      rating: 5,
      product: "Resin Earrings"
    },
    {
      name: "Marcus T.",
      review: "Found the perfect sneakers that match my style perfectly. Great quality and fast shipping. Will definitely be ordering again!",
      rating: 5,
      product: "Limited Edition Sneakers"
    },
    {
      name: "Emily R.",
      review: "Ayanfe's Haven has become my go-to for unique accessories. Each piece tells a story and the customer service is exceptional.",
      rating: 5,
      product: "Fashion Accessories"
    },
    {
      name: "David L.",
      review: "The attention to detail in every handmade piece is incredible. You can really feel the passion and creativity in the work.",
      rating: 5,
      product: "Custom Resin Art"
    }
  ];

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Don't just take our word for it. Here's what our amazing customers have to say about their experience with Ayanfe's Haven.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover-lift bg-card">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.product}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center fade-in">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-secondary text-secondary" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-semibold">500+ Happy Customers</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-semibold">Fast Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;