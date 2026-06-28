import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { text: "Exceptional service and attention to detail. SkyAims transformed our villa completely!", name: "Sarah M.", role: "Villa Owner, JBR" },
  { text: "Professional team, on time, and outstanding results. Couldn't ask for better.", name: "Ahmed K.", role: "Business Bay" },
  { text: "Their construction expertise is unmatched. The quality exceeded all expectations.", name: "Mohammed R.", role: "Property Developer" },
  { text: "Very reliable and professional. The team was courteous, tidy, and skilled.", name: "Lisa P.", role: "Jumeirah" },
  { text: "Incredible office renovation. They turned our old space into something premium.", name: "John D.", role: "DIFC Business" },
  { text: "The electrical work was flawless. Detailed, safe, and done right the first time.", name: "Fatima H.", role: "Al Barsha" },
  { text: "Perfect HVAC installation. Quiet, efficient, and exactly what we needed.", name: "Robert T.", role: "Mirdif" },
  { text: "Excellent plumbing — fast response, professional work, no mess left behind.", name: "Ali S.", role: "Silicon Oasis" },
  { text: "The false ceiling turned out stunning. Very neat and precise. Highly recommend.", name: "Sophia L.", role: "Palm Jumeirah" },
  { text: "Top-notch masonry work. The quality is evident — built to last.", name: "Hassan M.", role: "Deira" },
  { text: "Great painting service. Fresh, clean, professional — looks brand new.", name: "Emma W.", role: "Business Bay" },
  { text: "Our villa renovation was handled perfectly. Amazing project management.", name: "Khalid A.", role: "Jumeirah Village" },
  { text: "The maintenance team is always responsive and professional. Great AMC.", name: "James B.", role: "Dubai Marina" },
  { text: "Bathroom remodel came out better than we imagined. Truly outstanding.", name: "Aisha N.", role: "Mirdif" },
  { text: "Creative lighting design and immaculate installation. Really transformed the space.", name: "David M.", role: "Downtown Dubai" },
  { text: "Carpentry work is exceptional. Skilled craftsmen with an eye for detail.", name: "Zainab R.", role: "Arabian Ranches" },
];

function ReviewCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mx-3 group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}>
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F8FAFF] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_,i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
            <span className="font-poppins font-bold text-gray-900 text-lg ml-1">5.0</span>
            <span className="text-gray-400 text-sm">/ 500+ verified reviews</span>
          </div>
          <p className="text-gray-400 text-sm">Real clients. Real results. Across Dubai and the UAE.</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F8FAFF, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F8FAFF, transparent)" }} />
        <div className="flex reviews-track pb-2" style={{ width: "max-content" }}>
          {doubled.map((r, i) => <ReviewCard key={i} text={r.text} name={r.name} role={r.role} />)}
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white font-semibold text-sm rounded-2xl hover:bg-[#0d7de6] transition-all shadow-[0_8px_24px_rgba(30,144,255,0.25)]">
          Join 500+ Satisfied Clients
        </a>
      </div>
    </section>
  );
}
