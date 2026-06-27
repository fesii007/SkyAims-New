import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const OUR = [
  "24/7 Emergency Response — 30-min Dubai reach",
  "15+ Years UAE Construction Experience",
  "Dubai Municipality Licensed & DEWA Certified",
  "Transparent Pricing — written quote, no surprises",
  "Warranty on All Work Completed",
  "Latest Equipment & Certified Materials Only",
  "Dedicated Project Manager on Every Job",
  "Fully Insured — Zero Risk to You",
];

const THEIRS = [
  "Available weekdays only, no emergency cover",
  "Limited or undocumented experience",
  "Unlicensed workers on sensitive tasks",
  "Verbal estimates — bills always higher",
  "No warranty — problems become your cost",
  "Cheap materials that fail within months",
  "No accountability after handover",
  "No insurance — your property at risk",
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="whyus" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            A Different Standard of Service
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Not all contractors are equal. Here is how SKYAIMS compares to the typical alternative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {/* SKYAIMS */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
            className="rounded-3xl overflow-hidden border-2 border-[#1E90FF]/20 shadow-[0_8px_40px_rgba(30,144,255,0.08)]">
            <div className="px-6 py-4 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #1E90FF, #0a5fd8)" }}>
              <img src="https://i.ibb.co/XDPbQFj/60b7ea63-47de-4497-8af3-a16e5d62a095.png"
                alt="SKYAIMS" className="h-8 w-auto" />
              <div>
                <div className="font-poppins font-black text-white text-sm">SKYAIMS Technical Services</div>
                <div className="text-white/70 text-xs">Your Premium Choice</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white">
              <ul className="space-y-3">
                {OUR.map((f, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#00A86B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Others */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-gray-200">
            <div className="px-6 py-4 flex items-center gap-3 bg-gray-100">
              <div className="w-8 h-8 rounded-xl bg-gray-300 flex items-center justify-center">
                <XCircle size={16} className="text-gray-500" />
              </div>
              <div>
                <div className="font-poppins font-bold text-gray-500 text-sm">Other Companies</div>
                <div className="text-gray-400 text-xs">The Typical Experience</div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <ul className="space-y-3">
                {THEIRS.map((f, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }} className="text-center mt-12">
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white font-bold text-sm rounded-2xl hover:bg-[#0d7de6] transition-all duration-300 shadow-[0_8px_24px_rgba(30,144,255,0.25)]">
            Experience the SKYAIMS Difference
          </a>
        </motion.div>
      </div>
    </section>
  );
}
