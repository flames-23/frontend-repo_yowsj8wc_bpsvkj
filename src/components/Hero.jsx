import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax layers
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Full-width interactive Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient to ensure text readability but keep interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <div className="pt-24 md:pt-28 lg:pt-32 grid md:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y: yTitle }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-rose-600 tracking-widest text-xs uppercase">Software Engineer</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight text-slate-900">
              Minimal, modern, and interactive products
            </h1>
            <motion.p style={{ y: ySubtitle }} className="mt-4 text-slate-700 max-w-xl">
              I design and build performant interfaces with clean aesthetics, subtle motion, and tactile interactions.
            </motion.p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-500 transition">See Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-200 text-slate-900 hover:border-slate-300 transition">Contact Me</a>
            </div>
          </motion.div>

          <motion.ul className="grid grid-cols-2 gap-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Python'].map((skill) => (
              <motion.li key={skill} className="backdrop-blur bg-white/70 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 shadow-sm" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
