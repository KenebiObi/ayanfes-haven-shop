import { Card, CardContent } from "@/components/ui/card";
import { Heart, Palette, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Palette,
      title: "Creative Expression",
      description: "Every piece is designed to help you express your unique style and personality."
    },
    {
      icon: Heart,
      title: "Handcrafted Quality",
      description: "Our resin crafts are meticulously handmade with love and attention to detail."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building a community of creative individuals who aren't afraid to stand out."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Where Creativity Meets Style
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="text-balance">
                  Ayanfe's Haven was born from a deep passion for self-expression. It's a space where 
                  the unique art of resin crafting meets the bold world of trendy fashion. Every piece 
                  is curated or created with the purpose of empowering you to tell your own story.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary">2+</div>
                <div className="text-sm text-muted-foreground">Years Creating</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6 fade-in">
            {values.map((value, index) => (
              <Card key={value.title} className="border-border hover-lift bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-balance">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;