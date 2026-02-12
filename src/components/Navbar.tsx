import { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationModal } from "@/components/ReservationOverlay";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Daily Catch", href: "#daily-catch" },
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#atmosphere" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/40 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <Anchor className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display font-bold text-xl tracking-wide text-foreground uppercase">
            Harbor Hook <span className="text-primary">&</span> Shanty
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest text-[11px]"
            >
              {link.name}
            </a>
          ))}
          <ReservationModal 
            trigger={<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">Book a Table</Button>} 
          />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border">
             <ReservationModal 
              trigger={<Button className="w-full">Book a Table</Button>} 
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
