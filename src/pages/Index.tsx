
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BookCarousel from "../components/BookCarousel";
import CategorySection from "../components/CategorySection";
import DealsOfTheWeek from "../components/DealsOfTheWeek";
import PremiumCollections from "../components/PremiumCollections";
import SubscriptionBox from "../components/SubscriptionBox";
import CustomerPerks from "../components/CustomerPerks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BlogSection from "../components/BlogSection";
import NewsletterSubscription from "../components/NewsletterSubscription";
import QuoteSection from "../components/QuoteSection";
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
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
        
        <QuoteSection />
        
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
