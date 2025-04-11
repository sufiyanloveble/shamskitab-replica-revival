
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BookCard, { BookProps } from "./BookCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BookCarouselProps {
  title: string;
  subtitle?: string;
  books: BookProps[];
  showViewAll?: boolean;
  badge?: string;
}

const BookCarousel = ({ title, subtitle, books, showViewAll = false, badge }: BookCarouselProps) => {
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
    <section className="py-6 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="section-heading">
          <h2>{title}</h2>
          {badge && <span className="section-badge">{badge}</span>}
        </div>
        
        {subtitle && <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>}
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {showViewAll && (
            <Link to="/books" className="flex items-center text-islamic-green text-sm hover:underline gap-1">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
        
        <div 
          className="overflow-hidden relative"
          onScroll={checkScrollability}
        >
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {books.map((book) => (
              <div 
                key={book.id} 
                className="min-w-[160px] md:min-w-[220px] snap-start"
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
