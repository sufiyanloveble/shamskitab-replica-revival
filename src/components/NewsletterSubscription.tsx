
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-5 bg-card newsletter-container">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-2 flex justify-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-islamic-green/20">
              <Mail size={16} className="text-islamic-green" />
            </div>
          </div>
          
          <h2 className="text-lg md:text-xl font-bold mb-1">
            Subscribe to our Newsletter
          </h2>
          
          <p className="text-muted-foreground text-xs mb-3">
            Stay updated with new arrivals and special offers
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-1.5 rounded-md bg-background border border-border focus:outline-none focus:border-islamic-green text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Button
              type="submit"
              className="bg-islamic-green hover:bg-islamic-green/90 text-white py-1.5 h-auto text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
