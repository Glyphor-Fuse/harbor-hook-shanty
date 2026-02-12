import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SourcingMap } from "@/components/SourcingMap";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, MapPin, Anchor } from "lucide-react";
import { ReservationModal } from "@/components/ReservationOverlay";
import { Button } from "@/components/ui/button";

const CATCH_DATA = [
  { name: "Bluefin Tuna", status: "Available", origin: "Gulf of Maine", price: "MP" },
  { name: "Wellfleet Oysters", status: "Limited", origin: "Cape Cod Bay", price: "$24/doz" },
  { name: "Atlantic Cod", status: "Sold Out", origin: "Georges Bank", price: "—" },
  { name: "Maine Lobster", status: "Available", origin: "Penobscot Bay", price: "$38/lb" },
  { name: "Sea Scallops", status: "Available", origin: "New Bedford", price: "$32" },
];

export const DailyCatchChalkboard = () => {
  return (
    <section id="daily-catch" className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Texture Overlay for Chalkboard feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary-foreground/60 tracking-widest text-sm uppercase">
            <Anchor className="w-4 h-4" />
            <span>Updated: {new Date().toLocaleDateString()}</span>
            <Anchor className="w-4 h-4" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            The Captain's Board
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our menu changes with the tides. See what the boats brought in this morning.
          </p>
        </div>

        <Tabs defaultValue="catch" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 border border-white/10 text-white w-auto h-auto p-1 gap-1 rounded-full">
              <TabsTrigger 
                value="catch" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-foreground transition-all font-medium"
              >
                <Fish className="w-4 h-4 mr-2" />
                Today's Catch
              </TabsTrigger>
              <TabsTrigger 
                value="sourcing" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-foreground transition-all font-medium"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Our Sources
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="catch" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-4">
              {CATCH_DATA.map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center justify-between p-4 md:p-6 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-xl md:text-2xl group-hover:text-blue-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/50 italic flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> {item.origin}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-lg">{item.price}</span>
                    <span className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.status === 'Available' ? 'border-green-500/50 text-green-400' :
                      item.status === 'Limited' ? 'border-yellow-500/50 text-yellow-400' :
                      'border-red-500/50 text-red-400 line-through opacity-50'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <ReservationModal 
                trigger={
                  <Button variant="ghost" className="text-white border-white/20 hover:bg-white hover:text-foreground">
                    Reserve a Fresh Catch
                  </Button>
                } 
              />
            </div>
          </TabsContent>

          <TabsContent value="sourcing" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SourcingMap />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DailyCatchChalkboard;
