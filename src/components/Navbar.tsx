
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is dark mode
  const [searchQuery, setSearchQuery] = useState("");

  // Handle theme change
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Store preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      setSearchQuery("");
    }
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      const prefersDark = savedTheme === "dark";
      setIsDarkMode(prefersDark);
      
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Categories", href: "/categories" },
    { name: "Authors", href: "/authors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-islamic-green">
              Shams<span className="text-islamic-gold">Kitab</span>
            </span>
          </Link>
          
          {/* Search bar - hidden on small mobile */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center border border-border rounded-md overflow-hidden flex-1 mx-4 md:mx-8 bg-accent/50">
            <input
              type="text"
              placeholder="Search for books, authors..."
              className="px-3 py-1.5 flex-1 bg-transparent focus:outline-none text-foreground text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" className="h-full px-3 text-islamic-green">
              <Search size={18} />
            </Button>
          </form>
          
          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-islamic-gold"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-islamic-green sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={18} />
            </Button>
            <Button variant="ghost" size="sm" className="text-islamic-green relative">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-islamic-green text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="text-islamic-green hidden md:flex">
              <User size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-islamic-green md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center py-2">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href}
                  className="text-sm text-foreground hover:text-islamic-green font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-border">
            <ul className="space-y-3">
              <li>
                <form onSubmit={handleSearch} className="flex items-center border border-border rounded-md overflow-hidden bg-accent/50 mb-3">
                  <input
                    type="text"
                    placeholder="Search for books, authors..."
                    className="px-3 py-1.5 flex-1 bg-transparent focus:outline-none text-foreground text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="ghost" className="h-full px-3 text-islamic-green">
                    <Search size={18} />
                  </Button>
                </form>
              </li>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="block py-1.5 text-sm text-foreground hover:text-islamic-green font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="outline" size="sm" className="w-full flex items-center gap-2 border-islamic-green text-islamic-green text-xs">
                  <User size={16} />
                  <span>Sign In / Register</span>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
