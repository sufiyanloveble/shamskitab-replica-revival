
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="pattern-bg py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            <span className="text-islamic-gold font-medium mb-4 block">Welcome to ShamsKitab</span>
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-dark mb-4 leading-tight">
              Discover the World of Islamic Literature
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Explore our vast collection of Islamic books, from classic texts to contemporary works, all carefully selected to enrich your knowledge and faith.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-islamic-green hover:bg-islamic-green/90 text-white px-8 py-6">
                Browse Collection
              </Button>
              <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-light px-8 py-6">
                Top Sellers
              </Button>
            </div>
          </div>
          
          {/* Right content - Featured books grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md ml-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-72 transform translate-y-8">
                <img 
                  src="https://i.imgur.com/cMsaaNn.jpg" 
                  alt="Featured Islamic Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-48">
                <img 
                  src="https://i.imgur.com/3GYgCz9.jpg" 
                  alt="Featured Islamic Book" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-48">
                <img 
                  src="https://i.imgur.com/6KxGS7R.jpg" 
                  alt="Featured Islamic Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-72">
                <img 
                  src="https://i.imgur.com/LmU4wAV.jpg" 
                  alt="Featured Islamic Book" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories banner */}
      <div className="mt-16 bg-islamic-green py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-white text-2xl font-bold mb-4 md:mb-0">Browse Books by Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <Link to="/category/quran" className="flex items-center text-islamic-gold hover:text-white transition-colors gap-2">
                <span>Quran & Tafsir</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/hadith" className="flex items-center text-islamic-gold hover:text-white transition-colors gap-2">
                <span>Hadith</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/fiqh" className="flex items-center text-islamic-gold hover:text-white transition-colors gap-2">
                <span>Fiqh</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/category/seerah" className="flex items-center text-islamic-gold hover:text-white transition-colors gap-2">
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
