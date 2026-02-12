import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DailyCatchChalkboard } from "@/components/DailyCatchChalkboard";
import { MenuHighlights } from "@/components/MenuHighlights";
import { AtmosphereSection } from "@/components/AtmosphereSection";
import { Footer } from "@/components/Footer";

import ReservationOverlay from "@/components/ReservationOverlay";
import SourcingMap from "@/components/SourcingMap";
const Index = () => {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <DailyCatchChalkboard />
      <MenuHighlights />
      <AtmosphereSection />
      <Footer />
      <ReservationOverlay />
      <SourcingMap />
    </main>
  );
};

export default Index;
