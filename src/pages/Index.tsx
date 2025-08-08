import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <TrustBadges />
        <About />
        <SocialMedia />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
