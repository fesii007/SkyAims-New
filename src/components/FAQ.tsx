import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How quickly can you respond to a service request?",
    a: "For standard requests, we typically schedule within 24-48 hours. For emergencies — leaks, power failures, fire safety — our team responds within 30 minutes across Dubai, 24 hours a day.",
  },
  {
    q: "Are your technicians licensed and certified?",
    a: "Yes. All our technicians are Dubai Municipality-approved, DEWA-certified for electrical work, and Civil Defense-certified for fire safety. Every specialist carries valid UAE credentials for their trade.",
  },
  {
    q: "Do you offer quotations before starting work?",
    a: "Absolutely — we never begin work without a fully itemized, written quotation. There are no hidden charges; the price we quote is the price you pay.",
  },
  {
    q: "What areas of Dubai do you cover?",
    a: "We cover all of Dubai including Dubai Marina, Jumeirah, Business Bay, Downtown, DIFC, Mirdif, Al Barsha, Deira, Ras Al Khor, Silicon Oasis, Palm Jumeirah, and surrounding areas.",
  },
  {
    q: "Do you offer annual maintenance contracts?",
    a: "Yes. Our Annual Maintenance Contracts (AMC) cover electrical, plumbing, HVAC, and general maintenance — giving you worry-free property management at a predictable cost.",
  },
  {
    q: "How do I know the quality of materials used?",
    a: "We use only branded, certified materials sourced from approved UAE suppliers. You'll receive product specifications with every quotation so you know exactly what goes into your project.",
  },
  {
    q: "What happens if something isn't right after the job?",
    a: "We stand behind every project with a service warranty. If anything isn't right, call us — we come back and fix it at no charge. Your satisfaction is the only acceptable outcome.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? "border-[#1E90FF]/40 bg-blue-50/50 shadow-md" : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
      }`}>
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}>
        <span className="font-semibold text-gray-900 text-sm leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${open ? "bg-[#1E90FF] text-white" : "bg-gray-100 text-gray-500"}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}>
            <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {inView && (
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }} className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">Still have a question? We reply within minutes.</p>
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold text-sm rounded-2xl hover:bg-[#1ea855] transition-all duration-300 shadow-[0_8px_24px_rgba(37,211,102,0.25)]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
