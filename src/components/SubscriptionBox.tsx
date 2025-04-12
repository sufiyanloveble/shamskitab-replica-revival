
import { useState } from "react";
import { Button } from "./ui/button";
import { Book, Bookmark, Gift, CheckCircle } from "lucide-react";

const SubscriptionBox = () => {
  const [subscriptionType, setSubscriptionType] = useState<'one-time' | 'recurring'>('one-time');
  
  return (
    <section className="py-10 bg-accent">
      <div className="container mx-auto px-3 md:px-4">
        <div className="bg-card shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-60 md:h-auto bg-gradient-to-r from-islamic-green/80 to-islamic-gold/70">
              <img 
                src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18" 
                alt="Book subscription box" 
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Books of the Month
                </h2>
                <p className="text-white/80 mb-4 max-w-md">
                  Receive a curated selection of our top picks delivered to your doorstep every month
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-bold text-2xl">₹899</span>
                  <span className="text-white/80 line-through text-sm">₹1299</span>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    30% OFF
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content side - fixed height to prevent resizing */}
            <div className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-medium mb-4">What's Included:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                    <Book size={18} className="text-islamic-green" />
                  </div>
                  <div>
                    <p className="font-medium">3 Books</p>
                    <p className="text-xs text-muted-foreground">Curated for you</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                    <Bookmark size={18} className="text-islamic-green" />
                  </div>
                  <div>
                    <p className="font-medium">1 Bookmark</p>
                    <p className="text-xs text-muted-foreground">Exclusive design</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                    <Gift size={18} className="text-islamic-green" />
                  </div>
                  <div>
                    <p className="font-medium">2 Surprises</p>
                    <p className="text-xs text-muted-foreground">Mystery items</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                    <CheckCircle size={18} className="text-islamic-green" />
                  </div>
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">Delivered to you</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mb-6 p-2 bg-accent rounded-md">
                <button
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    subscriptionType === 'one-time' 
                      ? 'bg-card text-foreground shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setSubscriptionType('one-time')}
                >
                  One-time Purchase
                </button>
                <button
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    subscriptionType === 'recurring' 
                      ? 'bg-card text-foreground shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setSubscriptionType('recurring')}
                >
                  Subscribe Now
                </button>
              </div>
              
              <Button className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-black font-medium">
                {subscriptionType === 'one-time' ? 'Buy Now' : 'Subscribe Monthly'}
              </Button>
              
              {subscriptionType === 'recurring' && (
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Cancel anytime. Billed monthly until canceled.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBox;
