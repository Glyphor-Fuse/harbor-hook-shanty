import { ReservationModal } from "@/components/ReservationOverlay";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-coastal.jpg"
          alt="Mist over the Atlantic ocean coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white space-y-8 animate-in fade-in zoom-in-95 duration-1000">
        <div className="space-y-4">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase opacity-90 font-medium">
            Est. 1924 • Boston Harbor
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
            Fresh from the <br />
            <span className="italic text-white/90">Atlantic Edge</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-light">
            A sanctuary of salt, stone, and sea. Experience the daily catch brought straight to our weathered pier.
          </p>
        </div>

        <div className="pt-8">
          <ReservationModal
            trigger={
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border border-white/30 hover:bg-white/10 hover:border-white/80 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto rounded-none tracking-widest uppercase backdrop-blur-sm"
              >
                Claim Your Table
              </Button>
            }
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="sr-only">Scroll down</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
