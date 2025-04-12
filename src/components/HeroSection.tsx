
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const heroSlides = [
  {
    id: 1,
    title: "Choose Your Dream Book",
    subtitle: "SALES UP TO 70% OFF",
    description: "Welcome to your ultimate book paradise! Explore a wondrous collection of literature spanning a multitude of genres.",
    bgImage: "https://images.unsplash.com/photo-1521123845560-14093637aa7d?q=80&w=1470&auto=format&fit=crop",
    bgClass: "pattern-bg",
  },
  {
    id: 2,
    title: "Premium Collections",
    subtitle: "SPECIAL EDITIONS",
    description: "Discover our handpicked collection of premium books, limited editions, and signed copies from renowned authors.",
    bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1470&auto=format&fit=crop",
    bgClass: "bg-accent pattern-bg",
  },
  {
    id: 3,
    title: "New Arrivals Every Week",
    subtitle: "FRESH READS",
    description: "Stay updated with the latest literary masterpieces from across the globe, handpicked for our discerning readers.",
    bgImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1470&auto=format&fit=crop",
    bgClass: "pattern-bg", 
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-accent pattern-bg overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }} setApi={() => {}} value={activeIndex}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div 
                className={`py-10 md:py-16 ${slide.bgClass} bg-cover bg-center relative`} 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${slide.bgImage})`,
                  backgroundSize: 'cover'
                }}
              >
                <div className="container mx-auto px-4">
                  <div className="max-w-xl">
                    <span className="text-islamic-gold font-medium mb-2 block text-sm md:text-base uppercase tracking-wide">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight uppercase">
                      {slide.title}
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-islamic-green hover:bg-islamic-green/90 text-white">
                        Shop Now
                      </Button>
                      <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green/10">
                        Explore Collections
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
