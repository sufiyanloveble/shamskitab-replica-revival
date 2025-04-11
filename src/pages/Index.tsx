
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BookCarousel from "../components/BookCarousel";
import CategorySection from "../components/CategorySection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import { featuredBooks, newArrivals, categories } from "../data/books";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <BookCarousel 
          title="Featured Books" 
          subtitle="Our most popular and recommended books"
          books={featuredBooks}
        />
        
        <CategorySection categories={categories} />
        
        <QuoteSection />
        
        <BookCarousel 
          title="New Arrivals" 
          subtitle="The latest additions to our collection"
          books={newArrivals}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
