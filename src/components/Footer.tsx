import { Anchor, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-primary-foreground pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group text-white">
              <Anchor className="h-6 w-6 text-primary-foreground transition-transform group-hover:rotate-12" />
              <span className="font-display font-bold text-xl tracking-wide uppercase">
                Harbor Hook <span className="text-blue-300">&</span> Shanty
              </span>
            </a>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Honoring the traditions of the Atlantic coast since 1924. Sustainable sourcing, honest cooking, and a warm welcome.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-white">Visit Us</h4>
            <div className="space-y-4 text-white/60">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  24 Old Pier Road<br />
                  Boston Harbor, MA 02110
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>(617) 555-0198</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-white">Hours</h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Thu</span>
                <span>4pm - 10pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Fri - Sat</span>
                <span>4pm - 11pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span>11am - 9pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">Join our list for seasonal menu updates and special events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-full"
              />
              <Button variant="secondary">Join</Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Harbor Hook & Shanty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
