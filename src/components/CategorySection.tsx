
import { Link } from "react-router-dom";

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
    <section className="py-12 bg-islamic-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-islamic-dark mb-2">Book Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection organized by categories to find the perfect books for your spiritual journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`}
              key={category.id}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-islamic-dark mb-2 group-hover:text-islamic-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-islamic-light text-islamic-dark px-3 py-1 rounded-full">
                    {category.itemCount} Books
                  </span>
                  <span className="text-islamic-green text-sm font-medium">Explore →</span>
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
