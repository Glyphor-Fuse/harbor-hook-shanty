import { AspectRatio } from "@/components/ui/aspect-ratio";

export const SourcingMap = () => {
  return (
    <div className="w-full bg-slate-900 rounded-lg overflow-hidden border border-white/10 relative group">
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm p-4 rounded max-w-xs border border-white/10">
          <h4 className="font-display text-lg text-white mb-2">Local Waters Only</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            We partner exclusively with day-boat fishermen from the Gulf of Maine to Georges Bank. 
            If it wasn't swimming this morning, we don't serve it.
          </p>
        </div>
        <div className="self-end">
          <span className="text-[10px] uppercase tracking-widest text-white/40">Interactive Map Preview</span>
        </div>
      </div>
      
      <AspectRatio ratio={16 / 9}>
        <img
          src="/images/map-illustration.jpg"
          alt="Illustrated map of New England fishing zones"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Map Markers Overlay */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full animate-ping z-20" />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full z-20 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
        
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-ping z-20 delay-700" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full z-20 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
        
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping z-20 delay-300" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full z-20 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
      </AspectRatio>
    </div>
  );
};

export default SourcingMap;
