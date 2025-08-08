import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const SocialMedia = () => {
  // Sample Instagram feed data - in a real app, this would come from Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg",
      alt: "Instagram post 1"
    },
    {
      id: 2,
      image: "/placeholder.svg",
      alt: "Instagram post 2"
    },
    {
      id: 3,
      image: "/placeholder.svg",
      alt: "Instagram post 3"
    },
    {
      id: 4,
      image: "/placeholder.svg",
      alt: "Instagram post 4"
    },
    {
      id: 5,
      image: "/placeholder.svg",
      alt: "Instagram post 5"
    },
    {
      id: 6,
      image: "/placeholder.svg",
      alt: "Instagram post 6"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Follow the Vibe
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <Instagram className="h-6 w-6 text-primary" />
            <span className="text-xl text-muted-foreground">@AyanfesHaven</span>
          </div>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Follow Us
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square overflow-hidden rounded-lg hover-lift cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;