
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Play, Award, Globe, PenTool, Layout, Palette, Zap } from "lucide-react";

export default function About({ onEnquireClick }: { onEnquireClick: () => void }) {
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
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-light-orange">Our Heritage & Identity</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase mb-12 leading-[0.85]">
              FILM IS OUR<br /><span className="text-primary-orange italic">HERITAGE.</span>
            </h1>
            
            <div className="space-y-8 md:space-y-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-off-white/70 font-medium leading-relaxed max-w-4xl border-l-2 border-primary-orange pl-6 md:pl-10">
                “CrossMedia brings together a heritage in film with contemporary storytelling, creative development and international production experience.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREDIBILITY GRID */}
      <section className="py-24 px-6 border-y border-white/5 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/5 backdrop-blur-sm p-12 border border-white/10 will-change-transform">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-4">
              <h3 className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Film Experience</h3>
              <p className="text-white/60 font-medium">Decades of professional involvement in feature film production and broadcast.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
              <h3 className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Creative Thinking</h3>
              <p className="text-white/60 font-medium">A narrative-first approach driven by screenwriting and creative development.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-4">
              <h3 className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Production Discipline</h3>
              <p className="text-white/60 font-medium">Rigorous production management systems developed across international markets.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEGACY: T. ARJUNA */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden bg-aurora border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary-orange" size={20} />
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">A Legacy in Film</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-tight text-white">
                T. ARJUNA<br />
                <span className="text-white/30">(1941 - 2021)</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-white/60 border-l-2 border-primary-orange/30 pl-10">
                <p>
                  A prominent director and producer associated with India and Sri Lanka since 1970, and Director/Producer of the evergreen Sinhala film “Wasanthaye Dawasak”. He is the father and mentor of CrossMedia’s founder Mr. Arjun Upendra and Father in Law of Co-Founder (Late) Mrs. Sadhana Arjun.
                </p>
                <p>
                  The late Mr. T. Arjuna was the driving force behind Mr. Arjun Upendra’s life and career — shaping his integrity, values and moral compass from an early age; while mentoring him and CrossMedia throughout the journey of life and film. His greatest legacy to us was not the awards or films, but the principles with which he lived and worked.
                </p>
                <p>
                  Mr. T. Arjuna's contribution to cinema was recognised with 11 Presidential Awards in Sri Lanka, establishing a standard of creative excellence that defines CrossMedia today.
                </p>
                <p>
                  CrossMedia honours him first as a father, and then as a mentor and filmmaker whose legacy continues to guide how we do business and tell stories—with integrity, purpose, humility and respect.
                </p>
                <p className="pt-8 border-t border-white/10 font-black tracking-widest text-[10px] uppercase text-primary-orange">
                  50 YEARS • 11 PRESIDENTIAL AWARDS • REGIONAL CINEMA HISTORY
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-white/5 border border-white/10 relative group backdrop-blur-sm overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="/t_arjuna.jpg"
                alt="T. Arjuna"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 z-10">
                <div className="h-[1px] w-12 bg-primary-orange mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors duration-700">HERITAGE</p>
                <p className="text-[10px] font-black tracking-[0.5em] text-white/10 uppercase group-hover:text-primary-orange/60 transition-colors duration-700 mt-2">INDIA • SRI LANKA</p>
              </div>

              {/* ACCENT LIGHT */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-orange/10 blur-[120px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY: SADHANA ARJUN */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden bg-aurora border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 aspect-[4/5] bg-white/5 border border-white/10 relative group backdrop-blur-sm overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="/sadhana_arjun.jpg"
                alt="Sadhana Arjun"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/5 via-transparent to-transparent opacity-50" />
              
              <div className="absolute bottom-10 right-10 z-10 text-right">
                <div className="h-[1px] w-12 bg-primary-orange ml-auto mb-4 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors duration-700">CREATIVITY</p>
                <p className="text-[10px] font-black tracking-[0.5em] text-white/10 uppercase group-hover:text-primary-orange/60 transition-colors duration-700 mt-2">VISUAL IMAGINATION</p>
              </div>

              {/* ATMOSPHERIC BLOOM */}
              <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary-orange/5 blur-[120px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-primary-orange" size={20} />
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">A Legacy of Vision</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-tight text-white">
                SADHANA ARJUN<br />
                <span className="text-white/30">(1970 - 2014)</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-white/60 border-l-2 border-primary-orange/30 pl-10">
                <p>
                  Mrs. Sadhana Arjun was the co-founder and the driving force behind the birth of CrossMedia. A gifted visual artist and marketing specialist, she brought together creativity, visual imagination and a deep understanding of how stories connect with people.
                </p>
                <p>
                  Her vision helped shape CrossMedia into what it was meant to be—a place where ideas could become powerful visual stories. Her creative spirit and belief in the power of storytelling remain an enduring part of CrossMedia’s DNA.
                </p>
                <p className="pt-8 border-t border-white/10 font-black tracking-widest text-[10px] uppercase text-primary-orange">
                  CO-FOUNDER • VISUAL ARTIST • MARKETING SPECIALIST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER: ARJUN UPENDRA */}
      <section className="py-32 md:py-48 px-6 bg-aurora border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-12">
              <div>
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase mb-6 block">The Storyteller Behind CrossMedia</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
                  ARJUN<br />UPENDRA
                </h2>
              </div>
              
              <div className="space-y-6 text-xl text-white/60 leading-relaxed font-medium">
                <p>
                  Screenwriter, Director, and Producer with over two decades of professional history across Sri Lanka, India, the UK, and the UAE.
                </p>
                <p>
                  Arjun co-founded CrossMedia in Sri Lanka in 2013, along with his wife (Late) Mrs. Sadhana Arjun; a multi talented creative director & marketing specialist.
                </p>
                <p>
                  CrossMedia was founded to bridge the gap between high-end creative agency thinking and corporate production realities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white">20+</div>
                  <div className="text-[10px] font-black tracking-widest text-primary-orange uppercase">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white">WGA</div>
                  <div className="text-[10px] font-black tracking-widest text-primary-orange uppercase">Registered Scripts</div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] bg-white/5 border border-white/10 relative group backdrop-blur-sm overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="/arjun_upendra_new.jpg"
                alt="Arjun Upendra"
                className="w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 right-10 z-10 text-right">
                <div className="h-[1px] w-12 bg-primary-orange ml-auto mb-4 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors duration-700">WRITER</p>
                <p className="text-[10px] font-black tracking-[0.5em] text-white/10 uppercase group-hover:text-primary-orange/60 transition-colors duration-700 mt-2">DIRECTOR</p>
              </div>

              {/* ATMOSPHERIC BLOOM */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-orange/5 blur-[120px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            </div>
          </div>

          {/* FEATURED ACHIEVEMENT CARD */}
          <div className="bg-white/5 backdrop-blur-xl p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <Play className="text-primary-orange fill-primary-orange" size={20} />
                  <h3 className="text-xl font-black tracking-tight text-white uppercase">Featured Achievement</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="text-4xl font-black tracking-tighter text-white uppercase">DIE TOMORROW</h4>
                  <p className="text-white/40 font-bold tracking-widest text-xs uppercase">Writer & Director • Feature Film</p>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Arjun Upendra is arguably the only contemporary Sri Lankan to have been able to write and direct a mainstream Independent Hollywood English-language feature film produced by Desert Vision. UAE with a multi-national Hollywood cast and crew and a limited release theatrical distribution deal. He is also one of the few Sri Lankans to have collaborated with leading German film composer; JOHANNES RIEDL for the production of the soundtrack of the film. The film is slated for a 2027 release.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 lg:pt-0 pt-12 lg:border-t-0 border-t border-white/10 lg:border-l lg:pl-12">
                <h3 className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  {['Screenwriting', 'Creative Direction', 'Production Management', 'Media Distribution', 'Project Management', 'Creative Systems'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-orange" />
                      <span className="text-xs font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE VISION: ELLEANA ARJUN */}
      <section className="py-32 md:py-48 px-6 bg-aurora border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-2 aspect-[4/5] bg-white/5 border border-white/10 relative group backdrop-blur-sm overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="/elleana_arjun.jpg"
                alt="Elleana Arjun"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-primary-orange/5 via-transparent to-transparent opacity-50" />
              
              <div className="absolute bottom-10 left-10 z-10 text-left">
                <div className="h-[1px] w-12 bg-primary-orange mr-auto mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors duration-700">GEN-Z & GEN-ALPHA</p>
                <p className="text-[10px] font-black tracking-[0.5em] text-white/10 uppercase group-hover:text-primary-orange/60 transition-colors duration-700 mt-2">ILLUSTRATIVE ARTS</p>
              </div>

              {/* ATMOSPHERIC BLOOM */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-orange/5 blur-[120px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            </div>

            <div className="order-1 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="text-primary-orange" size={20} />
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">A Vision Beyond the Ordinary</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-tight text-white">
                ELLEANA ARJUN
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-white/60 border-l-2 border-primary-orange/30 pl-10">
                <p>
                  CrossMedia believes in the future. We take inspiration from the work of brilliant emerging artists and Elleana Arjun is one of them and our creative consultant when we make films for Gen-Z, Gen-Alpha and the future.
                </p>
                <p>
                  She is a child prodigy in illustrative arts and visual design, with an extraordinary ability to turn imagination into striking visual worlds. As an impeccable and visionary Art consultant, she brings fresh thinking, fearless ideas and a rare instinct for seeing possibilities where others see limitations.
                </p>
                <p>
                  Her work challenges convention, embraces the unexpected and seeks to create visual experiences that feel genuinely new—ideas designed not simply to be different, but to be game-changing and never seen before.
                </p>
                <p className="pt-8 border-t border-white/10 font-black tracking-widest text-[10px] uppercase text-primary-orange">
                  CREATIVE CONSULTANT • ART CONSULTANT • VISUAL DESIGNER
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES BEGIN ON THE PAGE */}
      <section className="py-32 md:py-48 px-6 bg-aurora">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <PenTool className="text-primary-orange" size={32} />
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase mb-12">
            STORIES BEGIN<br />ON THE PAGE.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed mb-20">
            CrossMedia's creative approach is informed by screenwriting and narrative development. We understand that a compelling film starts with a structured story.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Narrative Structure', 'Character Development', 'Story Development', 'Produced Scripts'].map((item, idx) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl group hover:border-primary-orange/30"
              >
                <div className="text-[10px] font-black tracking-[0.3em] text-primary-orange uppercase mb-4">Focus</div>
                <div className="text-sm font-black text-white uppercase tracking-widest group-hover:text-primary-orange transition-colors">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL NETWORK */}
      <section className="py-32 md:py-48 px-6 bg-aurora border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Globe className="text-primary-orange" size={20} />
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Global Perspective</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                GLOBAL CREATIVE TALENT.<br />
                LOCAL PRODUCTION REALITY.
              </h2>
              <div className="space-y-6 text-xl text-white/60 font-medium leading-relaxed">
                <p>
                  CrossMedia has access to an international base of creative talent while building productions around Sri Lankan budgets and practical production realities.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-12">
                  <div>
                    <div className="text-white font-black tracking-widest text-sm uppercase mb-2">Thinking</div>
                    <div className="text-primary-orange font-black tracking-widest text-xs uppercase">International Creative</div>
                  </div>
                  <div>
                    <div className="text-white font-black tracking-widest text-sm uppercase mb-2">Execution</div>
                    <div className="text-primary-orange font-black tracking-widest text-xs uppercase">Sri Lankan Value</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { label: 'Sri Lanka', val: '2013' },
                { label: 'India', val: 'Legacy' },
                { label: 'UAE', val: 'Feature' },
                { label: 'UK', val: 'Exp' }
              ].map((loc, idx) => (
                <motion.div 
                  key={loc.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="p-10 border border-white/10 bg-white/5 backdrop-blur-xl text-center group hover:border-primary-orange/30"
                >
                  <div className="text-white/20 text-xs font-black tracking-widest uppercase mb-4 group-hover:text-primary-orange transition-colors">{loc.label}</div>
                  <div className="text-white font-black text-2xl tracking-tighter uppercase italic">{loc.val}</div>
                </motion.div>
              ))}
              {/* ATMOSPHERIC GLOW */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-orange/5 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-32 md:py-48 px-6 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <Layout className="text-primary-orange" size={20} />
            <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Methodology</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85]">
                WE DON’T START<br />WITH A CAMERA.<br />
                <span className="text-primary-orange">WE START WITH A STORY.</span>
              </h3>
            </div>
            <div className="space-y-8 text-xl text-white/60 leading-relaxed font-medium">
              <p>
                We are not simply sending a camera crew to record interviews. Our creative process begins long before production starts.
              </p>
              <p>
                We apply structured professional approaches to discover the hidden narratives that build trust and solve communication problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'DISCOVER', desc: 'Understand the organisation.' },
              { name: 'DEFINE', desc: 'Find the central story.' },
              { name: 'DEVELOP', desc: 'Shape the narrative and perspectives.' },
              { name: 'PRODUCE', desc: 'Capture the people, places and moments.' },
              { name: 'CRAFT', desc: 'Edit, sound design and finish the film.' },
              { name: 'DELIVER', desc: 'Create a finished storytelling asset.' }
            ].map((step, idx) => (
            <motion.div 
                key={step.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 space-y-6 group hover:bg-white/10 hover:border-primary-orange/30 will-change-transform"
              >
                <div className="text-[10px] font-black tracking-[0.3em] text-primary-orange uppercase">Phase</div>
                <div className="space-y-3">
                  <div className="text-lg font-black text-white uppercase tracking-widest group-hover:text-primary-orange transition-colors">{step.name}</div>
                  <p className="text-xs text-white/40 font-medium leading-relaxed uppercase tracking-widest">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              'Research', 'Story development', 'Interview development', 'Narrative structure',
              'Creative direction', 'Production planning', 'Cinematography', 'Editing',
              'Sound', 'Post-production'
            ].map(step => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-orange" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-aurora border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase mb-8">What's Your Story?</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12 uppercase leading-[0.95]">
            LET'S TELL YOUR<br />AUTHENTIC STORY.
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
