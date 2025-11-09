import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ITEMS = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Document editing with presence, comments, and CRDT sync.',
    tag: 'Full‑stack',
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive 3D viewer with dynamic textures and pricing.',
    tag: 'Frontend',
  },
  {
    title: 'Analytics Pipeline',
    desc: 'Event ingestion service, warehouse modeling, and dashboards.',
    tag: 'Data',
  },
  {
    title: 'Mobile Wellness App',
    desc: 'Cross‑platform app with push notifications and offline mode.',
    tag: 'Mobile',
  },
];

function ProjectCard({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur">
      <div className="text-xs text-cyan-300/80 uppercase tracking-wider">{item.tag}</div>
      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-slate-300">{item.desc}</p>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition text-sm">View details</button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']); // subtle parallax

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4" ref={containerRef}>
        <motion.h2 style={{ x }} className="text-3xl md:text-4xl font-bold">Featured Projects</motion.h2>
        <p className="mt-2 text-slate-300 max-w-2xl">A selection of work spanning web apps, infrastructure, and delightful user experiences.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <ProjectCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
