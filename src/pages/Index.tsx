
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BookCarousel from "../components/BookCarousel";
import CategorySection from "../components/CategorySection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import { featuredBooks, newArrivals, categories } from "../data/books";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <BookCarousel 
          title="Featured Books" 
          subtitle="Our most popular and recommended books"
          books={featuredBooks}
          showViewAll
        />
        
        <CategorySection categories={categories} />
        
        <QuoteSection />
        
        <BookCarousel 
          title="New Arrivals" 
          subtitle="The latest additions to our collection"
          books={newArrivals}
          showViewAll
        />
        
        <BookCarousel 
          title="Bestselling Books" 
          books={featuredBooks.slice(0, 5)}
          showViewAll
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
