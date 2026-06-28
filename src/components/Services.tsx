import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, CheckCircle, XCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SERVICES, CATEGORIES, type Service } from "@/data/services";

const DEFAULT_SHOW = 6;
type IconName = keyof typeof LucideIcons;

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function WaIcon({ size = 5 }: { size?: number }) {
  return <svg className={`w-${size} h-${size}`} viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>;
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const waMsg = encodeURIComponent(`Hi! I need a quote for your *${service.name}* service. Can you help?`);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        <div className="relative h-36 overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <X size={15} />
          </button>
          <div className="absolute bottom-4 left-5">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">{service.category}</span>
            <h3 className="font-poppins font-black text-white text-xl leading-tight">{service.name}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
              <h4 className="font-semibold text-green-800 text-sm mb-3 flex items-center gap-2">
                <CheckCircle size={14} className="text-green-600" /> What We Do Right
              </h4>
              <ul className="space-y-2">
                {service.dos.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-green-700">
                    <CheckCircle size={12} className="text-green-500 mt-0.5 flex-shrink-0" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
              <h4 className="font-semibold text-red-800 text-sm mb-3 flex items-center gap-2">
                <XCircle size={14} className="text-red-500" /> What Others Get Wrong
              </h4>
              <ul className="space-y-2">
                {service.donts.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-red-700">
                    <XCircle size={12} className="text-red-400 mt-0.5 flex-shrink-0" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <h4 className="font-semibold text-[#1E90FF] text-sm mb-2">The Result You Get</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{service.result}</p>
            </div>
          </div>
          <a href={`https://wa.me/971559668007?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="mt-5 w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-sm rounded-2xl hover:bg-[#1ea855] transition-colors shadow-md">
            <WaIcon /> Get Quote for {service.name}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, onClick, index }: { service: Service; onClick: () => void; index: number }) {
  const Icon = (LucideIcons[service.icon as IconName] as React.ComponentType<{ size?: number; className?: string }>) || LucideIcons.Wrench;
  return (
    <motion.div layout
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="premium-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group"
      onClick={onClick}>
      <div className="relative overflow-hidden" style={{ height: 140 }}>
        <img src={service.image} alt={service.name} draggable={false}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider"
          style={{ background: "rgba(30,144,255,0.8)", backdropFilter: "blur(6px)" }}>
          {service.category}
        </div>
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
          <ArrowRight size={13} className="text-[#1E90FF]" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Icon size={14} className="text-[#1E90FF]" />
          </div>
          <h3 className="font-poppins font-bold text-gray-900 text-sm leading-tight">{service.name}</h3>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{service.description}</p>
        <div className="mt-3 flex items-center text-[#1E90FF] text-xs font-semibold gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={11} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const allFiltered = activeCategory === "All" ? SERVICES : SERVICES.filter((s) => s.category === activeCategory);
  const isAll = activeCategory === "All";
  const displayed = isAll && !expanded ? allFiltered.slice(0, DEFAULT_SHOW) : allFiltered;
  const hasMore = isAll && allFiltered.length > DEFAULT_SHOW;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setExpanded(false);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            From a single fix to a complete villa renovation — every job done with the same precision and care.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="overflow-x-auto scrollbar-hide pb-2 mb-10">
          <div className="flex gap-2 w-max mx-auto sm:flex-wrap sm:justify-center sm:w-auto">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1E90FF] text-white shadow-[0_4px_16px_rgba(30,144,255,0.3)]"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-[#1E90FF]/40 hover:text-[#1E90FF]"
                }`}>
                {cat} {cat !== "All" && <span className="opacity-60 ml-0.5">({SERVICES.filter(s=>s.category===cat).length})</span>}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory + String(expanded)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {displayed.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} onClick={() => setSelectedService(service)} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more / less — only in All */}
        {hasMore && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#1E90FF] font-bold text-sm rounded-2xl border-2 border-[#1E90FF]/30 hover:border-[#1E90FF] hover:bg-blue-50 transition-all duration-200">
              {expanded ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> Show {allFiltered.length - DEFAULT_SHOW} More Services</>}
            </button>
          </motion.div>
        )}

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://www.behance.net/gallery/167170681/Recent-Projects" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#060e1e] text-white font-semibold text-sm rounded-2xl hover:bg-[#0d1e3a] transition-all shadow-lg">
            View Portfolio <ArrowRight size={14} />
          </a>
          <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold text-sm rounded-2xl hover:bg-[#1ea855] transition-all shadow-md">
            <WaIcon size={4} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </section>
  );
}
