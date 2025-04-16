import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize theme from local storage or set default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
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

  // Make theme accessible to components via context
  const toggleTheme = () => {
    // Add transitioning class to temporarily disable transitions
    document.documentElement.classList.add('transitioning');
    setIsTransitioning(true);
    
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    // Remove transitioning class after transitions complete
    setTimeout(() => {
      document.documentElement.classList.remove('transitioning');
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index theme={theme} toggleTheme={toggleTheme} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
