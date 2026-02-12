import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MENU_ITEMS = [
  {
    title: "The Shanty Tower",
    description: "Three tiers of chilled shellfish, including local oysters, cherrystones, chilled lobster, and shrimp cocktail.",
    image: "/images/seafood-platter.jpg",
    price: "$85"
  },
  {
    title: "Brown Butter Lobster Roll",
    description: "Warm chunks of Maine lobster poached in sage brown butter, served on a toasted brioche bun.",
    image: "/images/lobster-roll.jpg",
    price: "$34"
  },
  {
    title: "Wellfleet Oysters",
    description: "Served raw on the half shell with house-made mignonette and fresh horseradish.",
    image: "/images/oysters.jpg",
    price: "$24/doz"
  }
];

export const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Signature Plates
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Simple preparations that let the ocean speak for itself.
            </p>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 group text-lg p-0 h-auto font-display">
            View Full Menu <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <Card key={idx} className="bg-card border-none shadow-none group overflow-hidden rounded-none">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <CardHeader className="px-0 pt-6 pb-2">
                <div className="flex justify-between items-baseline">
                  <CardTitle className="font-display text-2xl text-foreground">{item.title}</CardTitle>
                  <span className="font-mono text-primary font-medium">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent className="px-0 pb-6">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
