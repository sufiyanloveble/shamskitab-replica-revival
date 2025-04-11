
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-islamic-dark text-white">
      {/* Newsletter section */}
      <div className="bg-islamic-green/90 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-white/80">Stay updated with new arrivals and special offers</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md border-0 flex-1 min-w-[250px] text-islamic-dark focus:outline-none"
              />
              <Button className="bg-islamic-gold hover:bg-islamic-gold/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
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
            <p className="text-white/70">
              ShamsKitab is your trusted source for authentic Islamic books and literature, providing knowledge to Muslims around the world.
            </p>
            
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-white/10 hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-islamic-gold w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-islamic-gold transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-white/70 hover:text-islamic-gold transition-colors">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="text-white/70 hover:text-islamic-gold transition-colors">Bestsellers</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-islamic-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-islamic-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/category/quran" className="text-white/70 hover:text-islamic-gold transition-colors">Quran & Tafsir</Link></li>
              <li><Link to="/category/hadith" className="text-white/70 hover:text-islamic-gold transition-colors">Hadith</Link></li>
              <li><Link to="/category/fiqh" className="text-white/70 hover:text-islamic-gold transition-colors">Fiqh</Link></li>
              <li><Link to="/category/history" className="text-white/70 hover:text-islamic-gold transition-colors">Islamic History</Link></li>
              <li><Link to="/category/children" className="text-white/70 hover:text-islamic-gold transition-colors">Children's Books</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/70">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Islamic Street, Madinah Gardens, NY 10001</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex gap-3 text-white/70 hover:text-islamic-gold transition-colors">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shamskitab.com" className="flex gap-3 text-white/70 hover:text-islamic-gold transition-colors">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@shamskitab.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ShamsKitab. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-white/70 hover:text-islamic-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/70 hover:text-islamic-gold transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="text-white/70 hover:text-islamic-gold transition-colors">Shipping & Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
