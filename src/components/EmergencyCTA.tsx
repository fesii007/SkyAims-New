import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Clock, Zap } from "lucide-react";

export default function EmergencyCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-0" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(135deg, #1E90FF 0%, #0a5fd8 50%, #003fa0 100%)" }}>

          {/* Decorative orbs */}
          <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-white opacity-5" />
          <div className="absolute right-40 bottom-0 w-40 h-40 rounded-full bg-white opacity-5" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, white 0%, transparent 70%)", filter: "blur(20px)" }} />

          <div className="relative px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center gap-8 justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Zap size={28} className="text-white fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">24/7 Emergency Service</span>
                </div>
                <h3 className="font-poppins font-black text-white text-2xl sm:text-3xl">Plumbing Leak? Power Failure?</h3>
                <p className="text-white/70 text-sm mt-1">We respond within 30 minutes across Dubai — day or night.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
              <a href="tel:+971559668007"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1E90FF] font-bold text-sm rounded-2xl hover:bg-gray-50 transition-all duration-200 shadow-lg whitespace-nowrap">
                <Phone size={16} className="fill-[#1E90FF]" />
                Call Now: +971 55 9668007
              </a>
              <a href="https://wa.me/971559668007?text=EMERGENCY%20-%20I%20need%20urgent%20help%20please!" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold text-sm rounded-2xl hover:bg-[#1ea855] transition-all duration-200 shadow-lg whitespace-nowrap">
                <Clock size={16} />
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
