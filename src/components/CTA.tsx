"use client";

import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-dark text-white py-32 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 tape-pattern opacity-5 pointer-events-none"></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center flex flex-col items-center max-w-4xl"
      >
        <p className="font-anton text-brand text-2xl tracking-widest uppercase mb-4 transform -rotate-2">Potrzebujesz pomocy „na już"?</p>
        <h2 className="text-7xl md:text-[8rem] font-anton leading-[0.8] tracking-tighter uppercase mb-16 text-light drop-shadow-lg">
          ZADZWOŃ <br />
          DO KAMILA
        </h2>
        
        <motion.a 
          href="tel:502558034"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center gap-6 bg-brand text-dark px-10 py-6 text-4xl md:text-7xl font-anton border-4 border-dark transition-all shadow-[8px_8px_0px_#FAFAFA] hover:shadow-[16px_16px_0px_#FAFAFA] hover:-translate-y-2 hover:-translate-x-2"
        >
          <PhoneCall size={56} className="group-hover:animate-pulse" strokeWidth={3} />
          <span>502 558 034</span>
        </motion.a>
        
        <p className="mt-16 text-zinc-400 font-space text-lg max-w-lg mx-auto font-medium">
          Działamy na terenie całego Podlasia — Białystok i okolice. 
          Zadzwoń, dogadamy się. Szybka wycena, uczciwe ceny.
        </p>
      </motion.div>
    </section>
  );
}