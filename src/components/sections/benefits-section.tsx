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
    <section className="mx-auto max-w-7xl px-6 py-12 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />
      <div className="mb-12 space-y-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 font-bold text-[10px] uppercase tracking-[0.5em] border border-white/10 bg-white/5 px-6 py-2 rounded-full inline-block"
        >
          Operational Excellence
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1]"
        >
          Architected for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 italic">Global Impact.</span>
        </motion.h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3 relative z-10">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: benefit.delay }}
            className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 backdrop-blur-3xl"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-4xl group-hover:text-white/10 transition-colors">
              0{i+1}
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{benefit.title}</h3>
              <p className="text-white/30 text-base font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
            <div className="mt-10 h-px w-12 bg-white/5 group-hover:w-full group-hover:bg-white/20 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;