
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-8 bg-card border-y border-border/50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="section-heading mb-6">
          <h2>Book Categories</h2>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {["Business", "Health & Beauty", "History", "Tech"].map((tag) => (
            <Link
              key={tag}
              to={`/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/50 text-foreground hover:bg-accent transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`}
              key={category.id}
              className="group block bg-background rounded-lg overflow-hidden shadow-md border border-border/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-32 md:h-40 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-3">
                <h3 className="font-medium text-sm md:text-base text-foreground mb-1 group-hover:text-islamic-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-xs mb-2 line-clamp-2">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-accent/80 text-muted-foreground px-2 py-0.5 rounded-full">
                    {category.itemCount} Books
                  </span>
                  <span className="text-islamic-green text-xs font-medium flex items-center gap-1">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
