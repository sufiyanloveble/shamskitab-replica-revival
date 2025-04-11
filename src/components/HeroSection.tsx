
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="bg-accent pattern-bg py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <span className="text-islamic-gold font-medium mb-2 block text-sm md:text-base">Sale up to 70% off</span>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Choose Your Best Islamic Book
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
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
      <div className="mt-8 bg-islamic-green/90 py-3 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-white font-bold mb-3 md:mb-0 text-sm md:text-base">Browse Books by Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 w-full md:w-auto">
              <Link to="/category/quran" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-1 text-xs md:text-sm">
                <span>Quran & Tafsir</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/category/hadith" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-1 text-xs md:text-sm">
                <span>Hadith</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/category/fiqh" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-1 text-xs md:text-sm">
                <span>Fiqh</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/category/seerah" className="flex items-center text-white hover:text-islamic-gold transition-colors gap-1 text-xs md:text-sm">
                <span>Seerah & History</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
