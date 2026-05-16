import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, CheckCircle, Star, Zap, Shield, Hotel, Dumbbell,
  ChevronRight, Tag, Package, Mail, X, Smartphone, RefreshCw,
  Calendar, IndianRupee, Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

/* ─── Types ─────────────────────────────────────────── */
interface PricingPlan {
  label: string;
  price: number;
  note: string;
  highlight?: boolean;
}

interface MarketplaceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pricing: PricingPlan[];
  mobileApp?: {
    label: string;
    price: number;
    description: string;
  };
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  features: string[];
  tech: string[];
  badge: string;
  screens: string[];
}

/* ─── Data ───────────────────────────────────────────── */
const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 'hotel',
    title: 'Hotel Management',
    subtitle: 'Admin Panel',
    description:
      'A comprehensive hotel administration system to manage bookings, rooms, staff, guests, and revenue — built with Laravel & MySQL for robust, production-grade performance.',
    pricing: [
      { label: 'Installation', price: 7999, note: 'One-time setup fee', highlight: true },
      { label: 'Free Trial', price: 0, note: 'First month free' },
      { label: 'Monthly', price: 499, note: 'After free trial / month' },
    ],
    icon: <Hotel size={28} />,
    accentColor: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6,182,212,0.35)',
    badge: 'Bestseller',
    features: [
      'Room booking & availability calendar',
      'Guest check-in / check-out management',
      'Staff & role-based access control',
      'Invoice & billing generation',
      'Revenue & occupancy analytics',
      'Housekeeping task tracker',
      'Restaurant / room-service module',
      'Fully responsive dark UI',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'TailwindCSS', 'REST API', 'JWT Auth'],
    screens: ['Dashboard', 'Bookings', 'Rooms', 'Guests', 'Reports', 'Settings'],
  },
  {
    id: 'gym',
    title: 'Gym Management',
    subtitle: 'Admin Panel',
    description:
      'A powerful gym administration system for memberships, schedules, trainers, payments, and member progress — built with Laravel & MySQL, plus a dedicated client Android app.',
    pricing: [
      { label: 'Installation', price: 7999, note: 'One-time setup fee', highlight: true },
      { label: 'Free Trial', price: 0, note: 'First month free' },
      { label: 'Monthly', price: 499, note: 'After free trial / month' },
    ],
    mobileApp: {
      label: 'Client Android App',
      price: 14999,
      description: 'Dedicated Android app for gym members — view schedules, track attendance, check diet/workout plans & pay fees.',
    },
    icon: <Dumbbell size={28} />,
    accentColor: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168,85,247,0.35)',
    badge: 'New',
    features: [
      'Member registration & profile management',
      'Subscription & membership plans',
      'Trainer assignment & scheduling',
      'Class & batch timetable manager',
      'Fee collection & payment tracking',
      'Attendance & check-in logs',
      'Diet & workout plan builder',
      'Fully responsive dark UI',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'TailwindCSS', 'REST API', 'JWT Auth', 'React Native'],
    screens: ['Dashboard', 'Members', 'Trainers', 'Classes', 'Payments', 'Reports'],
  },
];

/* ─── Small UI pieces ────────────────────────────────── */
const ForSaleTag: React.FC = () => (
  <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
    <Tag size={11} /> For Sale
  </span>
);

const FeatureList: React.FC<{ features: string[]; cyan: boolean }> = ({ features, cyan }) => (
  <ul className="space-y-2">
    {features.map((f, i) => (
      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
        <CheckCircle size={15} className={`mt-0.5 flex-shrink-0 ${cyan ? 'text-cyan-400' : 'text-purple-400'}`} />
        {f}
      </li>
    ))}
  </ul>
);

/* ─── Pricing Row ────────────────────────────────────── */
const PricingTable: React.FC<{ plans: PricingPlan[]; cyan: boolean }> = ({ plans, cyan }) => (
  <div className="grid grid-cols-3 gap-2 mb-6">
    {plans.map((p, i) => (
      <div
        key={i}
        className={`rounded-xl p-3 text-center border ${
          p.highlight
            ? cyan
              ? 'border-cyan-500/60 bg-cyan-500/10'
              : 'border-purple-500/60 bg-purple-500/10'
            : 'border-slate-700 bg-slate-800/40'
        }`}
      >
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">{p.label}</p>
        {p.price === 0 ? (
          <p className="text-green-400 font-black text-lg">FREE</p>
        ) : (
          <p className={`font-black text-lg ${p.highlight ? (cyan ? 'text-cyan-400' : 'text-purple-400') : 'text-white'}`}>
            ₹{p.price.toLocaleString('en-IN')}
          </p>
        )}
        <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{p.note}</p>
      </div>
    ))}
  </div>
);

