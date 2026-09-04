// SYSTEM_STATUS: ONLINE_V1_2026-09-04
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";
import EnquiryForm from "./components/EnquiryForm";
import StoryAdvisor from "./components/StoryAdvisor";
import { Youtube, Sparkles, ArrowUp } from "lucide-react";
import Home from "./pages/Home";
import StoryFilm from "./pages/StoryFilm";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import OurClients from "./pages/OurClients";
import { Page } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<{
    organisation?: string;
    about?: string;
    objective?: string;
  }>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    if (page === 'CONTACT') {
      setIsEnquiryOpen(true);
    } else {
      setCurrentPage(page);
    }
  };

  const handleAdvisorTalkToCrossMedia = (prefill: { organisation: string; about: string; objective: string }) => {
    setEnquiryPrefill(prefill);
    setIsAdvisorOpen(false);
    setIsEnquiryOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home 
          onEnquireClick={() => {
            setEnquiryPrefill({});
            setIsEnquiryOpen(true);
          }} 
          onAdvisorClick={() => setIsAdvisorOpen(true)}
        />;
      case 'STORY_FILM':
        return <StoryFilm 
          onEnquireClick={() => {
            setEnquiryPrefill({});
            setIsEnquiryOpen(true);
          }} 
          onAdvisorClick={() => setIsAdvisorOpen(true)}
        />;
      case 'OUR_WORK':
        return <OurWork onEnquireClick={() => {
          setEnquiryPrefill({});
          setIsEnquiryOpen(true);
        }} />;
      case 'OUR_CLIENTS':
        return <OurClients onEnquireClick={() => {
          setEnquiryPrefill({});
          setIsEnquiryOpen(true);
        }} />;
      case 'ABOUT':
        return <About onEnquireClick={() => {
          setEnquiryPrefill({});
          setIsEnquiryOpen(true);
        }} />;
      default:
        return <Home 
          onEnquireClick={() => {
            setEnquiryPrefill({});
            setIsEnquiryOpen(true);
          }} 
          onAdvisorClick={() => setIsAdvisorOpen(true)}
        />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary-orange selection:text-white">
      <AuroraBackground />
      
      <Navbar 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        onEnquireClick={() => setIsEnquiryOpen(true)}
      />

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="will-change-opacity"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={handlePageChange} />

      <StoryAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
        onTalkToCrossMedia={handleAdvisorTalkToCrossMedia}
      />

      <EnquiryForm 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        initialData={enquiryPrefill}
      />

      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(244, 122, 56, 1)", // Primary Orange
                borderColor: "rgba(244, 122, 56, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                opacity: { duration: 0.4 }
              }}
              className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group"
              title="Scroll to top"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href="https://youtube.com/@arjunupendra?si=af7mo3Vsh2h5p-Le"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary-orange hover:border-primary-orange transition-all group"
          title="Watch Our Work"
        >
          <Youtube size={24} className="group-hover:scale-110 transition-transform" />
          <span className="absolute right-full mr-4 bg-charcoal/90 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Watch Our Work
          </span>
        </motion.a>

        <motion.button
          onClick={() => setIsAdvisorOpen(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary-orange hover:border-primary-orange transition-all group relative overflow-hidden"
          title="The Story Advisor"
        >
          <motion.div
            animate={{ 
              opacity: [0.4, 1, 0.4],
              filter: ["drop-shadow(0 0 0px rgba(255,92,0,0))", "drop-shadow(0 0 8px rgba(255,92,0,0.6))", "drop-shadow(0 0 0px rgba(255,92,0,0))"]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={24} className="group-hover:scale-110 transition-transform text-primary-orange group-hover:text-white" />
          </motion.div>
          <span className="absolute right-full mr-4 bg-charcoal/90 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Discover Your Story
          </span>
        </motion.button>
      </div>
    </div>
  );
}
