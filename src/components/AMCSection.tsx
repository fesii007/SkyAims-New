import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Essential",
    tag: "Great for Apartments",
    color: "#1E90FF",
    gradient: "linear-gradient(135deg, #1E90FF, #0052c2)",
    features: [
      "2 Scheduled Visits per Year",
      "Electrical Safety Check",
      "Plumbing Inspection",
      "AC Filter Cleaning",
      "Priority Response: 4 Hours",
      "10% Discount on Extra Work",
    ],
  },
  {
    name: "Professional",
    tag: "Most Popular — Villas",
    color: "#00A86B",
    gradient: "linear-gradient(135deg, #00A86B, #005e3a)",
    popular: true,
    features: [
      "4 Scheduled Visits per Year",
      "Full Electrical & Plumbing Check",
      "AC Deep Service & Regas",
      "Paint Touch-ups Included",
      "Priority Response: 2 Hours",
      "20% Discount on Extra Work",
      "Detailed Service Report",
    ],
  },
  {
    name: "Enterprise",
    tag: "For Commercial Premises",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #4c1d95)",
    features: [
      "12 Scheduled Visits per Year",
      "All Trades Covered",
      "24/7 Emergency Response",
      "Complete Asset Register",
      "Priority Response: 30 Min",
      "30% Discount on All Work",
      "Dedicated Account Manager",
    ],
  },
];

export default function AMCSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-eyebrow">Annual Contracts</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Annual Maintenance Contracts
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Stop worrying about breakdowns. Our AMC plans keep your property in peak condition all year — with priority response when you need it most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {PLANS.map((plan, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden flex flex-col ${plan.popular ? "shadow-2xl scale-[1.02]" : "shadow-md"}`}>

              {plan.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/30">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="px-7 pt-8 pb-6" style={{ background: plan.gradient }}>
                <div className="text-white/60 text-xs font-semibold mb-1">{plan.tag}</div>
                <div className="font-poppins font-black text-white text-2xl">{plan.name}</div>
                <div className="mt-4 text-white/70 text-xs">Contact us for pricing</div>
              </div>

              {/* Features */}
              <div className="flex-1 bg-gray-50 px-7 py-6">
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 px-7 pb-7">
                <a
                  href={`https://wa.me/971559668007?text=Hi!%20I'm%20interested%20in%20the%20*${plan.name}%20AMC%20Plan*.%20Can%20you%20give%20me%20more%20details?`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 text-white"
                  style={{ background: plan.gradient }}>
                  Get {plan.name} Plan <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }} className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-3">Not sure which plan fits? We'll advise you for free.</p>
          <a href="https://wa.me/971559668007?text=Hi!%20I%20need%20help%20choosing%20the%20right%20AMC%20plan%20for%20my%20property." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1E90FF] font-semibold text-sm hover:underline">
            Chat with our team on WhatsApp <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
