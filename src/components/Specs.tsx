"use client";

import { motion } from "motion/react";

export function Specs() {
  return (
    <section className="bg-brand text-dark py-32 border-y-8 border-dark">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex-1">
          <h2 className="text-8xl md:text-[10rem] font-anton leading-[0.8] tracking-tighter uppercase mb-6 drop-shadow-[8px_8px_0px_#FAFAFA]">
            WYMIARY <br />
            BUSA
          </h2>
          <p className="text-2xl font-space font-semibold max-w-sm border-l-8 border-dark pl-6">
            Zmieści się wszystko — meble, AGD, materiały budowlane i więcej.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="border-4 border-dark p-8 bg-white shadow-[8px_8px_0px_#0f0e0c] transform rotate-2"
          >
            <p className="text-zinc-500 font-anton uppercase text-xl mb-2">Długość</p>
            <p className="text-5xl md:text-7xl font-anton">3.7<span className="text-3xl">m</span></p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="border-4 border-dark p-8 bg-white shadow-[8px_8px_0px_#0f0e0c] transform -rotate-1"
          >
            <p className="text-zinc-500 font-anton uppercase text-xl mb-2">Szerokość</p>
            <p className="text-5xl md:text-7xl font-anton">1.8<span className="text-3xl">m</span></p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="border-4 border-dark p-8 bg-white shadow-[8px_8px_0px_#0f0e0c] transform rotate-3 col-span-2 md:col-span-1"
          >
            <p className="text-zinc-500 font-anton uppercase text-xl mb-2">Wysokość</p>
            <p className="text-5xl md:text-7xl font-anton">1.9<span className="text-3xl">m</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}