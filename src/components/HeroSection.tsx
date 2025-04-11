
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="bg-accent pattern-bg py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="text-islamic-gold font-medium mb-4 block">Sale up to 70% off</span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Choose Your Best Islamic Book
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Explore our vast collection of Islamic books, from classic texts to contemporary works, all carefully selected to enrich your knowledge and faith.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-islamic-green hover:bg-islamic-green/90 text-white">
              Shop Now
            </Button>
            <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Categories banner */}
      <div className="mt-12 bg-islamic-green/90 py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-white text-xl font-bold mb-4 md:mb-0">Browse Books by Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <Link to="/category/quran" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-2">
                <span>Quran & Tafsir</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/hadith" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-2">
                <span>Hadith</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/fiqh" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-2">
                <span>Fiqh</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/seerah" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-2">
                <span>Seerah & History</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
