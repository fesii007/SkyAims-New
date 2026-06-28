import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageSquare, Search, FileText, HardHat, Award } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    num: 1,
    title: "You Reach Out",
    desc: "Call, WhatsApp, or fill a form. We respond within minutes — any time of day.",
  },
  {
    icon: MessageSquare,
    num: 2,
    title: "We Discuss Your Needs",
    desc: "Quick call to understand your project — what, where, when, and any requirements you have.",
  },
  {
    icon: Search,
    num: 3,
    title: "Free Site Visit",
    desc: "We send a certified specialist to inspect the job and assess exactly what's needed.",
  },
  {
    icon: FileText,
    num: 4,
    title: "Clear Quotation",
    desc: "You receive a detailed quote — no hidden fees, no surprises. You approve before anything starts.",
  },
  {
    icon: HardHat,
    num: 5,
    title: "Work Begins",
    desc: "Our certified crew arrives on schedule and gets to work — cleanly, professionally, efficiently.",
  },
  {
    icon: Award,
    num: 6,
    title: "Handover & Warranty",
    desc: "We walk you through the completed work, hand over documentation, and back everything with warranty.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Simple. Transparent. Professional.
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Every project follows the same trusted process — so you know exactly what to expect from day one.
          </p>
        </motion.div>

        {/* ─── DESKTOP: horizontal timeline ─── */}
        <div className="hidden md:block">
          {/* Row 1: steps 1–5 */}
          <div className="relative flex items-start gap-0">
            {/* connector line behind circles */}
            <div className="absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-gradient-to-r from-[#1E90FF] via-[#00A86B] to-[#1E90FF] opacity-30 pointer-events-none" />

            {STEPS.slice(0, 5).map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 flex flex-col items-center text-center px-3"
                data-testid={`process-step-${i}`}>

                {/* Circle */}
                <div className="relative w-16 h-16 mb-5 z-10">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#1E90FF]/20" />
                  {/* Inner circle */}
                  <div className="absolute inset-[6px] rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1E90FF, #0052c2)" }}>
                    <step.icon size={18} className="text-white" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#1E90FF] flex items-center justify-center">
                    <span className="text-white text-[9px] font-black">{step.num}</span>
                  </div>
                </div>

                <h3 className="font-poppins font-bold text-gray-900 text-sm mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: step 6 — alone on left */}
          {(() => {
            const LastIcon = STEPS[5].icon;
            return (
              <div className="flex items-start mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="w-1/5 flex flex-col items-center text-center px-3">

                  <div className="relative w-16 h-16 mb-5 z-10">
                    <div className="absolute inset-0 rounded-full border-2 border-[#00A86B]/30" />
                    <div className="absolute inset-[6px] rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #00A86B, #006640)" }}>
                      <LastIcon size={18} className="text-white" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#00A86B] flex items-center justify-center">
                      <span className="text-white text-[9px] font-black">6</span>
                    </div>
                  </div>

                  <h3 className="font-poppins font-bold text-gray-900 text-sm mb-2">{STEPS[5].title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{STEPS[5].desc}</p>
                </motion.div>
              </div>
            );
          })()}
        </div>

        {/* ─── MOBILE: vertical steps ─── */}
        <div className="md:hidden space-y-4">
          {STEPS.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">

              {/* Circle */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border border-[#1E90FF]/20" />
                <div className="absolute inset-[5px] rounded-full flex items-center justify-center"
                  style={{ background: i < 5 ? "linear-gradient(135deg, #1E90FF, #0052c2)" : "linear-gradient(135deg, #00A86B, #006640)" }}>
                  <step.icon size={15} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: i < 5 ? "#1E90FF" : "#00A86B" }}>
                  <span className="text-white text-[8px] font-black">{step.num}</span>
                </div>
              </div>

              <div>
                <h3 className="font-poppins font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }} className="text-center mt-14">
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white font-semibold text-sm rounded-2xl hover:bg-[#1478e0] transition-all duration-300 shadow-[0_8px_32px_rgba(30,144,255,0.3)]">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
