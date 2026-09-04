

import { motion } from "motion/react";
import { Search, Quote } from "lucide-react";
import { useState } from "react";

export default function OurClients({ onEnquireClick }: { onEnquireClick: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");

  const historicalClients = [
    { name: "Sapphire Capital Group", location: "Australia", logo: "/logos/Sapphire_Capital-logo.png" },
    { name: "Prima Ceylon Limited", location: "Sri Lanka", logo: "/logos/Prima-logo.png" },
    { name: "Serendib Schools Development Foundation", location: "Sri Lanka", logo: "/logos/SSDF-logo.png" },
    { name: "IFC / World Bank", location: "Global", logo: "/logos/IFC-logo.png" },
    { name: "Uswatte Biscuits", location: "Sri Lanka", logo: "/logos/Uswatte-logo.png" },
    { name: "Marmite (Unilever)", location: "Sri Lanka", logo: "/logos/Unilever-logo.png" },
    { name: "Ma's Spices", location: "Sri Lanka", logo: "/logos/Mas-logo.png" },
    { name: "Volleyball Federation of India", location: "India", logo: "/logos/Indian_Volleyball-logo.png" },
    { name: "Practicelite Ltd.", location: "UK", logo: "/logos/Practicelite-logo.png" },
    { name: "Sampath Bank", location: "Sri Lanka", logo: "/logos/Sampath_Bank-logo.png" },
    { name: "Mullenlowe", location: "Sri Lanka", logo: "/logos/Mullenlowe-logo.png" },
    { name: "Ashraff Associates", location: "Sri Lanka", logo: "/logos/Ashraff_Associates-logo.png" },
    { name: "Dentsu Grant", location: "Sri Lanka", logo: "/logos/Dentsu_Grant-logo.png" },
    { name: "Rajkamal Films International", location: "India", logo: "/logos/Rajkamal_Films-logo.png" },
    { name: "Shantha Builders", location: "India", logo: "/logos/Shantha_Builders-logo.png" },
    { name: "Waverley", location: "Australia", logo: "/logos/Waverley-logo.png" },
    { name: "Armil Sammoon", location: "Sri Lanka" },
    { name: "The Video Team Pvt. Ltd.", location: "Sri Lanka" },
    { name: "VIP Housing & Properties", location: "India" },
    { name: "Om Shakthy Agencies Pvt. Ltd.", location: "India" },
    { name: "CTC Solutions FZ LLC", location: "UAE" },
    { name: "Tekline Manager", location: "Spain" },
    { name: "Mouawad Group Pvt. Ltd.", location: "Switzerland" },
    { name: "Flock Carpets Ltd.", location: "UK" },
    { name: "Turquoise Pvt. Ltd.", location: "Maldives" },
    { name: "Global First Step LLC", location: "Oman" },
    { name: "Otara Cine", location: "Sri Lanka" },
    { name: "Success Media", location: "Sri Lanka" }
  ];

  const filteredClients = historicalClients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
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
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-light-orange">Our Partnerships</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-12 leading-[0.85] text-white">
              TRUST BUILT<br /><span className="text-primary-orange italic">THROUGH ACTION.</span>
            </h1>
            
            <div className="space-y-8 md:space-y-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-off-white/70 font-medium leading-relaxed max-w-2xl border-l-2 border-primary-orange pl-6 md:pl-10">
                “Over the years, we’ve worked across corporate communication, advertising, film, media and creative development.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED CLIENTS (LOGO GRID) */}
      <section className="py-24 px-6 border-y border-white/5 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Selected Clients</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {historicalClients.filter(c => c.logo).map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 aspect-video flex items-center justify-center p-8 group hover:bg-white/10 hover:border-primary-orange/30 will-change-transform overflow-hidden"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT EXPERIENCE LIST & SEARCH */}
      <section className="py-32 px-6 bg-aurora">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Client Experience</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">HISTORICAL ARCHIVE.</h3>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="text"
                placeholder="SEARCH ARCHIVE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-5 pl-12 text-xs font-black tracking-widest outline-none focus:border-primary-orange transition-colors uppercase placeholder:text-white/10 text-white backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {filteredClients.map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-b border-white/5 pb-4 flex justify-between items-end group"
              >
                <div className="text-lg font-black tracking-tight text-white/60 group-hover:text-primary-orange transition-colors uppercase">
                  {client.name}
                </div>
                <div className="text-[9px] font-black tracking-widest text-white/10 uppercase mb-1">
                  {client.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 md:py-48 px-6 bg-aurora border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase mb-6">What Our Clients Say</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">THE VERDICT.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                quote: "CrossMedia delivered an exceptional corporate film for Prima Ceylon PLC. Their creative approach, professionalism, and attention to detail brought our story to life beautifully, while ensuring the project was delivered seamlessly and to a high standard. A truly reliable production partner.",
                author: "Dharshana De Silva",
                position: "Prima Ceylon (Private) Limited / Asst. General Manager"
              },
              {
                quote: "What stood out about CrossMedia was their ability to go beyond simply telling a story. They have a rare depth in discovering the epiphany at the heart of a brand and translating it into powerful visual storytelling. Their work on the Sapphire Capital Group film captured this beautifully.",
                author: "Aman Ashraff",
                position: "Ashraff Associates / Chief Creative Officer"
              },
              {
                quote: "Mr. Arjun Upendra demonstrated exceptional skill and professionalism while working on the sets of Vishwaroopam alongside the Australian Vfx team. His ability to understand complex production requirements, collaborate across teams, and execute with precision was truly impressive.",
                author: "Padmashri Kamal Haasan",
                position: "Rajkamal Films International / Founder & Actor"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-white/10 p-12 space-y-10 group hover:border-primary-orange/30 bg-white/5 backdrop-blur-xl"
              >
                <div className="space-y-6">
                  <Quote className="text-primary-orange opacity-20" size={32} />
                  <p className="text-xl font-medium text-white/60 italic leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-black text-white/20 uppercase">Photo</div>
                  <div>
                    <div className="text-sm font-black tracking-widest text-white uppercase">{testimonial.author}</div>
                    <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

