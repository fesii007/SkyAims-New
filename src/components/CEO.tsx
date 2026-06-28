import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEO() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ceo" className="py-20 md:py-32 overflow-hidden" ref={ref}
      style={{ background: "linear-gradient(135deg, #060e1e 0%, #0a1830 50%, #071520 100%)" }}>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1E90FF 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #00A86B 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-eyebrow" style={{ color: "#60b4ff" }}>Leadership</span>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mt-2">Meet Our Founder</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Photo + Identity */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            className="flex flex-col items-center lg:items-start">

            {/* Photo frame */}
            <div className="relative mb-8">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-3xl opacity-40"
                style={{ background: "linear-gradient(135deg, #1E90FF, #00A86B)", filter: "blur(20px)" }} />

              {/* Rotating accent ring */}
              <div className="absolute -inset-1 rounded-3xl animate-spin-slow opacity-60"
                style={{ background: "conic-gradient(from 0deg, #1E90FF, transparent, #00A86B, transparent, #1E90FF)", padding: "2px" }}>
                <div className="w-full h-full rounded-3xl bg-[#060e1e]" />
              </div>

              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden w-64 h-72 sm:w-72 sm:h-80">
                <img
                  src="https://i.ibb.co/KcKFR2XR/Nav.jpg"
                  alt="Muhammad Naveed, CEO of SKYAIMS Technical Services"
                  className="w-full h-full object-cover object-top animate-float-y"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: "linear-gradient(to top, rgba(6,14,30,0.85), transparent)" }} />
                {/* Name overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-poppins font-black text-white text-xl">Muhammad Naveed</div>
                  <div className="text-blue-300 text-xs font-medium mt-0.5">Founder & CEO</div>
                </div>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: "🏆", label: "15+ Years", sub: "UAE Market" },
                { icon: "🏗️", label: "500+", sub: "Projects" },
                { icon: "⭐", label: "5-Star", sub: "Rated" },
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                  className="glass rounded-xl px-4 py-3 text-center min-w-[80px]">
                  <div className="text-xl mb-1">{b.icon}</div>
                  <div className="font-poppins font-bold text-white text-sm">{b.label}</div>
                  <div className="text-white/40 text-xs">{b.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Bio + Quote + CTAs */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }}>

            {/* Quote block */}
            <div className="relative mb-8">
              <div className="absolute -top-3 -left-2 opacity-30">
                <Quote size={48} className="text-[#1E90FF] fill-[#1E90FF]" />
              </div>
              <blockquote className="pl-6 text-white/80 text-lg sm:text-xl leading-relaxed font-light italic border-l-2 border-[#1E90FF]/40">
                Every project we take is a commitment — not just a job to be done. Dubai deserves world-class work, and that is exactly what SKYAIMS delivers.
              </blockquote>
            </div>

            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              Muhammad Naveed founded SKYAIMS Technical Services with one goal: to bring uncompromising quality to Dubai's construction landscape. From small repairs to full-scale villa renovations, every job receives the same dedication and precision that built SKYAIMS' reputation.
            </p>
            <p className="text-white/50 leading-relaxed mb-10 text-sm">
              With over 15 years navigating Dubai's demanding standards and regulations, Muhammad leads a team of 50+ certified specialists who share his relentless commitment to quality, transparency, and getting it right the first time.
            </p>

            {/* WhatsApp CTA only */}
            <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-semibold text-sm rounded-2xl hover:bg-[#1ea855] transition-all duration-300 shadow-[0_8px_32px_rgba(37,211,102,0.3)]"
              data-testid="ceo-whatsapp">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Naveed on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
