import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Smooth scrolling behavior
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name — Built with motion and 3D
      </footer>
    </div>
  );
}

export default App;
