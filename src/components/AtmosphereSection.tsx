import { Button } from "@/components/ui/button";

export const AtmosphereSection = () => {
  return (
    <section id="atmosphere" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pier-texture.jpg"
          alt="Weathered wooden pier texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
        <div className="w-16 h-1 bg-white/30 mb-4" />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
          "The salt air isn't just a smell,<br />it's an ingredient."
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
          Located on the historic North Wharf, our shanty has weathered a century of storms. 
          Inside, you'll find the warmth of a tavern, the freshest catch in the city, 
          and a story in every floorboard.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-white text-white hover:bg-white hover:text-primary transition-all rounded-none px-8 py-6 text-lg tracking-widest uppercase"
        >
          Read Our Story
        </Button>
      </div>
    </section>
  );
};

export default AtmosphereSection;
