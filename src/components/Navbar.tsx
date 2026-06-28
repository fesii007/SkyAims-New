import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "https://www.behance.net/gallery/167170681/Recent-Projects", external: true },
  { label: "Why Us", href: "#whyus" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      setAtTop(window.scrollY < 5);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string, external?: boolean) => {
    setMobileOpen(false);
    if (external) { window.open(href, "_blank"); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_32px_rgba(0,0,0,0.08)]"
        : atTop
          ? "bg-transparent"
          : "bg-[#060e1e]/80 backdrop-blur-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <img src="https://i.ibb.co/XDPbQFj/60b7ea63-47de-4497-8af3-a16e5d62a095.png"
              alt="SKYAIMS Technical Services" className="h-9 md:h-10 w-auto" />
            <span className={`hidden sm:block font-poppins font-black text-xs leading-tight transition-colors duration-300 ${scrolled ? "text-[#1E90FF]" : "text-white"}`}>
              SKYAIMS
              <span className={`block font-medium text-[10px] tracking-widest uppercase transition-colors ${scrolled ? "text-gray-400" : "text-white/50"}`}>
                Technical Services
              </span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button key={link.label} onClick={() => handleNav(link.href, link.external)}
                className={`px-3 py-2 text-xs font-semibold rounded-xl tracking-wide transition-all duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:text-[#1E90FF] hover:bg-blue-50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}>
                {link.label}
              </button>
            ))}
            <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-2xl hover:bg-[#1ea855] transition-all duration-200 shadow-sm whitespace-nowrap">
              Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <button key={link.label} onClick={() => handleNav(link.href, link.external)}
                className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#1E90FF] hover:bg-blue-50 rounded-xl transition-colors">
                {link.label}
              </button>
            ))}
            <a href="https://wa.me/971559668007" target="_blank" rel="noopener noreferrer"
              className="block text-center mt-3 px-4 py-3.5 bg-[#25D366] text-white text-sm font-bold rounded-2xl hover:bg-[#1ea855] transition-colors">
              Get Free Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
