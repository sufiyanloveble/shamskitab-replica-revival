
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

export interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  discountedPrice?: number;
  coverImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const BookCard = ({
  id,
  title,
  author,
  price,
  discountedPrice,
  coverImage,
  isNew,
  isBestseller
}: BookProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  const discount = discountedPrice ? Math.round((1 - discountedPrice / price) * 100) : 0;

  return (
    <div 
      className="book-card group relative bg-white rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          {discount}% OFF
        </div>
      )}
      
      {/* New or bestseller badge */}
      {(isNew || isBestseller) && (
        <div className={`absolute top-3 left-3 ${isNew ? 'bg-islamic-gold' : 'bg-islamic-green'} text-white text-xs font-bold px-2 py-1 rounded-md z-10`}>
          {isNew ? 'NEW' : 'BESTSELLER'}
        </div>
      )}
      
      <Link to={`/books/${id}`} className="block">
        <div className="h-[220px] overflow-hidden relative">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="book-hover-overlay absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-islamic-light text-islamic-dark hover:bg-islamic-gold hover:text-white flex items-center gap-2"
              onClick={addToCart}
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/80 border-white hover:bg-white flex items-center gap-2"
              asChild
            >
              <Link to={`/books/${id}`}>
                <Eye size={16} />
                <span>Quick View</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-islamic-dark truncate">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{author}</p>
          
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="text-islamic-green font-bold">${discountedPrice.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-islamic-green font-bold">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
