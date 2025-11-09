import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-cyan-400" />
          <h2 className="text-3xl font-bold">Get in touch</h2>
        </div>
        <p className="mt-2 text-slate-300">Have a project in mind or want to collaborate? Drop a message and I'll get back to you.</p>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required value={state.name} onChange={(e)=>setState({...state, name:e.target.value})} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 placeholder:text-slate-400" placeholder="Your name" />
            <input required type="email" value={state.email} onChange={(e)=>setState({...state, email:e.target.value})} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 placeholder:text-slate-400" placeholder="Email address" />
          </div>
          <textarea required value={state.message} onChange={(e)=>setState({...state, message:e.target.value})} rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 placeholder:text-slate-400" placeholder="Your message" />
          <button type="submit" className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">
            <Send className="w-4 h-4" />
            {sent ? 'Sent! I will get back soon.' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
