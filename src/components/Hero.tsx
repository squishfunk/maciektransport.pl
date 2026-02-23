"use client";

import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20 bg-dark selection:bg-brand selection:text-dark">
      {/* Background texture or elements */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between overflow-hidden">
        <h1 className="text-[20vw] font-anton leading-[0.8] text-zinc-800 whitespace-nowrap opacity-30 -ml-10 select-none">USŁUGI BUSEM</h1>
        <h1 className="text-[20vw] font-anton leading-[0.8] text-zinc-800 whitespace-nowrap opacity-30 text-right -mr-10 select-none">PODLASKIE</h1>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8"
      >
        <div className="inline-block bg-brand text-dark font-anton text-xl md:text-3xl px-6 py-2 transform -rotate-3 border-4 border-dark shadow-[4px_4px_0px_#FAFAFA]">
          USŁUGI BUSEM 24/7 • OD WSZYSTKIEGO
        </div>
        
        <h2 className="text-6xl md:text-[8rem] font-anton text-center uppercase tracking-tight text-light text-balance leading-[0.9] drop-shadow-2xl">
          SZYBKO. <br className="md:hidden" />TANIO. <br className="hidden md:block"/>
          <span className="text-brand inline-block transform rotate-1 lg:rotate-2">BEZ ŚCIEMY.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl text-center font-medium leading-relaxed bg-dark/50 backdrop-blur-sm p-4 border border-zinc-800 rounded-sm">
          Przeprowadzki, transport, opróżnianie, sprzątanie i drobne prace fizyczne. 
          Działamy <strong className="text-brand">24h / 7 dni w tygodniu</strong>.
        </p>
        
        <motion.a 
          href="tel:502558034"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group mt-8 relative flex items-center gap-4 bg-brand text-dark px-8 py-5 text-4xl md:text-6xl font-anton border-4 border-dark transition-all shadow-[8px_8px_0px_#FAFAFA] hover:shadow-[12px_12px_0px_#FAFAFA] hover:-translate-y-1 hover:-translate-x-1"
        >
          <PhoneCall size={48} className="group-hover:animate-pulse" strokeWidth={3} />
          <span>502 558 034</span>
        </motion.a>
        <p className="font-anton text-zinc-500 uppercase tracking-widest text-sm">Zadzwoń do Kamila</p>
      </motion.div>
    </section>
  );
}