import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, CheckCircle, Target, Eye } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "Excellence in Service",
    desc: "15 years of outstanding service in Dubai's construction industry",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "50 certified professionals dedicated to quality service",
  },
  {
    icon: CheckCircle,
    title: "Project Success",
    desc: "500 successfully completed projects across the UAE",
  },
];

const STATS = [
  { value: "500+", label: "Projects", sub: "Completed" },
  { value: "15+", label: "Years of", sub: "Excellence" },
  { value: "100%", label: "Client", sub: "Satisfaction" },
  { value: "50+", label: "Expert", sub: "Professionals" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#1E90FF] uppercase tracking-widest">Who We Are</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            SKYAIMS Technical Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            For over 15 years, we have been the go-to technical services partner for homes, offices, and commercial properties across Dubai and the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-[#1E90FF] to-[#0066CC] rounded-2xl p-6 text-center text-white"
              data-testid={`about-stat-${i}`}
            >
              <div className="font-poppins font-black text-3xl md:text-4xl">{s.value}</div>
              <div className="text-blue-100 text-sm mt-1">{s.label}</div>
              <div className="text-blue-200 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F7FBFF] rounded-2xl p-8 border border-blue-50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1E90FF] flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional construction and technical services that exceed client expectations, while maintaining the highest standards of quality, safety, and innovation in Dubai's dynamic market.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F7FBFF] rounded-2xl p-8 border border-blue-50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A86B] flex items-center justify-center">
                <Eye size={20} className="text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technical services provider in the UAE, recognized for excellence, reliability, and innovative solutions in construction and renovation services.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`about-highlight-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <h.icon size={22} className="text-[#1E90FF]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{h.title}</h4>
                <p className="text-sm text-gray-500">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/971559668007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fba58] transition-all duration-200 shadow-md hover:shadow-lg"
            data-testid="about-whatsapp-btn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
