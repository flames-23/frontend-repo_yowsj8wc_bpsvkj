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

function ProjectCard({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xs text-rose-600 uppercase tracking-wider">{item.tag}</div>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-slate-600">{item.desc}</p>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-500 transition text-sm">View details</button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']); // subtle parallax for heading

  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4" ref={containerRef}>
        <motion.h2 style={{ x }} className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A selection of work spanning web apps, infrastructure, and delightful user experiences.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
