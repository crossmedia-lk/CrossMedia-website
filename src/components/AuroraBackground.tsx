
import { motion } from "motion/react";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A0A0A] overflow-hidden">
      {/* Dynamic Aurora Layers */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 aurora-bg filter blur-[60px] opacity-40 will-change-transform"
      />
      
      {/* Floating accent elements for depth - Warm Ember Tones */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] will-change-transform"
      />
      
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-light-orange/5 rounded-full blur-[120px] will-change-transform"
      />

      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
