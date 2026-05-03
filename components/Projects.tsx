import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Smartphone, Globe, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400">A showcase of my recent development work.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-card rounded-2xl p-6 h-full flex flex-col overflow-hidden"
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

              <div className="flex justify-between items-start mb-6 mt-2">
                <div className="p-3 bg-slate-900 rounded-xl text-cyan-400 border border-slate-800">
                  {project.title.toLowerCase().includes('app') ? (
                      <Smartphone size={24} />
                  ) : (
                      <Globe size={24} />
                  )}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex-grow mb-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                    {project.points[0]}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                 {project.tech.map((t, i) => (
                   <span key={i} className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full">
                     {t}
                   </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;