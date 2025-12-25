"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const CtaSection = () => {
    return (
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/5 blur-[120px] opacity-20 -z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 md:space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] text-white"
          >
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-purple-500/40">ASCEND?</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-4 md:pt-8"
          >
              <Link
                href="/contact"
                className="group relative px-10 md:px-12 py-5 md:py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden hover:scale-105 transition-all shadow-xl shadow-purple-500/5"
              >
                <span className="relative z-10">Start an Enquiry</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            <Link
              href="/about"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-white/0 hover:border-white/20 pb-2"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </div>
      </section>
    );
};

export default CtaSection;