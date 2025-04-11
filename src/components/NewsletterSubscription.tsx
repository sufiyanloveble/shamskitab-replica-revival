
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-10 bg-card">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-islamic-green/20 mb-4">
            <Mail size={24} className="text-islamic-green" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Subscribe to our newsletter!
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Stay updated with new releases, exclusive offers & author events.
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
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
