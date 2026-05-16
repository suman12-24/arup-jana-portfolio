import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" aria-label="Contact Me" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's work <span className="text-secondary">together</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {/* Email — clickable */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-cyan-500/50 transition-all group cursor-pointer block"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">Email Me</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              {/* Phone — clickable */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^+\d]/g, '')}`}
                className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-purple-500/50 transition-all group cursor-pointer block"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">Call Me</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              {/* Location — opens Google Maps */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PERSONAL_INFO.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-green-500/50 transition-all group cursor-pointer block"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">Location</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{PERSONAL_INFO.location}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="bg-card border border-slate-800 p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>Designed &amp; Built with <span className="text-red-500">❤</span> by {PERSONAL_INFO.name}</p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://www.facebook.com/arup.jana.593184/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://www.instagram.com/arupjana_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/50 transition-all"
            >
              <Instagram size={17} />
            </a>
          </div>

          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
