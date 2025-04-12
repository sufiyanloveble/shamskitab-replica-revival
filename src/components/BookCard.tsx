
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
      className="book-card group relative bg-card rounded-lg overflow-hidden shadow-md border border-border/40 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount badge */}
      {discount > 0 && (
        <div className="badge badge-sale">
          {discount}% OFF
        </div>
      )}
      
      {/* New or bestseller badge */}
      {(isNew || isBestseller) && (
        <div className={`absolute top-1 left-1 ${isNew ? 'badge badge-new' : 'badge badge-bestseller'} z-10 text-[9px] px-1 py-0.5 rounded-sm`}>
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
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 book-hover-overlay group-hover:opacity-100">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-islamic-green text-white hover:bg-islamic-green/90 flex items-center gap-2"
              onClick={addToCart}
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white flex items-center gap-2"
              asChild
            >
              <Link to={`/books/${id}`}>
                <Eye size={16} />
                <span>Quick View</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="p-3">
          <h3 className="font-medium text-foreground truncate text-sm">{title}</h3>
          <p className="text-muted-foreground text-xs mb-2">{author}</p>
          
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="text-islamic-green font-bold">₹{discountedPrice}</span>
                <span className="text-muted-foreground text-sm offer-price">₹{price}</span>
              </>
            ) : (
              <span className="text-islamic-green font-bold">₹{price}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
