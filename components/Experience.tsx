import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" aria-label="Work Experience" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-secondary">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[20px] md:left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"
            />

            <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative pl-12 md:pl-16"
                >
                {/* Timeline Dot */}
                <span className="absolute left-[13px] md:left-[17px] top-6 h-4 w-4 rounded-full bg-dark border-[3px] border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                
                <div className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-800 border-l-4 border-l-cyan-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                        <div className="flex items-start gap-4">
                           {/* Company Logo if available */}
                           {exp.logo && (
                             <div className="w-16 h-16 rounded-lg bg-white p-2 flex items-center justify-center flex-shrink-0">
                               <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                             </div>
                           )}
                           
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
                                    <Briefcase size={18} />
                                    {exp.company}
                                </div>
                            </div>
                        </div>
                        <span className="inline-block px-3 py-1 bg-slate-800 rounded text-sm text-slate-400 font-mono border border-slate-700 self-start">
                            {exp.period}
                        </span>
                    </div>

                    <ul className="space-y-3 mt-6">
                        {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                            <span className="leading-relaxed">{resp}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;