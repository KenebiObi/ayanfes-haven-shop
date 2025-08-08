import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@ayanfeshaven.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+234 (0) 123 456 7890",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Lagos, Nigeria",
      description: "Visit our physical store"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon-Fri: 8am-5pm",
      description: "Weekend: 10am-4pm"
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
              We're here to help
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Have a question, feedback, or need some assistance? Get in touch with our team using the options below.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-border hover-lift bg-card text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {info.detail}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                    Send us a message
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this about?"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What are your shipping times?</h4>
                      <p className="text-muted-foreground">We typically ship within 1-2 business days and delivery takes 3-7 business days depending on your location.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Do you offer returns?</h4>
                      <p className="text-muted-foreground">Yes, we offer 30-day returns on most items in original condition. Custom resin crafts are final sale.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Are your resin crafts handmade?</h4>
                      <p className="text-muted-foreground">Absolutely! Each resin piece is handcrafted with care and attention to detail, making every item unique.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;