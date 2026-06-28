import { MapPin, Mail, Phone } from "lucide-react";

const WA_ICON = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FB_ICON = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IG_ICON = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "linear-gradient(to bottom, #060e1e, #030810)" }}>
      {/* Top CTA strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/40 text-sm mb-7 max-w-md mx-auto">
            Get a free quote today. We respond in minutes — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-sm rounded-2xl hover:bg-[#1ea855] transition-all shadow-lg">
              <WA_ICON /> WhatsApp — Free Quote
            </a>
            <a href="tel:+971559668007"
              className="flex items-center gap-2 px-8 py-4 glass text-white font-semibold text-sm rounded-2xl hover:bg-white/10 transition-all">
              <Phone size={16} /> +971 55 9668007
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="https://i.ibb.co/XDPbQFj/60b7ea63-47de-4497-8af3-a16e5d62a095.png"
              alt="SKYAIMS Technical Services" className="h-12 w-auto mb-5" />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Dubai's most trusted technical services company — precision-built for homes, offices, and luxury villas across the UAE since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/skyaimstechnicalservices", icon: <FB_ICON />, hover: "hover:bg-[#1877F2]" },
                { href: "https://www.instagram.com/skyaims_technical_services/", icon: <IG_ICON />, hover: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-400" },
                { href: "https://wa.me/971559668007", icon: <WA_ICON />, hover: "hover:bg-[#25D366]" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white ${s.hover} transition-all duration-200`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-2.5">
              {["Electrical Work", "Plumbing Services", "HVAC Systems", "Renovation", "Gypsum & False Ceilings", "Annual Maintenance (AMC)"].map(s => (
                <li key={s}>
                  <button onClick={() => scrollTo("#services")}
                    className="text-white/40 hover:text-white/80 text-xs transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-bold text-white text-sm mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our Process", id: "#process" },
                { label: "Why Us", id: "#whyus" },
                { label: "Client Reviews", id: "#reviews" },
                { label: "Meet the CEO", id: "#ceo" },
                { label: "FAQ", id: "#faq" } ,
                { label: "Portfolio (Behance)", ext: "https://www.behance.net/gallery/167170681/Recent-Projects" },
              ].map((l, i) => (
                <li key={i}>
                  {l.ext ? (
                    <a href={l.ext} target="_blank" rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/80 text-xs transition-colors">
                      {l.label} ↗
                    </a>
                  ) : (
                    <button onClick={() => l.id && scrollTo(l.id)}
                      className="text-white/40 hover:text-white/80 text-xs transition-colors text-left">
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-white text-sm mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#1E90FF] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-xs leading-relaxed">
                  Dubai – Warsan First – Spain Cluster<br />International City, Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#1E90FF] flex-shrink-0" />
                <a href="mailto:info@skyaims.net" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                  info@skyaims.net
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#1E90FF] flex-shrink-0" />
                <a href="tel:+971559668007" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                  +971 55 9668007
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#1E90FF] flex-shrink-0" />
                <a href="tel:+97143592964" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                  +971 43 592964
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            &copy; 2025 SKYAIMS TECHNICAL SERVICES LLC. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">Warsan First – International City, Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
