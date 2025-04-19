import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { featuredBooks, newArrivals } from "@/data/books";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface BookDetailsProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const BookDetails: FC<BookDetailsProps> = ({ theme, toggleTheme }) => {
  const { id } = useParams();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const allBooks = [...featuredBooks, ...newArrivals];
  const book = allBooks.find(b => b.id === id);
  
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-2xl font-bold text-foreground">Book not found</h1>
        </div>
        <Footer />
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

  const longDescription = book.description || `Join readers worldwide in discovering this compelling book by ${book.author}. "${book.title}" takes readers on a journey through vivid storytelling and profound insights. Perfect for both casual readers and devoted book enthusiasts, this book promises an engaging reading experience that will stay with you long after the final page.`;

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              {book.isNew && (
                <span className="badge badge-new absolute top-2 left-2 px-2 py-1">New</span>
              )}
              {book.isBestseller && (
                <span className="badge badge-bestseller absolute top-2 left-2 px-2 py-1">Bestseller</span>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{book.title}</h1>
                <p className="text-xl text-muted-foreground">By {book.author}</p>
                
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={star <= 4 ? "fill-islamic-gold text-islamic-gold" : "text-muted-foreground"}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(127 reviews)</span>
                </div>
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
                {book.discountedPrice && (
                  <span className="text-sm bg-islamic-green/20 text-islamic-green px-2 py-0.5 rounded-full">
                    Save {Math.round(((book.price - book.discountedPrice) / book.price) * 100)}%
                  </span>
                )}
              </div>

              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-islamic-green mr-2"></span>
                <span className="text-sm text-foreground">In Stock</span>
              </div>

              <p className="text-muted-foreground">
                {book.description?.substring(0, 150) || "A captivating read that will keep you engaged from start to finish."}
                {book.description?.length > 150 && "..."}
              </p>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">About this book</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <div className="space-y-4 border-t border-border pt-4">
                <h3 className="text-base font-semibold">Delivery Options</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <div className="w-1 h-1 rounded-full bg-islamic-green mt-2"></div>
                    <div>
                      <p className="font-medium">Standard Delivery</p>
                      <p className="text-sm text-muted-foreground">2-3 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <div className="w-1 h-1 rounded-full bg-islamic-gold mt-2"></div>
                    <div>
                      <p className="font-medium">Express Delivery</p>
                      <p className="text-sm text-muted-foreground">Next business day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <div className="w-1 h-1 rounded-full bg-islamic-green mt-2"></div>
                    <div>
                      <p className="font-medium">Store Pickup</p>
                      <p className="text-sm text-muted-foreground">Available today</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Buttons */}
              <div className="mt-8">
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 h-12 text-base border-2 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-all duration-200"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 h-12 text-base bg-islamic-green hover:bg-islamic-green/90 transition-all duration-200"
                    onClick={handleBuyNow}
                  >
                    <CreditCard className="mr-2" size={20} />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
