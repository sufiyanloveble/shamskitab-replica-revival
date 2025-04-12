
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import BookCard from "./BookCard";
import { BookProps } from "./BookCard";
import { Button } from "./ui/button";

interface DealsOfTheWeekProps {
  deals: BookProps[];
}

const DealsOfTheWeek = ({ deals }: DealsOfTheWeekProps) => {
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
  }, [deals]);

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
      <div className="container mx-auto px-3 md:px-4">
        <div className="section-heading">
          <h2>Deals of the Week</h2>
          <span className="section-badge">Up to 67% OFF</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10 z-10"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full border-islamic-green text-islamic-green hover:bg-islamic-green/10 z-10"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Link to="/deals" className="flex items-center text-islamic-green text-sm hover:underline gap-1 z-10">
            <span>View All Deals</span>
            <ArrowRight size={14} />
          </Link>
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
            {deals.map((book) => (
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

export default DealsOfTheWeek;
