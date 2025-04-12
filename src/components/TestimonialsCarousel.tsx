
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  avatar: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-12 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-3 md:px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          What Our Customers Say
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card shadow-lg rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-islamic-green mb-2">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < currentTestimonial.rating ? "#E7B550" : "transparent"}
                      stroke={i < currentTestimonial.rating ? "#E7B550" : "#64748b"}
                      className="text-islamic-gold"
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <p className="text-foreground italic mb-4">
                  "{currentTestimonial.comment}"
                </p>
                <div>
                  <h4 className="font-medium">{currentTestimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Single set of navigation buttons (centered for all devices) */}
          <div className="flex justify-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green bg-background hover:bg-islamic-green/10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green bg-background hover:bg-islamic-green/10"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-islamic-green' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
