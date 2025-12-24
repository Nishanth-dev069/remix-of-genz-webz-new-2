"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Hyper-Productivity",
      description: "Automate the mundane with neural-precision workflows that liberate your team for high-level strategy.",
      delay: 0.1
    },
    {
      title: "Sensory UX",
      description: "Deliver interfaces that respond with human-like intuition, building immediate trust and brand loyalty.",
      delay: 0.2
    },
    {
      title: "Economic Elasticity",
      description: "Optimize resources with intelligent scaling, reducing overhead while maximizing performance output.",
      delay: 0.3
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-40 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />
      <div className="mb-32 space-y-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-500 font-bold text-[10px] uppercase tracking-[0.5em] border border-purple-500/20 bg-purple-500/5 px-6 py-2 rounded-full inline-block"
        >
          Operational Excellence
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
        >
          Architected for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 italic">Global Impact.</span>
        </motion.h2>
      </div>
      <div className="grid gap-12 md:grid-cols-3 relative z-10">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: benefit.delay }}
            className="group relative p-12 rounded-[3rem] border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 p-10 text-white/5 font-mono text-5xl group-hover:text-purple-500/20 transition-colors">
              0{i+1}
            </div>
            <div className="space-y-8 relative z-10">
              <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors leading-tight">{benefit.title}</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
            <div className="mt-12 h-px w-16 bg-white/10 group-hover:w-full group-hover:bg-purple-500/30 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;