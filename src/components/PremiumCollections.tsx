
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "./ui/button";

interface PremiumCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

interface PremiumCollectionsProps {
  collections: PremiumCollection[];
}

const PremiumCollections = ({ collections }: PremiumCollectionsProps) => {
  return (
    <section className="py-10 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8">
          <span className="text-islamic-gold text-sm font-medium uppercase tracking-wider">
            Special Edition Collections
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            Premium Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Discover our exclusive premium collections featuring special editions, 
            collector's items, and uniquely curated book sets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative overflow-hidden rounded-lg h-60 md:h-72 block"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={18} className="text-islamic-gold" />
                  <span className="text-islamic-gold font-medium">{collection.name}</span>
                </div>
                <p className="text-sm text-white/80 mb-3 line-clamp-2">
                  {collection.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white/20 py-1 px-2 rounded-full">
                    {collection.itemCount} Books
                  </span>
                  <span className="text-islamic-gold text-xs flex items-center gap-1 font-medium group-hover:underline">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-islamic-green hover:bg-islamic-green/90 text-white"
            asChild
          >
            <Link to="/premium">
              View Premium
            </Link>
          </Button>
          
          <Button
            variant="outline"
            className="border-islamic-green text-islamic-green hover:bg-islamic-green/10"
            asChild
          >
            <Link to="/premium/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumCollections;
