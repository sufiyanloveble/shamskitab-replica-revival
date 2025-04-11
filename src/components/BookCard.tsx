
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

  // Convert to Indian Rupees (assuming 1 USD = 75 INR)
  const inrPrice = Math.round(price * 75);
  const inrDiscountedPrice = discountedPrice ? Math.round(discountedPrice * 75) : undefined;

  return (
    <div 
      className="book-card group relative bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md"
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
        <div className={`absolute top-2 left-2 ${isNew ? 'badge badge-new' : 'badge badge-bestseller'} z-10`}>
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
          <div className="book-hover-overlay absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
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
        
        <div className="p-4">
          <h3 className="font-medium text-foreground truncate">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{author}</p>
          
          <div className="flex items-center gap-2">
            {inrDiscountedPrice ? (
              <>
                <span className="text-islamic-green font-bold">₹{inrDiscountedPrice}</span>
                <span className="text-muted-foreground line-through text-sm">₹{inrPrice}</span>
              </>
            ) : (
              <span className="text-islamic-green font-bold">₹{inrPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
