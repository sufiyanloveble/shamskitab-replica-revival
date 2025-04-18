
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { featuredBooks, newArrivals } from "@/data/books";

const BookDetails: FC = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Combine both arrays to search for the book
  const allBooks = [...featuredBooks, ...newArrivals];
  const book = allBooks.find(b => b.id === id);
  
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground">Book not found</h1>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart`
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment..."
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book Cover */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground">By {book.author}</p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-bold text-islamic-green">
              ₹{book.discountedPrice || book.price}
            </span>
            {book.discountedPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ₹{book.price}
              </span>
            )}
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">About this book</h2>
              <p className="text-muted-foreground">
                {book.description || "Join readers worldwide in discovering this compelling book. Perfect for both casual readers and devoted book enthusiasts, this book promises an engaging reading experience."}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-islamic-green hover:bg-islamic-green/90"
              onClick={handleBuyNow}
            >
              <CreditCard className="mr-2" size={20} />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
