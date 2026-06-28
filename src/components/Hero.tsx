import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

const PARTICLES = [
  { size: 4, x: "8%",  y: "20%", delay: 0,   dur: 7  },
  { size: 3, x: "18%", y: "70%", delay: 1.5, dur: 9  },
  { size: 5, x: "25%", y: "45%", delay: 3,   dur: 8  },
  { size: 3, x: "88%", y: "15%", delay: 0.8, dur: 11 },
  { size: 4, x: "92%", y: "55%", delay: 2.2, dur: 7  },
  { size: 2, x: "75%", y: "80%", delay: 4,   dur: 10 },
];

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } },
};

function HeroImageCard() {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[480px] mx-auto">
      <div className="absolute -inset-4 rounded-3xl opacity-40 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(30,144,255,0.6), rgba(0,168,107,0.4))", filter: "blur(28px)" }} />
      <div className="absolute -inset-[2px] rounded-3xl animate-spin-slow pointer-events-none"
        style={{ background: "conic-gradient(from 0deg, #1E90FF 0%, transparent 30%, #00A86B 60%, transparent 80%, #1E90FF 100%)", opacity: 0.6 }} />
      <div className="relative rounded-3xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <img
          src="https://i.ibb.co/gkby3f8/4.png"
          alt="SKYAIMS Technical Services — Dubai Construction Work"
          className="w-full h-auto object-cover animate-float-y"
          style={{ maxHeight: 380 }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
          style={{ background: "linear-gradient(to top, rgba(6,14,30,0.92), transparent)" }}>
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/XDPbQFj/60b7ea63-47de-4497-8af3-a16e5d62a095.png"
              alt="SKYAIMS" className="h-7 w-auto" />
            <div>
              <div className="text-white font-semibold text-xs">Dubai's Premier</div>
              <div className="text-white/50 text-xs">Technical Services Partner</div>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_,i) => <Star key={i} size={9} className="fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center shadow-xl"
        style={{ background: "linear-gradient(135deg, #1E90FF, #0052c2)" }}>
        <div className="font-poppins font-black text-white text-base sm:text-lg leading-none">15+</div>
        <div className="text-white/70 text-[8px] sm:text-[9px] font-semibold text-center leading-tight">Years<br/>UAE</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#060e1e]" />

      {/* Mesh orbs */}
      <div className="mesh-orb-1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(30,144,255,0.18) 0%, rgba(30,144,255,0.06) 45%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="mesh-orb-2 absolute -bottom-60 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,168,107,0.15) 0%, rgba(0,168,107,0.04) 50%, transparent 70%)", filter: "blur(80px)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 animate-grid-drift opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div key={i} className="absolute rounded-full bg-[#1E90FF] animate-float-particle pointer-events-none"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, opacity: 0.45 }} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT — text content */}
          <motion.div variants={stagger.container} initial="hidden" animate="show">
            <motion.div variants={stagger.item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass"
              style={{ border: "1px solid rgba(30,144,255,0.25)" }}>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_,i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
              </span>
              <span className="text-white/70 text-xs font-medium">Rated 5★ across 500+ Dubai projects</span>
            </motion.div>

            <motion.h1 variants={stagger.item} className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-5">
              Dubai's Most
              <br />
              <span className="text-shimmer">Trusted Technical</span>
              <br />
              Services Partner
            </motion.h1>

            <motion.p variants={stagger.item} className="text-white/50 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
              Electrical · Plumbing · HVAC · Renovation · Landscape — precision-built for homes, offices, and luxury villas across the UAE.
            </motion.p>

            <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1E90FF] text-white font-semibold text-sm rounded-2xl hover:bg-[#1478e0] transition-all duration-300 shadow-[0_8px_32px_rgba(30,144,255,0.35)]">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Free Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a href="https://www.behance.net/gallery/167170681/Recent-Projects" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 glass text-white font-semibold text-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
                View Portfolio <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Mobile-only image — between buttons and stats */}
            <motion.div variants={stagger.item} className="lg:hidden mb-8">
              <HeroImageCard />
            </motion.div>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { value: "500+", label: "Projects Done" },
                { value: "15+",  label: "Years in UAE"  },
                { value: "100%", label: "Satisfaction"  },
                { value: "50+",  label: "Specialists"   },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-poppins font-black text-2xl sm:text-3xl text-white">{s.value}</div>
                  <div className="text-white/40 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — desktop only image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="hidden lg:flex w-full items-center justify-center"
          >
            <HeroImageCard />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFF] to-transparent pointer-events-none" />
    </section>
  );
}
