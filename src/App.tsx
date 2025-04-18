
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import { 
  featuredBooks, 
  newArrivals, 
  categories, 
  premiumCollections,
  blogPosts 
} from "./data/books";

// Always initialize with dark mode unless explicitly set to light by user
if (localStorage.theme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  // Set dark mode as default
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Set theme on initial load
  useEffect(() => {
    // Get theme from localStorage or use dark as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme as "light" | "dark");
  }, []);

  // Preload essential images
  useEffect(() => {
    const imagesToPreload = [
      // Featured books images
      ...featuredBooks.map(book => book.coverImage),
      // New arrivals images
      ...newArrivals.map(book => book.coverImage),
      // Premium collections images
      ...premiumCollections.map(collection => collection.image),
      // Category images
      ...categories.map(category => category.image),
      // Blog post images
      ...blogPosts.map(post => post.image)
    ];
    
    imagesToPreload.forEach(src => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/book/:id" element={<BookDetails theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
