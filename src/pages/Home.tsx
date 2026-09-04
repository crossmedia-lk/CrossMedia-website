
import { motion } from "motion/react";
import { ArrowRight, Play, Users, Target, History, Sparkles } from "lucide-react";

interface HomeProps {
  onEnquireClick: () => void;
  onAdvisorClick: () => void;
}

export default function Home({ onEnquireClick, onAdvisorClick }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 flex flex-col gap-32 opacity-10 pointer-events-none select-none z-0 hidden xl:flex">
        <div className="text-[140px] font-black leading-none border-text uppercase will-change-transform">ORIGIN</div>
        <div className="text-[140px] font-black leading-none border-text uppercase will-change-transform">PURPOSE</div>
        <div className="text-[140px] font-black leading-none border-text uppercase will-change-transform">IMPACT</div>
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative z-10 pt-20 bg-aurora">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="h-[1px] w-8 md:w-16 bg-primary-orange"></div>
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-light-orange">We make films about organisations worth knowing</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-8 md:mb-12 uppercase"
            >
              EVERYONE<br />HAS A<br /><span className="ai-gradient-text italic">STORY</span>.
            </motion.h1>
            
            <motion.div variants={itemVariants} className="space-y-8 md:space-y-12">
              <p className="text-lg md:text-xl lg:text-2xl text-off-white/70 font-medium leading-relaxed max-w-2xl border-l-2 border-primary-orange/30 pl-6 md:pl-10">
                &ldquo;Behind every organisation are people, purpose, challenges, achievements and moments that deserve to be remembered.&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-10 pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onEnquireClick}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-primary-orange flex items-center justify-center transition-all hover:bg-primary-orange group"
                >
                  <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase pulse-glow group-hover:text-white text-center">
                    ENQUIRE
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase mb-6 block">The Communication Gap</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                PEOPLE KNOW WHAT YOU DO.<br />
                <span className="text-white/30">BUT DO THEY KNOW WHY YOU DO IT?</span>
              </h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed max-w-xl">
                <p>
                  Most organisations are excellent at explaining their facts, services, and achievements. They have websites that list capabilities and brochures that outline services.
                </p>
                <p className="font-bold text-white">
                  But facts don't build trust. Lists don't create connection.
                </p>
                <p className="text-primary-orange font-bold italic">
                  "Your story is more than your company profile."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square bg-white/5 backdrop-blur-sm flex items-center justify-center p-12 border border-white/10 will-change-transform"
            >
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
                <p className="text-3xl font-black tracking-tight text-white italic">"The whole picture is often invisible."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE INSIGHT SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-10 uppercase leading-tight">
              YOUR STORY IS YOUR DIFFERENCE.
            </h2>
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/80">
              <p>
                "Your competitors can describe their products. 
                <span className="text-primary-orange font-bold"> Your story is uniquely yours."</span>
              </p>
              <p className="text-base md:text-lg font-medium opacity-60 max-w-3xl mx-auto pt-8 border-t border-white/10">
                CrossMedia discovers the human story behind the organisation—the people, the purpose, and the journey that no one else can replicate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
              MEET THE CROSSMEDIA STORY FILM.
            </h2>
            <p className="text-2xl text-white/60 max-w-2xl font-medium">
              A Story Film brings your organisation's people, purpose, journey and impact together into one compelling film.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { id: '01', title: 'ORIGIN', desc: 'Where it all began.' },
              { id: '02', title: 'PEOPLE', desc: 'The hearts behind the work.' },
              { id: '03', title: 'PURPOSE', desc: 'Why you do what you do.' },
              { id: '04', title: 'IMPACT', desc: 'The difference you make.' },
              { id: '05', title: 'FUTURE', desc: 'Where you are going.' },
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white/5 p-10 border border-white/10 hover:border-primary-orange/30 group backdrop-blur-xl hover:bg-white/10 will-change-transform"
              >
                <span className="text-4xl font-black text-primary-orange block mb-6">{step.id}</span>
                <h3 className="text-xl font-black tracking-widest mb-3 text-white group-hover:text-primary-orange transition-colors uppercase">{step.title}</h3>
                <p className="text-sm text-white/50 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSPECTIVES SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
              ONE ORGANISATION.<br />
              MANY PERSPECTIVES.<br />
              <span className="text-primary-orange">ONE POWERFUL STORY.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'THE FOUNDER', q: 'Why did it begin?' },
              { title: 'THE PEOPLE', q: 'Who makes it what it is?' },
              { title: 'THE CUSTOMER', q: 'Why does it matter to them?' },
              { title: 'THE COMMUNITY', q: 'What difference does it make?' },
              { title: 'THE ORGANISATION', q: 'What has the journey meant?' },
              { title: 'THE FUTURE', q: 'Where is it going?' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border-l border-white/10 hover:border-primary-orange transition-colors will-change-transform"
              >
                <h3 className="text-primary-orange text-xs font-black tracking-widest uppercase mb-4">{item.title}</h3>
                <p className="text-2xl font-black tracking-tight">{item.q}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
                ONE FILM.<br />MANY PURPOSES.
              </h2>
              <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
                A completed Story Film is more than a video—it's a versatile communication asset that serves your organisation across every channel.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Website', 'Presentations', 'Stakeholder communications', 
                  'Social media', 'Events', 'Recruitment', 
                  'Corporate communications', 'Brand storytelling', 'Institutional history'
                ].map((use) => (
                  <div key={use} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-orange" />
                    <span className="text-xs font-black tracking-widest uppercase text-white/70">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Target />, title: 'COMMUNICATE', desc: 'Explain who you are in a way people can understand and remember.' },
                { icon: <Users />, title: 'BUILD TRUST', desc: 'Put real people and real stories behind the organisation.' },
                { icon: <History />, title: 'PRESERVE', desc: 'Capture important history, people, milestones and institutional memory.' },
                { icon: <Sparkles />, title: 'DIFFERENTIATE', desc: 'Show what makes you different beyond products or statistics.' },
              ].map((val) => (
                <motion.div 
                  key={val.title} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-primary-orange flex gap-6 items-start hover:bg-white/10"
                >
                  <div className="text-primary-orange mt-1">{val.icon}</div>
                  <div>
                    <h3 className="font-black tracking-widest text-sm mb-2 text-white">{val.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHOD SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
            WE DON'T START WITH A CAMERA.<br />
            <span className="text-primary-orange">WE START WITH A STORY.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 font-medium">
            CrossMedia uses structured international-standard approaches to story development and production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'DISCOVER', desc: 'Understand the organisation, its people and its story.' },
            { title: 'DEFINE', desc: 'Identify the central story and the perspectives that matter.' },
            { title: 'DEVELOP', desc: 'Structure the narrative and creative direction.' },
            { title: 'PRODUCE', desc: 'Film the people, places and moments that bring the story to life.' },
            { title: 'CRAFT', desc: 'Edit, shape and finish the film to professional standards.' },
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-12 space-y-6 border border-white/10 hover:border-primary-orange/30 hover:bg-white/10 group"
            >
              <span className="text-xs font-black text-primary-orange tracking-[0.3em] uppercase">Step {idx + 1}</span>
              <h3 className="text-xl font-black tracking-tighter text-white group-hover:text-primary-orange transition-colors">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CROSSMEDIA SECTION */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-aurora p-8 md:p-24 text-white relative overflow-hidden border border-white/5">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 uppercase leading-tight">
                  INTERNATIONAL CREATIVE THINKING.<br />
                  <span className="text-primary-orange">LOCAL PRODUCTION REALITY.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                  "CrossMedia works with an international base of creative talent while building productions around Sri Lankan budgets and realities."
                </p>
              </div>
              <div className="space-y-8 md:space-y-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                <div>
                  <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary-orange mb-4">International Standards</h3>
                  <p className="text-sm opacity-50 leading-relaxed font-medium">World-class storytelling methodologies derived from Hollywood and international documentary practices.</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary-orange mb-4">Local Understanding</h3>
                  <p className="text-sm opacity-50 leading-relaxed font-medium">Deep cultural context and practical production knowledge specific to the Sri Lankan landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY ADVISOR SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-primary-orange" size={20} />
                <span className="text-xs font-black tracking-[0.3em] text-primary-orange uppercase">Interactive Advisor</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.95]">
                DO YOU HAVE A STORY<br />
                WORTH TELLING?
              </h2>
              <div className="space-y-6 text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                <p>
                  Every organisation has a narrative, but identifying the one that builds trust and solves communication problems requires a different perspective.
                </p>
                <p className="font-bold text-white">
                  Speak with our Story Advisor to explore your organisation's hidden narrative.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAdvisorClick}
                className="bg-primary-orange text-white px-10 py-5 font-black tracking-[0.2em] uppercase text-sm hover:bg-light-orange transition-all flex items-center gap-4 group shadow-xl"
              >
                DISCOVER YOUR STORY
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 space-y-8 hover:bg-white/10 group hover:border-primary-orange/30 will-change-transform"
            >
              <div className="space-y-4">
                <div className="h-px w-12 bg-primary-orange" />
                <h3 className="text-2xl font-black tracking-tight uppercase italic group-hover:text-primary-orange transition-colors">"Intelligence meets Storytelling."</h3>
              </div>
              <p className="text-white/50 font-medium leading-relaxed">
                The Advisor is a conversational tool designed to help you uncover the people, purpose, and impact moments that matter. It's the first step in our Discovery process.
              </p>
              <div className="flex gap-10">
                <div>
                  <div className="text-2xl font-black text-white">5-10</div>
                  <div className="text-[10px] font-black tracking-widest text-primary-orange uppercase mt-1">Minute Discovery</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">1</div>
                  <div className="text-[10px] font-black tracking-widest text-primary-orange uppercase mt-1">Personal Assessment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 md:py-48 px-6 text-center bg-aurora text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase mb-8">What's Your Story?</h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-[0.95]">
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
        </motion.div>
      </section>
    </div>
  );
}
