"use client";

import { motion } from "motion/react";

export function Tape({ text, reverse = false, className = "" }: { text: string; reverse?: boolean; className?: string }) {
  // We don't need state for static arrays
  const content = Array(15).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap bg-brand text-dark font-anton py-3 flex items-center tape-pattern border-y-4 border-dark shadow-[4px_4px_0px_#000] ${className}`}>
      <motion.div
        className="flex gap-6 text-2xl"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {content.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="bg-dark text-brand px-2 tracking-widest leading-none py-1 transform -skew-x-12">{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}