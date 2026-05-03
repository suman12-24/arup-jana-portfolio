import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ROLES = [
  "Mobile & Full Stack Developer",
  "React Native Specialist",
  "MERN Stack Expert",
  "Android Developer"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % ROLES.length;
      const fullText = ROLES[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting new word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('../public/background.png')",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/60 to-dark"></div>
      </div>

      {/* Background Gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1.5 px-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            >
              Hello, I am
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
              Arup <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Jana</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-[60px] md:h-[50px] mb-6 flex items-center justify-center md:justify-start"
            >
              <h2 className="text-2xl md:text-3xl font-light text-slate-300">
                I am a <span className="text-cyan-400 font-semibold">{text}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              Building scalable mobile and web applications with modern technologies. Expert in React Native, React.js, and Node.js ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <a
                href="/cv.pdf" // Placeholder CV link
                className="px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-slate-700 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 hover:bg-slate-700 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 hover:bg-slate-700 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Image/Avatar */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className="relative"
          >
            {/* Dashed Border Circle */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" style={{ width: '100%', height: '100%' }}></div>

            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl"></div>

            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-2 relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-800 shadow-2xl relative">
                {/* Updated Image Source */}
                <img
                  src="../public/1750785046919.jpg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name)}&background=0f172a&color=06b6d4&size=512&font-size=0.35&bold=true`;
                  }}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-900/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;