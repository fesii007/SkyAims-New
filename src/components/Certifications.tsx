import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

const CERTS = [
  { icon: ShieldCheck, title: "Dubai Municipality", sub: "Licensed Contractor", color: "#1E90FF" },
  { icon: Award, title: "Civil Defense", sub: "Fire Safety Certified", color: "#00A86B" },
  { icon: BadgeCheck, title: "DEWA Approved", sub: "Electrical Works", color: "#1E90FF" },
  { icon: ShieldCheck, title: "ISO Compliance", sub: "Quality Standards", color: "#00A86B" },
  { icon: Award, title: "15+ Years", sub: "Dubai Market", color: "#1E90FF" },
  { icon: BadgeCheck, title: "Fully Insured", sub: "All Projects", color: "#00A86B" },
];

const SERVICE_AREAS = [
  "Dubai Marina", "Jumeirah", "Business Bay", "Downtown Dubai",
  "DIFC", "Mirdif", "Al Barsha", "Deira",
  "Ras Al Khor", "Nad Al Sheba", "Silicon Oasis", "Palm Jumeirah",
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Licensed, Certified &amp; Trusted
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Fully compliant with Dubai Municipality, Civil Defense, and DEWA requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {CERTS.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="premium-card flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${c.color}12`, color: c.color }}>
                <c.icon size={22} />
              </div>
              <div className="font-poppins font-bold text-gray-900 text-xs leading-tight mb-1">{c.title}</div>
              <div className="text-gray-400 text-xs">{c.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-8">
          <span className="section-eyebrow">Coverage</span>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mt-2 mb-3">
            We Serve All of Dubai
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            From the marina to the desert — our team reaches every corner of Dubai.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {SERVICE_AREAS.map((area, i) => (
            <motion.span key={i}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.04, type: "spring" }}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 border border-gray-200 bg-white hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors duration-200">
              📍 {area}
            </motion.span>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }} className="text-center mt-12">
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white font-semibold text-sm rounded-2xl hover:bg-[#0d7de6] transition-all duration-300 shadow-[0_8px_24px_rgba(30,144,255,0.25)]">
            Check if We Cover Your Area
          </a>
        </motion.div>
      </div>
    </section>
  );
}
