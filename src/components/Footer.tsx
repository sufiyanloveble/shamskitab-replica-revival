
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground transition-colors duration-300">
      {/* Main footer content - more compact layout */}
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Column 1 - About */}
          <div className="space-y-3">
            <Link to="/" className="inline-block mb-2">
              <span className="text-xl font-bold">
                Shams<span className="text-islamic-gold">Kitab</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              ShamsKitab is your trusted source for authentic books and literature, providing knowledge to readers around the world.
            </p>
            
            <div className="flex space-x-2 mt-3">
              <a href="#" className="bg-accent hover:bg-islamic-gold w-7 h-7 flex items-center justify-center rounded-full transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-7 h-7 flex items-center justify-center rounded-full transition-colors">
                <Twitter size={15} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-7 h-7 flex items-center justify-center rounded-full transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-7 h-7 flex items-center justify-center rounded-full transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-islamic-green transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-muted-foreground hover:text-islamic-green transition-colors">Books</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-islamic-green transition-colors">Categories</Link></li>
              <li><Link to="/authors" className="text-muted-foreground hover:text-islamic-green transition-colors">Authors</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-islamic-green transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-base font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/education" className="text-muted-foreground hover:text-islamic-green transition-colors">Education</Link></li>
              <li><Link to="/category/fiction" className="text-muted-foreground hover:text-islamic-green transition-colors">Fiction & Fantasy</Link></li>
              <li><Link to="/category/romance" className="text-muted-foreground hover:text-islamic-green transition-colors">Romance</Link></li>
              <li><Link to="/category/spirituality" className="text-muted-foreground hover:text-islamic-green transition-colors">Religion & Spirituality</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Book Street, Delhi Gardens, 110001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-2 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+91 9876543210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shamskitab.com" className="flex gap-2 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Mail size={16} className="flex-shrink-0" />
                  <span>info@shamskitab.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar - simplified */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} ShamsKitab. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link to="/privacy" className="text-muted-foreground hover:text-islamic-green transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-islamic-green transition-colors">Terms</Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-islamic-green transition-colors">Shipping</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
