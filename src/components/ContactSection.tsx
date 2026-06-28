import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Phone, Briefcase, MessageSquare, Send, MapPin, Clock, Mail } from "lucide-react";

const SERVICES = [
  "Electrical Works",
  "Plumbing",
  "AC / HVAC",
  "Renovation / Fit-Out",
  "Landscaping",
  "Painting & Finishing",
  "Flooring",
  "CCTV / Security",
  "Annual Maintenance (AMC)",
  "Other / Not Sure",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi SKYAIMS! I'd like to request a quote.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service || "Not specified"}`,
      `*Message:* ${form.message || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/971559668007?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const inputBase = "w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/15 transition-all duration-200 bg-white placeholder-gray-400";

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Fill in the form and we'll reply on WhatsApp instantly — or just tap to message us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* LEFT — Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 space-y-4">

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 ml-1">Your Name</label>
                <div className="relative">
                  <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="e.g. Ahmed Al Mansouri"
                    required
                    className={`${inputBase} pl-11`} />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 ml-1">Phone / WhatsApp</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    required
                    className={`${inputBase} pl-11`} />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 ml-1">Service Required</label>
                <div className="relative">
                  <Briefcase size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className={`${inputBase} pl-11 appearance-none cursor-pointer`}>
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 8L1 3h10z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 ml-1">Tell Us More <span className="font-normal text-gray-400">(optional)</span></label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your project, location, timeline…"
                    rows={4}
                    className={`${inputBase} pl-11 resize-none`} />
                </div>
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ea855] transition-all duration-200 shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)]">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
                <Send size={14} />
              </button>

              <p className="text-center text-gray-400 text-xs">
                Tapping the button opens WhatsApp with your message pre-filled. We reply within minutes.
              </p>
            </form>

            {/* Quick contact info */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: Phone, label: "Call / WhatsApp", value: "+971 55 9668007", href: "tel:+971559668007", color: "#1E90FF" },
                { icon: Mail,  label: "Email",            value: "info@skyaims.net",  href: "mailto:info@skyaims.net", color: "#00A86B" },
                { icon: Clock, label: "Available",        value: "24/7 Support",      href: "https://wa.me/971559668007", color: "#7C3AED" },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all text-center group">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${c.color}18`, color: c.color }}>
                    <c.icon size={15} />
                  </div>
                  <span className="text-gray-400 text-[10px] font-semibold">{c.label}</span>
                  <span className="text-gray-700 text-xs font-bold leading-tight">{c.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Map + address */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-5">

            {/* Address card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0052c2)" }}>
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <div className="font-poppins font-bold text-gray-900 text-sm">SKYAIMS Technical Services</div>
                <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                  Dubai – Warsan First – Spain Cluster,<br />
                  International City, Dubai
                </div>
                <a
                  href="https://www.google.com/maps?q=SkyAims+Technical+Services&ftid=0x3e5f67fb2ca54891:0x47490b9a5a515f70"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-[#1E90FF] text-xs font-semibold hover:underline">
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100" style={{ height: 380 }}>
              <iframe
                title="SKYAIMS Technical Services Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.172763121237!2d55.39458497413446!3d25.163643733061203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67fb2ca54891%3A0x47490b9a5a515f70!2sSkyAims%20Technical%20Services!5e0!3m2!1sen!2s!4v1782632193761!5m2!1sen!2s"
              />
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #00A86B, #005e3a)" }}>
                  <Clock size={15} className="text-white" />
                </div>
                <div className="font-poppins font-bold text-gray-900 text-sm">Working Hours</div>
              </div>
              <div className="space-y-2">
                {[
                  { days: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
                  { days: "Sunday",            time: "9:00 AM – 5:00 PM" },
                  { days: "Emergency Service", time: "24 / 7 — Always Available" },
                ].map((h, i) => (
                  <div key={i} className={`flex items-center justify-between text-xs py-2 ${i < 2 ? "border-b border-gray-100" : ""}`}>
                    <span className="text-gray-500 font-medium">{h.days}</span>
                    <span className={`font-bold ${i === 2 ? "text-[#00A86B]" : "text-gray-800"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
