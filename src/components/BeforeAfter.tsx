import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

const PAIRS = [
  {
    label: "Electrical Fit-Out",
    icon: "⚡",
    before: "https://i.ibb.co/8gBwG1ZR/Whats-App-Image-2026-06-27-at-1-37-32-PM.jpg",
    after:  "https://i.ibb.co/4g2V1Gs4/Whats-App-Image-2026-06-27-at-1-37-32-PM-1.jpg",
  },
  {
    label: "Renovation Work",
    icon: "🏗️",
    before: "https://i.ibb.co/h1mwYQYm/612459233-1465694238890361-2157368423348837092-n.jpg",
    after:  "https://i.ibb.co/20xHqfJ6/614472959-1465694178890367-4254646435849517742-n.jpg",
  },
  {
    label: "Finishing & Paint",
    icon: "🎨",
    before: "https://i.ibb.co/tpbwGxB2/614556540-1465694265557025-1364689764606626464-n.jpg",
    after:  "https://i.ibb.co/TDhjCRTT/614161952-1465694318890353-232285261793469963-n.jpg",
  },
];

function MiniSlider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(50);
  const lineRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(3, Math.min(97, raw));
    posRef.current = clamped;
    if (lineRef.current) lineRef.current.style.left = `calc(${clamped}% - 1px)`;
    if (clipRef.current) clipRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId) && e.pointerType === "mouse") return;
    if (e.buttons === 0 && e.pointerType === "mouse") return;
    updatePos(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden ba-container cursor-col-resize select-none"
      style={{ aspectRatio: "4/3" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      {/* After (full) */}
      <img src={after} alt="After" draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      {/* Before (clipped) */}
      <div ref={clipRef} className="absolute inset-0 pointer-events-none"
        style={{ clipPath: "inset(0 50% 0 0)" }}>
        <img src={before} alt="Before" draggable={false}
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black tracking-widest pointer-events-none z-10"
        style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}>BEFORE</div>
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black tracking-widest pointer-events-none z-10"
        style={{ background: "rgba(30,144,255,0.8)", backdropFilter: "blur(8px)" }}>AFTER</div>

      {/* Divider */}
      <div ref={lineRef} className="ba-handle-line z-20 pointer-events-none" style={{ left: "calc(50% - 1px)" }}>
        <div className="ba-handle-btn">
          <ArrowLeftRight size={14} className="text-[#1E90FF]" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="font-poppins font-black section-title text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
            See the Difference Yourself
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Drag the line left or right to reveal each before and after transformation.
          </p>
        </motion.div>

        {/* 3 sliders side by side — always visible, no tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PAIRS.map((pair, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-3">
              <MiniSlider before={pair.before} after={pair.after} />
              <div className="flex items-center gap-2 px-1">
                <span className="text-lg">{pair.icon}</span>
                <span className="font-semibold text-gray-800 text-sm">{pair.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }} className="text-center mt-12">
          <a href="https://www.behance.net/gallery/167170681/Recent-Projects" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#060e1e] text-white font-semibold text-sm rounded-full hover:bg-[#0d1e3a] transition-all duration-300 shadow-lg">
            🖼️ View Full Project Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
