
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const heroSlides = [
  {
    id: 1,
    title: "Choose Your Dream Book",
    subtitle: "SALES UP TO 70% OFF",
    description: "Welcome to your ultimate book paradise! Explore a wondrous collection of literature spanning a multitude of genres.",
    bgClass: "pattern-bg",
  },
  {
    id: 2,
    title: "Premium Collections",
    subtitle: "SPECIAL EDITIONS",
    description: "Discover our handpicked collection of premium books, limited editions, and signed copies from renowned authors.",
    bgClass: "bg-accent pattern-bg",
  },
  {
    id: 3,
    title: "New Arrivals Every Week",
    subtitle: "FRESH READS",
    description: "Stay updated with the latest literary masterpieces from across the globe, handpicked for our discerning readers.",
    bgClass: "pattern-bg", 
  }
];

const HeroSection = () => {
  return (
    <section className="bg-accent pattern-bg overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className={`py-10 md:py-16 ${slide.bgClass}`}>
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
        <div className="container mx-auto px-4 relative">
          <CarouselPrevious className="absolute left-2 md:-left-2 top-1/2 h-8 w-8 border-islamic-green bg-background/80 backdrop-blur-sm text-islamic-green hover:bg-islamic-green/20" />
          <CarouselNext className="absolute right-2 md:-right-2 top-1/2 h-8 w-8 border-islamic-green bg-background/80 backdrop-blur-sm text-islamic-green hover:bg-islamic-green/20" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
