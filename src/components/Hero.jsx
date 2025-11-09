import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950"></div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <div className="pt-24 md:pt-28 lg:pt-32 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-cyan-300/80 tracking-widest text-xs uppercase">Software Engineer</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Building delightful, performant products
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              I craft interactive experiences with a focus on performance, accessibility, and developer joy. Explore my work and let's create something exceptional together.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">See Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">Contact Me</a>
            </div>
          </motion.div>

          <motion.ul className="grid grid-cols-2 gap-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Python'].map((skill) => (
              <motion.li key={skill} className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-4 text-sm" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
