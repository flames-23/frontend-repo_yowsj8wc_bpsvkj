import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = "px-3 py-2 rounded-md hover:text-slate-900 text-slate-700 hover:bg-slate-100 transition";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${
      scrolled ? 'bg-white/80 border-b border-slate-200' : 'bg-white/40'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <Rocket className="w-5 h-5 text-rose-600" />
            <span>Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <a href="#home" className={linkClass}>Home</a>
            <a href="#projects" className={linkClass}>Projects</a>
            <a href="#about" className={linkClass}>About</a>
            <a href="#contact" className={linkClass}>Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="ml-2 p-2 rounded-md hover:bg-slate-100">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
              <Linkedin className="w-4 h-4" />
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            <a onClick={() => setOpen(false)} href="#home" className={linkClass}>Home</a>
            <a onClick={() => setOpen(false)} href="#projects" className={linkClass}>Projects</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={() => setOpen(false)} href="#contact" className={linkClass}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
