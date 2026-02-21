"use client";

import { motion } from "motion/react";
import { Tape } from "./Tape";
import { Check, ArrowRight } from "lucide-react";

export function Services() {
  const items = [
    "Meble i kanapy",
    "Sprzęt AGD/RTV",
    "Materiały budowlane",
    "Motocykle i rowery",
    "Rzeczy w workach i kartonach",
    "Rośliny ogrodowe",
    "Montaż i demontaż mebli",
    "Opróżnianie mieszkań"
  ];

  const stores = "CASTORAMA • LEROY MERLIN • AGATA MEBLE • IKEA • OLX • ALLEGRO • BRW";

  return (
    <section className="bg-light text-dark py-24 relative overflow-hidden">
      <div className="absolute top-0 w-full rotate-2 origin-left -mt-8 z-10">
        <Tape text="PRZYWOZIMY Z MARKETÓW" className="bg-dark text-light border-y-brand" />
      </div>
      
      <div className="absolute top-12 w-full -rotate-1 origin-right z-0">
        <Tape text={stores} reverse className="bg-brand text-dark border-y-dark opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-32 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-6xl md:text-8xl font-anton uppercase mb-8 leading-[0.9]">
            CO <br />
            <span className="text-zinc-500">WOZIMY?</span>
          </h2>
          <p className="text-xl text-zinc-600 mb-8 max-w-md font-medium">
            Wszystko, co zmieści się do busa i da się udźwignąć. Pomagamy we wnoszeniu, znoszeniu i składaniu mebli.
          </p>
          
          <div className="bg-dark text-light p-8 rotate-1 shadow-[8px_8px_0px_#FDE047]">
            <h3 className="font-anton text-3xl mb-4 text-brand">OPCJE USŁUGI</h3>
            <ul className="space-y-4 font-space text-lg">
              <li className="flex gap-4 items-center">
                <ArrowRight className="text-brand shrink-0" />
                <span>Sam transport</span>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRight className="text-brand shrink-0" />
                <span>Transport + pomoc kierowcy w noszeniu</span>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRight className="text-brand shrink-0" />
                <span>Wynajem busa z kierowcą</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8 md:mt-0">
          {items.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={item}
              className="border-4 border-dark bg-white p-6 group hover:bg-brand transition-colors shadow-[4px_4px_0px_#0f0e0c]"
            >
              <div className="bg-dark text-white p-2 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-dark transition-colors">
                <Check strokeWidth={4} />
              </div>
              <h4 className="font-anton text-xl tracking-wide uppercase leading-tight">{item}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}