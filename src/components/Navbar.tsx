
import { motion } from "motion/react";
import { Page } from "../types";
import { Menu, X, Youtube } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onEnquireClick: () => void;
}

export default function Navbar({ currentPage, onPageChange, onEnquireClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: "HOME", id: "HOME" },
    { label: "STORY FILM", id: "STORY_FILM" },
    { label: "OUR WORK", id: "OUR_WORK" },
    { label: "OUR CLIENTS", id: "OUR_CLIENTS" },
    { label: "ABOUT", id: "ABOUT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => onPageChange('HOME')}
        >
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
            CROSS<span className="text-primary-orange">MEDIA</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-all ${
                currentPage === item.id ? "text-primary-orange" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnquireClick}
            className="bg-primary-orange text-white px-6 lg:px-8 py-3 rounded-none text-[10px] lg:text-xs font-black tracking-[0.2em] transition-all hover:bg-light-orange"
          >
            ENQUIRE
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`text-sm font-bold tracking-[0.2em] text-left ${
                currentPage === item.id ? "text-primary-orange" : "text-white/70"
              }`}
            >
              {item.label}
            </button>
          ))}
          <motion.button
            onClick={() => {
              onEnquireClick();
              setIsMenuOpen(false);
            }}
            className="bg-primary-orange text-white px-6 py-3 text-xs font-bold tracking-[0.2em]"
          >
            ENQUIRE
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}
