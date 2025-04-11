
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard, { BookProps } from "./BookCard";
import { Button } from "./ui/button";

interface BookCarouselProps {
  title: string;
  subtitle?: string;
  books: BookProps[];
  showViewAll?: boolean;
}

const BookCarousel = ({ title, subtitle, books, showViewAll = false }: BookCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [books]);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount 
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update buttons after scroll animation completes
    setTimeout(checkScrollability, 500);
  };

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              {showViewAll && (
                <span className="bg-islamic-gold/20 text-islamic-gold text-xs px-2 py-1 rounded">VIEW ALL</span>
              )}
            </div>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          className="overflow-hidden relative"
          onScroll={checkScrollability}
        >
          <div 
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-2 snap-x scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {books.map((book) => (
              <div 
                key={book.id} 
                className="min-w-[180px] md:min-w-[240px] snap-start"
              >
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCarousel;
