import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side: Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's work <span className="text-secondary">together</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12">
                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-cyan-500/30 transition-colors group">
                        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Email Me</h4>
                            <p className="text-slate-400">{PERSONAL_INFO.email}</p>
                        </div>
                    </div>

                    <div className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-purple-500/30 transition-colors group">
                        <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Call Me</h4>
                            <p className="text-slate-400">{PERSONAL_INFO.phone}</p>
                        </div>
                    </div>

                    <div className="bg-card p-6 rounded-2xl border border-slate-800 flex items-center gap-6 hover:border-green-500/30 transition-colors group">
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Location</h4>
                            <p className="text-slate-400">{PERSONAL_INFO.location}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
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

        <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
             <p>Designed & Built with <span className="text-red-500">❤</span> by {PERSONAL_INFO.name}</p>
             <div className="flex gap-4 mt-4 md:mt-0">
                 <a href={PERSONAL_INFO.github} className="hover:text-white"><Github size={18} /></a>
                 <a href={PERSONAL_INFO.linkedin} className="hover:text-cyan-400"><Linkedin size={18} /></a>
             </div>
             <p className="mt-4 md:mt-0">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;