
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "./ui/carousel";
import { useSwipeable } from "react-swipeable";

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

interface HeroSectionProps {
  theme?: "light" | "dark";
}

const HeroSection = ({ theme }: HeroSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLightTheme = theme === "light";

  // Auto-slide functionality with increased interval to 5 seconds (already set)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Manual swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prevIndex) => (prevIndex + 1) % heroSlides.length),
    onSwipedRight: () => setActiveIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length),
    trackMouse: true,
    delta: 10,
    swipeDuration: 500,
    touchEventOptions: { passive: true }
  });

  // Preload hero images
  useEffect(() => {
    heroSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  return (
    <section className="bg-accent pattern-bg overflow-hidden">
      <div {...handlers} className="w-full">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem 
                key={slide.id} 
                className={`transition-all duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div 
                  className={`py-10 md:py-16 bg-cover bg-center relative min-h-[400px] flex items-center transition-all duration-300`} 
                  style={{ 
                    backgroundImage: `linear-gradient(${
                      isLightTheme 
                        ? 'rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8))'
                        : 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))'
                    }, url(${slide.bgImage})`,
                    backgroundSize: 'cover'
                  }}
                >
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl relative z-10">
                      <span className={`font-medium mb-2 block text-sm md:text-base uppercase tracking-wide ${
                        isLightTheme ? 'text-gray-800' : 'text-white/90'
                      }`}>
                        {slide.subtitle}
                      </span>
                      <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight ${
                        isLightTheme ? 'text-gray-900' : 'text-white'
                      }`}>
                        {slide.title}
                      </h1>
                      <p className={`text-sm md:text-base mb-6 max-w-md ${
                        isLightTheme ? 'text-gray-700' : 'text-white/80'
                      }`}>
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        <Button className="bg-islamic-green hover:bg-islamic-green/90 text-white text-sm md:text-base py-2 px-4">
                          Shop Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className={`border-islamic-green text-sm md:text-base py-2 px-4 ${
                            isLightTheme 
                              ? 'text-islamic-green hover:bg-islamic-green/10' 
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          Explore Collections
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white" />
          <CarouselNext className="hidden md:flex right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
