
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
    <section className="py-8 bg-card">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-islamic-green/20 mb-3">
            <Mail size={20} className="text-islamic-green" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Subscribe to our Newsletter
          </h2>
          
          <p className="text-muted-foreground text-sm mb-4">
            Stay updated with new arrivals and special offers
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:border-islamic-green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Button
              type="submit"
              className="bg-islamic-green hover:bg-islamic-green/90 text-white"
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
