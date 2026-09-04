
import { motion } from "motion/react";
import { Instagram, Facebook } from "lucide-react";
import { Page } from "../types";

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="px-6 md:px-16 py-20 flex flex-col gap-12 border-t border-white/10 bg-aurora backdrop-blur-xl">
      {/* ADVANTAGE SECTION - PROMINENT GLASS BOX */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 max-w-2xl group hover:border-primary-orange/30 transition-all"
      >
        <div className="text-[10px] uppercase tracking-[0.4em] text-primary-orange font-black mb-4">Advantage</div>
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight italic">
          International thinking. <br /> Sri Lankan production reality.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary-orange font-bold">Contact</div>
          <div className="text-sm text-white/50 max-w-[240px] leading-relaxed space-y-1">
            <p>F5, St. Anthony’s Mawatha, Colpetty, Colombo 03</p>
            <p>crossmedia.ask@gmail.com</p>
            <p>+94 704476769</p>
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-10">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary-orange font-bold">Connect</div>
            <div className="flex gap-6 items-center">
              <a 
                href="https://www.instagram.com/crossmedia.lk?igsi=MWJvYWFqY2Uza2Yzaw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1Jiva582Nf/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary-orange transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            <button onClick={() => onPageChange('HOME')} className="hover:text-primary-orange transition-colors">Home</button>
          </div>
          
          <div className="text-[10px] text-white/30 tracking-widest uppercase font-medium">
            &copy; {new Date().getFullYear()} CROSSMEDIA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