/* ─── Mobile App Add-on Card ─────────────────────────── */
const MobileAppAddon: React.FC<{ app: NonNullable<MarketplaceItem['mobileApp']>; onBuy: () => void }> = ({ app, onBuy }) => (
  <div className="mt-4 bg-slate-800/60 border border-purple-500/30 rounded-xl p-4">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
        <Smartphone size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <p className="text-white font-bold text-sm">{app.label}</p>
          <span className="text-[10px] bg-pink-500/20 border border-pink-500/30 text-pink-400 px-2 py-0.5 rounded-full font-semibold">ADD-ON</span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mb-3">{app.description}</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-purple-400 font-black text-xl">₹{app.price.toLocaleString('en-IN')}</span>
          <button
            onClick={onBuy}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
          >
            <ShoppingCart size={13} /> Buy App
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Contact Modal ──────────────────────────────────── */
interface ModalProps {
  item: MarketplaceItem;
  type: 'panel' | 'app';
  onClose: () => void;
}

const ContactModal: React.FC<ModalProps> = ({ item, type, onClose }) => {
  const isApp = type === 'app';
  const productName = isApp
    ? `${item.title} Client Android App`
    : `${item.title} ${item.subtitle}`;
  const price = isApp ? item.mobileApp!.price : item.pricing[0].price;
  const isCyan = item.accentColor.includes('cyan');

  const subject = encodeURIComponent(`Inquiry: ${productName}`);
  const body = encodeURIComponent(
    `Hi Arup,\n\nI'm interested in purchasing "${productName}" (₹${price.toLocaleString('en-IN')}).\n\n${
      !isApp ? 'Please share demo access and payment details.\n\nPricing I noted:\n- Installation: ₹7,999 (one-time)\n- First month: FREE\n- After that: ₹499/month\n\n' : ''
    }Thanks!`
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accentColor} flex items-center justify-center text-white mb-4`}>
          {isApp ? <Smartphone size={24} /> : item.icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{productName}</h3>
        <p className="text-slate-400 text-sm mb-5">
          Reach out and I'll get back within 24 hours with a demo and payment link.
        </p>

        {!isApp && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            {item.pricing.map((p, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-3 text-center border border-slate-700">
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">{p.label}</p>
                {p.price === 0 ? (
                  <p className="text-green-400 font-black">FREE</p>
                ) : (
                  <p className={`font-black ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`}>
                    ₹{p.price.toLocaleString('en-IN')}
                  </p>
                )}
                <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{p.note}</p>
              </div>
            ))}
          </div>
        )}

        {isApp && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-5 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs mb-0.5">One-time price</p>
              <p className="text-2xl font-black text-purple-400">₹{price.toLocaleString('en-IN')}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-xs">Source code</p>
              <p className="text-slate-400 text-xs">+ 30-day support</p>
            </div>
          </div>
        )}

        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`}
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${item.accentColor} hover:opacity-90 transition-opacity`}
        >
          <Mail size={18} /> Contact via Email
        </a>
        <p className="text-slate-500 text-xs text-center mt-4">
          Source code + setup guide + 30-day support included
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Component ─────────────────────────────────── */
const MarketplaceProjects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ item: MarketplaceItem; type: 'panel' | 'app' } | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="marketplace" aria-label="Admin Panels for Sale" className="py-24 relative overflow-hidden" style={{ background: '#020617' }}>
      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle,#06b6d4,transparent)' }} />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle,#8b5cf6,transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ForSaleTag />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready-Made <span className="text-cyan-400">Admin Panels</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Production-ready SaaS solutions built with <span className="text-cyan-400 font-semibold">Laravel & MySQL</span>. One-time installation, free first month, then ₹499/month.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { icon: <Package size={15} />, text: 'Full Source Code' },
              { icon: <Shield size={15} />, text: '30-Day Support' },
              { icon: <RefreshCw size={15} />, text: '1 Month Free Trial' },
              { icon: <Calendar size={15} />, text: '₹499/month After' },
              { icon: <Star size={15} />, text: 'Production Ready' },
              { icon: <Zap size={15} />, text: 'Instant Delivery' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-cyan-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Pricing summary banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-2xl px-6 py-3 text-sm flex-wrap justify-center gap-y-2">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold"><IndianRupee size={14} />7,999 installation</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-green-400 font-bold"><Calendar size={14} />1st month FREE</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-bold"><RefreshCw size={14} />₹499 / month</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MARKETPLACE_ITEMS.map((item, index) => {
            const isCyan = item.accentColor.includes('cyan');
            const accentText = isCyan ? 'text-cyan-400' : 'text-purple-400';
            const borderHover = isCyan ? 'hover:border-cyan-500/50' : 'hover:border-purple-500/50';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-slate-900/80 border border-slate-800 ${borderHover} rounded-2xl overflow-hidden transition-all duration-500 flex flex-col`}
                style={{
                  boxShadow: hoveredId === item.id
                    ? `0 0 40px ${item.glowColor}, 0 20px 60px rgba(0,0,0,0.5)`
                    : '0 4px 24px rgba(0,0,0,0.4)',
                }}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.accentColor}`} />

                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.badge === 'Bestseller'
                      ? 'bg-amber-400/15 border border-amber-400/40 text-amber-400'
                      : 'bg-green-400/15 border border-green-400/40 text-green-400'
                  }`}>{item.badge}</span>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                      <p className={`text-sm font-semibold ${accentText}`}>{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full flex items-center gap-1">
                        {i === 0 && <Layers size={10} className={accentText} />}
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

                  {/* Pricing table */}
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Pricing</p>
                  <PricingTable plans={item.pricing} cyan={isCyan} />

                  {/* Features */}
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Key Features</p>
                  <div className="mb-5">
                    <FeatureList features={item.features} cyan={isCyan} />
                  </div>

                  {/* Screens */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2.5">Screens Included</p>
                    <div className="flex flex-wrap gap-2">
                      {item.screens.map((s, i) => (
                        <span key={i} className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-lg">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile app add-on */}
                  {item.mobileApp && (
                    <MobileAppAddon
                      app={item.mobileApp}
                      onBuy={() => setActiveModal({ item, type: 'app' })}
                    />
                  )}

                  {/* Divider */}
                  <div className="border-t border-slate-800 my-6" />

                  {/* CTA */}
                  <div className="mt-auto">
                    <motion.button
                      onClick={() => setActiveModal({ item, type: 'panel' })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r ${item.accentColor} hover:opacity-90 transition-opacity shadow-lg group`}
                    >
                      <ShoppingCart size={18} />
                      Get Admin Panel
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Need customization or a different module?{' '}
          <a href="#contact" className="text-cyan-400 hover:underline">Let's talk</a>
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <ContactModal
            item={activeModal.item}
            type={activeModal.type}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MarketplaceProjects;
