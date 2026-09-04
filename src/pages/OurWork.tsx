

import { motion } from "motion/react";
import { Play, PenTool, Film } from "lucide-react";

export default function OurWork({ onEnquireClick }: { onEnquireClick: () => void }) {
  const corporateFilms = [
    { title: "Integrity", client: "Sapphire Capital Group", type: "Profile Video", year: "2018" },
    { title: "Believe in Possibilities", client: "Prima Ceylon Limited", type: "Investor Video", year: "2016" },
    { title: "Recipes Galore", client: "Prima Ceylon Limited", type: "Cookery Videos", year: "2018" },
    { title: "Profile", client: "Serendib Schools Development Foundation", type: "Film", year: "2021" },
    { title: "Women on Boards", client: "IFC / World Bank", type: "Film", year: "2018" },
    { title: "Promotional Film", client: "Armil Sammoon", type: "Film", year: "2018" },
    { title: "Product Launch Video", client: "Uswatte Biscuits", type: "Film", year: "2018" },
    { title: "Film & VR Experience", client: "Marmite", type: "Experience", year: "2016–2017" },
    { title: "Promotional Video", client: "The Video Team Pvt. Ltd.", type: "Video", year: "2015" },
    { title: "Television Spot", client: "Ma's Spices", type: "Commercial", year: "2015" },
    { title: "Corporate Video", client: "Prima Ceylon Limited", type: "Video", year: "2014" },
    { title: "National Championships Launch Video", client: "Volleyball Federation of India", type: "Video", year: "2012" },
    { title: "Let's Play", client: "Practicelite Ltd., UK", type: "Corporate Commercial Spot", year: "2011" },
    { title: "VIP City Launch Video", client: "VIP Housing & Properties, India", type: "Video", year: "2009" },
    { title: "Launch Video", client: "Shantha Towers (Om Shakthy Agencies, India)", type: "Video", year: "2010" },
    { title: "Music Video", client: "Purich Coconut (Practicelite Ltd., UK)", type: "Video", year: "2004" },
    { title: "Magazine Branding", client: "Dubai House-finder (CTC Solutions FZ LLC, UAE)", type: "Branding", year: "2005" },
    { title: "52 College Street Branding", client: "Tekline Manager, Spain", type: "Branding", year: "2007" },
    { title: "Pizza Corner India Branding", client: "Mouawad Group Pvt. Ltd., Switzerland", type: "Branding", year: "2004" },
    { title: "Flock Consumer Network ERP/ERM", client: "Flock Carpets Ltd., UK", type: "System Film", year: "2012" },
    { title: "Media Acquisition & Distribution", client: "Turquoise Pvt. Ltd., Maldives", type: "Division Film", year: "2012" },
    { title: "Equipment Rental Facility", client: "Global First Step LLC, Oman", type: "Facility Film", year: "2011" },
    { title: "Production & Distribution Network", client: "Practicelite Ltd., UK", type: "Network Film", year: "2011" },
    { title: "In Film Branding / Otara Cine", client: "Moonless Night (Hindi)", type: "Branding", year: "2010" },
    { title: "Training Documentation", client: "Prima Ceylon Ltd (Success Media)", type: "Documentation", year: "2008" },
  ];

  const releasedFilms = [
    { title: "Die Tomorrow", detail: "English Feature Film", year: "2025" },
    { title: "Senehasin Senehasata", detail: "Sinhala Feature Film", year: "2022" },
    { title: "Vishwaroopam", detail: "Tamil/Hindi Feature Film", year: "2012" },
    { title: "Within the Mind's Eye", detail: "English Feature Film", year: "2008" },
    { title: "Thambivudayan", detail: "Tamil Feature Film", year: "2008" },
    { title: "Sruthi Bedham", detail: "Tamil Feature Film", year: "2005" },
  ];

  const preProductionFilms = [
    { title: "Kaffir", detail: "Multilingual Feature Film", year: "2026" },
    { title: "Tyger, Tiger", detail: "English Feature Film", year: "2026" },
  ];

  const screenwriting = [
    { title: "Senehasin Senehasata", type: "Sinhala Feature Film", year: "2022" },
    { title: "Die Tomorrow", type: "English Feature Film", year: "2025" },
    { title: "Kaffir", type: "Multilingual Feature Film", year: "2026", pre: true },
    { title: "Tyger, Tiger", type: "English Feature Film", year: "2026", pre: true },
    { title: "Wes", type: "WGA Registered Screenplay", year: "2016" },
    { title: "Within the Mind's Eye", type: "WGA Registered Screenplay", year: "2006" },
    { title: "Amaranth", type: "WGA Registered Screenplay", year: "2003" },
    { title: "Jessie", type: "WGA Registered Script", year: "2000" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 relative z-10 pt-20 bg-aurora">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="h-[1px] w-8 md:w-16 bg-primary-orange"></div>
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-light-orange">Our Portfolio</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-12 leading-[0.85] text-white">
              A HISTORY OF<br /><span className="text-primary-orange italic">NARRATIVES.</span>
            </h1>

            <div className="space-y-8 md:space-y-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-off-white/70 font-medium leading-relaxed max-w-2xl border-l-2 border-primary-orange pl-6 md:pl-10">
                “From corporate films and brand stories to feature films and screenwriting, our experience spans the complete storytelling process.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORPORATE & BRAND FILMS */}
      <section className="py-24 px-6 border-t border-white/5 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Film className="text-primary-orange" size={20} />
            <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Corporate & Brand Films</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {corporateFilms.map((film, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="space-y-4 group will-change-transform"
              >
                <div className="space-y-1">
                  <div className="text-2xl font-black tracking-tighter text-primary-orange uppercase leading-tight">
                    {film.client}
                  </div>
                  <div className="text-[11px] font-black tracking-[0.2em] text-white uppercase">
                    “{film.title}”
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">{film.type}</span>
                  <span className="text-[10px] font-bold text-white/20 tracking-widest uppercase">{film.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE FILMS */}
      <section className="py-32 px-6 bg-aurora border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <Play className="text-primary-orange fill-primary-orange" size={20} />
            <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Feature Films</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12 bg-white/5 backdrop-blur-xl p-12 border border-white/10 will-change-transform"
            >
              <h3 className="text-xs font-black tracking-[0.2em] text-white/20 uppercase border-b border-white/10 pb-4">Completed / Released</h3>
              <div className="space-y-10">
                {releasedFilms.map((film, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-end group"
                  >
                    <div className="space-y-2">
                      <h4 className="text-3xl font-black tracking-tighter text-primary-orange uppercase">{film.title}</h4>
                      <p className="text-[10px] font-bold text-white tracking-widest uppercase">{film.detail}</p>
                    </div>
                    <div className="text-sm font-black text-white/20 italic">{film.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12 bg-white/5 backdrop-blur-xl p-12 border border-white/10 will-change-transform"
            >
              <h3 className="text-xs font-black tracking-[0.2em] text-white/20 uppercase border-b border-white/10 pb-4">In Pre-Production</h3>
              <div className="space-y-10">
                {preProductionFilms.map((film, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <h4 className="text-3xl font-black tracking-tighter text-primary-orange uppercase">{film.title}</h4>
                      <span className="text-[9px] font-black tracking-widest bg-primary-orange text-white px-3 py-1 uppercase">In Pre-Production</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-white tracking-widest uppercase">
                      <span>{film.detail}</span>
                      <span>{film.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCREENWRITING & CREATIVE DEVELOPMENT */}
      <section className="py-32 px-6 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <PenTool className="text-primary-orange" size={20} />
            <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Screenwriting & Creative Development</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="max-w-xl space-y-8">
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                GREAT FILMS BEGIN LONG BEFORE THE CAMERA ROLLS.
              </h3>
              <p className="text-xl text-white/60 leading-relaxed font-medium">
                CrossMedia’s storytelling experience begins with story, screenwriting, narrative structure, character, perspective and creative development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {screenwriting.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="p-8 border border-white/5 bg-white/5 backdrop-blur-xl flex justify-between items-center group hover:border-primary-orange/30 transition-colors will-change-transform"
                >
                  <div className="space-y-2">
                    <div className="text-2xl font-black text-primary-orange uppercase tracking-tighter leading-tight">
                      {item.title}
                      {item.pre && <span className="ml-4 text-[8px] font-black tracking-widest text-primary-orange align-middle border border-primary-orange/30 px-2 py-0.5 uppercase">Pre-Prod</span>}
                    </div>
                    <div className="text-[10px] font-black text-white tracking-widest uppercase">{item.type}</div>
                  </div>
                  <div className="text-sm font-black text-white/10 italic">{item.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE EXPERIENCE STATEMENT */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-12 md:p-24 bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-[0.95]">
              WE DON’T JUST KNOW HOW<br />TO MAKE FILMS.<br />
              <span className="opacity-40">WE KNOW HOW STORIES ARE BUILT.</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl font-medium leading-relaxed">
              <p>
                “From the first idea on the page to the final frame on screen, our experience spans screenwriting, creative development, directing, cinematography, production and post-production.”
              </p>
              <p className="font-black uppercase tracking-widest text-sm pt-8 text-primary-orange">
                That perspective shapes how we approach every Story Film.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARCHIVE CTA */}
      <section className="py-24 px-6 border-t border-white/5 bg-aurora">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-xl p-12 border border-white/10">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black tracking-tight text-white uppercase mb-4">The Archive.</h3>
            <p className="text-white/60 font-medium">Explore our complete archive of productions and cinematic storytelling on our official YouTube channel.</p>
          </div>
          <a 
            href="https://youtube.com/@arjunupendra?si=af7mo3Vsh2h5p-Le" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-charcoal px-10 py-5 font-black tracking-[0.2em] uppercase text-xs hover:bg-primary-orange hover:text-white transition-all flex items-center gap-4 group shadow-xl"
          >
            WATCH ON YOUTUBE
            <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-aurora border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase mb-8">What's Your Story?</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12 uppercase leading-[0.95]">
            EVERY ORGANISATION<br />HAS A STORY.
          </h3>
          <p className="text-white/60 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Tell us about your organisation. We'll help you discover the story worth telling.
          </p>
          <button 
            onClick={onEnquireClick}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-primary-orange inline-flex items-center justify-center transition-all hover:bg-primary-orange mx-auto group"
          >
            <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase pulse-glow group-hover:text-white text-center">
              ENQUIRE
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

