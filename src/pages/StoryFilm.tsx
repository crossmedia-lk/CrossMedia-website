
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function StoryFilm({ onEnquireClick, onAdvisorClick }: { onEnquireClick: () => void; onAdvisorClick: () => void }) {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 relative z-10 pt-20 bg-aurora">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="h-[1px] w-8 md:w-16 bg-primary-orange"></div>
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-light-orange">The CrossMedia Methodology</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 md:mb-12 uppercase leading-[0.85]">
              YOUR STORY.<br />
              <span className="text-primary-orange italic">TOLD AS A FILM.</span>
            </h1>

            <div className="space-y-8 md:space-y-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-off-white/70 font-medium leading-relaxed max-w-3xl border-l-2 border-primary-orange pl-6 md:pl-10">
                A professionally produced 5–10 minute documentary-style film that captures the real story behind your organisation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS A STORY FILM */}
      <section className="py-32 md:py-48 px-12 bg-aurora backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-10 uppercase">
                THE APPROACH.
              </h2>
              <div className="space-y-8 text-xl text-white/60 leading-relaxed font-medium border-l-2 border-primary-orange pl-10">
                <p>
                  A Story Film isn't just a corporate video. It's a structured cinematic exploration of your organisation's identity.
                </p>
                <p>
                  We focus on finding the intersection between your history, your people, and your future. The result is an authentic, emotionally engaging narrative that gives stakeholders a reason to care.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              {[
                { title: 'THE PROBLEM', text: 'Disconnected messaging, lost history, and difficulty communicating value.' },
                { title: 'THE STORY', text: 'A deep-dive narrative that connects your origin to your impact.' },
                { title: 'THE PEOPLE', text: 'Real voices, real passion, and authentic representation.' },
                { title: 'THE RESULT', text: 'A long-term storytelling asset for your website, presentations, and brand.' },
              ].map((item) => (
                <div key={item.title} className="group">
                  <h3 className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase mb-2">{item.title}</h3>
                  <p className="text-2xl font-black tracking-tight text-white group-hover:text-primary-orange transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI ADVISOR CTA */}
      <section className="py-24 px-6 border-b border-white/5 bg-aurora">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-primary-orange" size={20} />
              <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Discovery Tool</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase mb-4">Uncover your narrative.</h3>
            <p className="text-white/60 font-medium leading-relaxed">Speak with our Story Advisor to explore how a Story Film could solve your communication challenges.</p>
          </div>
          <button 
            onClick={onAdvisorClick}
            className="bg-primary-orange text-white px-10 py-5 font-black tracking-[0.2em] uppercase text-xs hover:bg-light-orange transition-all flex items-center gap-4 group"
          >
            DISCOVER YOUR STORY
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* DIFFERENT PERSPECTIVES */}
      <section className="py-32 md:py-48 px-6 bg-aurora border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-white mb-6 leading-[0.95]">
              ONE ORGANISATION.<br />MANY PERSPECTIVES.<br />
              <span className="text-primary-orange">ONE STORY.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium">
              A powerful organisational film does not rely on one voice. We find the perspectives that reveal the story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "FOUNDER", q: "Why did it begin?" },
              { role: "LEADERSHIP", q: "What shaped the organisation?" },
              { role: "PEOPLE", q: "Who makes it happen?" },
              { role: "CUSTOMERS", q: "Why does it matter?" },
              { role: "COMMUNITY", q: "What difference does it make?" },
              { role: "FUTURE", q: "Where is it going?" }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 space-y-6 group hover:bg-white/10 hover:border-primary-orange/30 will-change-transform"
              >
                <div className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">{p.role}</div>
                <div className="text-2xl font-black tracking-tight text-white uppercase group-hover:text-primary-orange transition-colors">{p.q}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL OF THIS EXPERIENCE LEADS TO ONE THING */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 md:p-20 bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-[0.95]">
              ALL OF THIS EXPERIENCE<br />LEADS TO ONE THING.<br />
              <span className="opacity-40 italic">YOUR STORY.</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl font-medium leading-relaxed">
              <p>
                “We bring the discipline of filmmaking, the thinking of a screenwriter and the perspective of a producer to the story of your organisation.”
              </p>
              <div className="pt-8 flex justify-center">
                <button 
                  onClick={onEnquireClick}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-primary-orange flex items-center justify-center transition-all hover:bg-primary-orange group"
                >
                  <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase pulse-glow group-hover:text-white text-center">
                    ENQUIRE
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-aurora border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase mb-8">What's Your Story?</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12 uppercase leading-[0.95]">
            TELL US ABOUT<br />YOUR ORGANISATION.
          </h3>
          <p className="text-white/60 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            We'll help you discover the story worth telling and turn it into a film that matters.
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
