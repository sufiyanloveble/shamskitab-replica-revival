
import { FC } from "react";
import Navbar from "../components/Navbar";
import BookCarousel from "../components/BookCarousel";
import CategorySection from "../components/CategorySection";
import DealsOfTheWeek from "../components/DealsOfTheWeek";
import PremiumCollections from "../components/PremiumCollections";
import SubscriptionBox from "../components/SubscriptionBox";
import CustomerPerks from "../components/CustomerPerks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BlogSection from "../components/BlogSection";
import NewsletterSubscription from "../components/NewsletterSubscription";
import Footer from "../components/Footer";
import { 
  featuredBooks, 
  newArrivals, 
  categories, 
  dealsOfTheWeek, 
  premiumCollections,
  testimonials,
  blogPosts
} from "../data/books";

interface IndexProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Index: FC<IndexProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <DealsOfTheWeek deals={dealsOfTheWeek} />
        <CategorySection categories={categories} />
        
        <BookCarousel 
          title="Featured Books" 
          subtitle="Our most popular and recommended books"
          books={featuredBooks}
          showViewAll
          badge="Top picks"
        />
        
        <PremiumCollections collections={premiumCollections} />
        <SubscriptionBox />
        <CustomerPerks />
        <TestimonialsCarousel testimonials={testimonials} />
        
        <BookCarousel 
          title="New Arrivals" 
          subtitle="The latest additions to our collection"
          books={newArrivals}
          showViewAll
          badge="New"
        />
        
        <BlogSection posts={blogPosts} />
        <NewsletterSubscription />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
