
import { Link } from "react-router-dom";
import { ArrowRight, Percent } from "lucide-react";
import BookCard from "./BookCard";
import { BookProps } from "./BookCard";
import { Button } from "./ui/button";

interface DealsOfTheWeekProps {
  deals: BookProps[];
}

const DealsOfTheWeek = ({ deals }: DealsOfTheWeekProps) => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="section-heading">
            <h2>Deals of the Week</h2>
            <span className="section-badge">Up to 67% OFF</span>
          </div>
          
          <Link to="/deals" className="hidden md:flex items-center text-islamic-green text-sm hover:underline gap-1">
            <span>View All Deals</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.map((book) => (
            <div key={book.id}>
              <BookCard {...book} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 md:hidden">
          <Button
            variant="outline"
            className="border-islamic-green text-islamic-green flex items-center gap-2"
            asChild
          >
            <Link to="/deals">
              <span>View All Deals</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheWeek;
