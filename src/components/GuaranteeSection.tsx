import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, RotateCcw, Clock, BadgeCheck, Wrench, HeartHandshake } from "lucide-react";

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "Written Warranty on Every Job",
    desc: "We back all our work in writing. If anything fails within the warranty period, we return and fix it — at zero cost to you.",
    color: "#1E90FF",
  },
  {
    icon: RotateCcw,
    title: "We Fix It or You Don't Pay",
    desc: "We only close a project when you're 100% satisfied. If the result doesn't meet what was agreed, we make it right.",
    color: "#00A86B",
  },
  {
    icon: Clock,
    title: "On Time. Every Time.",
    desc: "We show up when we say we will. If we're late without valid reason, we compensate with a discount on the invoice.",
    color: "#1E90FF",
  },
  {
    icon: BadgeCheck,
    title: "Certified Materials Only",
    desc: "We never substitute cheaper materials after quoting. Every product used is branded, certified, and verified — you can ask to see it.",
    color: "#00A86B",
  },
  {
    icon: Wrench,
    title: "Licensed, Insured & Accountable",
    desc: "All our team members carry valid UAE trade licenses. You're protected by full liability insurance on every project.",
    color: "#1E90FF",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing, Always",
    desc: "The price in the quote is the price you pay. No surprise charges after the job — ever. We put everything in writing before we start.",
    color: "#00A86B",
  },
];

export default function GuaranteeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060e1e 0%, #0a1830 60%, #060e1e 100%)" }} ref={ref}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1E90FF 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute -right-40 top-1/3 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #00A86B 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-eyebrow" style={{ color: "#60b4ff" }}>Our Commitment</span>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mt-2 mb-4">
            Our Promises to You
          </h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            Every project comes with these guarantees. Not as fine print — as the foundation of how we do business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROMISES.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${p.color}18`, color: p.color }}>
                <p.icon size={22} />
              </div>
              <h3 className="font-poppins font-bold text-white text-base mb-3">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }} className="text-center mt-14">
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white font-semibold text-sm rounded-2xl hover:bg-[#1478e0] transition-all duration-300 shadow-[0_8px_32px_rgba(30,144,255,0.35)]">
            Claim Your Free Quote Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
