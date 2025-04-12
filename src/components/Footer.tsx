
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Shams<span className="text-islamic-gold">Kitab</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              ShamsKitab is your trusted source for authentic books and literature, providing knowledge to readers around the world.
            </p>
            
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-accent hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-accent hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-islamic-green transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-muted-foreground hover:text-islamic-green transition-colors">Books</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-islamic-green transition-colors">Categories</Link></li>
              <li><Link to="/authors" className="text-muted-foreground hover:text-islamic-green transition-colors">Authors</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-islamic-green transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-islamic-green transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/category/education" className="text-muted-foreground hover:text-islamic-green transition-colors">Education</Link></li>
              <li><Link to="/category/fiction" className="text-muted-foreground hover:text-islamic-green transition-colors">Fiction & Fantasy</Link></li>
              <li><Link to="/category/romance" className="text-muted-foreground hover:text-islamic-green transition-colors">Romance</Link></li>
              <li><Link to="/category/spirituality" className="text-muted-foreground hover:text-islamic-green transition-colors">Religion & Spirituality</Link></li>
              <li><Link to="/category/literature" className="text-muted-foreground hover:text-islamic-green transition-colors">Literature & Fiction</Link></li>
              <li><Link to="/category/biographies" className="text-muted-foreground hover:text-islamic-green transition-colors">Biographies & Memoirs</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Book Street, Delhi Gardens, 110001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-3 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+91 9876543210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shamskitab.com" className="flex gap-3 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@shamskitab.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ShamsKitab. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-islamic-green transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-islamic-green transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-islamic-green transition-colors">Shipping & Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
