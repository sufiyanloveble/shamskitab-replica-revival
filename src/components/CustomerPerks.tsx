
import { Truck, CreditCard, BookOpen } from "lucide-react";

const CustomerPerks = () => {
  const perks = [
    {
      icon: <Truck size={24} className="text-islamic-green" />,
      title: "Quick Delivery",
      description: "Free delivery on orders over ₹499"
    },
    {
      icon: <CreditCard size={24} className="text-islamic-green" />,
      title: "Secure Payments",
      description: "Multiple payment options available"
    },
    {
      icon: <BookOpen size={24} className="text-islamic-green" />,
      title: "High-Quality Books",
      description: "Curated collection of the finest books"
    }
  ];

  return (
    <section className="py-10 bg-card border-t border-b border-border/50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3 bg-background/50 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-islamic-green/10 flex items-center justify-center mb-3">
                {perk.icon}
              </div>
              <h3 className="text-sm font-medium mb-1">{perk.title}</h3>
              <p className="text-xs text-muted-foreground">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPerks;
