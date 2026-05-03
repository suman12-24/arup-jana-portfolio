import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-800 rounded-xl text-purple-400">
                    <GraduationCap size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {EDUCATION.map((edu, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-card p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors group"
                >
                    <span className="text-sm font-semibold text-purple-400 mb-2 block">{edu.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{edu.degree}</h3>
                    <h4 className="text-lg text-slate-300 font-medium mb-2">{edu.institution}</h4>
                    <p className="text-slate-400 text-sm mb-4">{edu.college}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{edu.desc}</p>
                </motion.div>
                ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;