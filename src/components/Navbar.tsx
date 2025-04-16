
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle theme change
  const handleToggleTheme = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  // Handle mobile search toggle
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Update internal state when theme prop changes
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Categories", href: "/categories" },
    { name: "Authors", href: "/authors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-3 md:px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-islamic-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
            
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-islamic-green">
                Shams<span className="text-islamic-gold">Kitab</span>
              </span>
            </Link>
          </div>
          
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
          
          {/* Mobile search form - appears when search icon is clicked */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 p-3 bg-card border-b border-border z-50 sm:hidden">
              <form onSubmit={handleSearch} className="flex items-center border border-border rounded-md overflow-hidden bg-accent/50">
                <input
                  type="text"
                  placeholder="Search for books, authors..."
                  className="px-3 py-2 flex-1 bg-transparent focus:outline-none text-foreground text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button type="submit" variant="ghost" className="h-full px-3 text-islamic-green">
                  <Search size={18} />
                </Button>
              </form>
            </div>
          )}
          
          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-islamic-gold"
              onClick={handleToggleTheme}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-islamic-gold" />
              ) : (
                <Moon size={18} className="text-islamic-gold" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-islamic-green sm:hidden"
              onClick={toggleSearch}
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
