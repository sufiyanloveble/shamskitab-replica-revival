
import { Truck, CreditCard, BookOpen } from "lucide-react";

const CustomerPerks = () => {
  const perks = [
    {
      icon: <Truck size={18} className="text-islamic-green" />,
      title: "Quick Delivery",
      description: "Free delivery on orders over ₹499"
    },
    {
      icon: <CreditCard size={18} className="text-islamic-green" />,
      title: "Secure Payments",
      description: "Multiple payment options available"
    },
    {
      icon: <BookOpen size={18} className="text-islamic-green" />,
      title: "High-Quality Books",
      description: "Curated collection of the finest books"
    }
  ];

  return (
    <section className="py-3 bg-card border-t border-b border-border/50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-center p-2 bg-background/50 rounded-md hover:bg-accent/50 transition-colors">
              <div className="w-7 h-7 rounded-full bg-islamic-green/10 flex items-center justify-center mr-2 flex-shrink-0">
                {perk.icon}
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-medium">{perk.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPerks;
