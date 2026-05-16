import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" aria-label="Technical Skills" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolset for building scalable, robust, and modern applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  <skillGroup.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-900 rounded-full text-xs font-medium text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;