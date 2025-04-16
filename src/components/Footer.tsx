
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground transition-colors duration-300">
      {/* Main footer content - more compact layout */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {/* Brand and Social Links */}
          <div className="col-span-2 sm:col-span-1 space-y-2">
            <Link to="/" className="inline-block">
              <span className="text-lg font-bold">
                Shams<span className="text-islamic-gold">Kitab</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs">
              Your trusted source for authentic books and literature.
            </p>
            <div className="flex space-x-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="bg-accent hover:bg-islamic-gold w-6 h-6 flex items-center justify-center rounded-full transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li><Link to="/" className="text-muted-foreground hover:text-islamic-green transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-muted-foreground hover:text-islamic-green transition-colors">Books</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-islamic-green transition-colors">Categories</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-islamic-green transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-xs">
              <li><Link to="/category/education" className="text-muted-foreground hover:text-islamic-green transition-colors">Education</Link></li>
              <li><Link to="/category/fiction" className="text-muted-foreground hover:text-islamic-green transition-colors">Fiction</Link></li>
              <li><Link to="/category/romance" className="text-muted-foreground hover:text-islamic-green transition-colors">Romance</Link></li>
              <li><Link to="/category/spirituality" className="text-muted-foreground hover:text-islamic-green transition-colors">Religion</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-xs">
              <li className="flex gap-1 text-muted-foreground">
                <MapPin size={14} className="flex-shrink-0" />
                <span>123 Book Street, Delhi</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-1 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Phone size={14} className="flex-shrink-0" />
                  <span>+91 9876543210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shamskitab.com" className="flex gap-1 text-muted-foreground hover:text-islamic-green transition-colors">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>info@shamskitab.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar - simplified */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs">
            <p className="text-muted-foreground mb-1 sm:mb-0">
              &copy; {new Date().getFullYear()} ShamsKitab
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-muted-foreground hover:text-islamic-green transition-colors">Privacy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-islamic-green transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
