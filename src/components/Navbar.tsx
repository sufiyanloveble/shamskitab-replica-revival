
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);

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
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-islamic-green">
              Shams<span className="text-islamic-gold">Kitab</span>
            </span>
          </Link>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center border border-border rounded-md overflow-hidden flex-1 mx-8 bg-accent/50">
            <input
              type="text"
              placeholder="Search for books, authors..."
              className="px-4 py-2 flex-1 bg-transparent focus:outline-none text-foreground"
            />
            <Button variant="ghost" className="h-full px-4 text-islamic-green">
              <Search size={20} />
            </Button>
          </div>
          
          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-islamic-green">
              <Search size={20} className="md:hidden" />
            </Button>
            <Button variant="ghost" size="icon" className="text-islamic-green relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-islamic-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-islamic-green hidden md:flex">
              <User size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-islamic-green md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center py-2">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href}
                  className="text-foreground hover:text-islamic-green font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="block py-2 text-foreground hover:text-islamic-green font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="outline" className="w-full flex items-center gap-2 border-islamic-green text-islamic-green">
                  <User size={18} />
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
