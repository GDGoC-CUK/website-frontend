import React from "react";
import { motion } from "motion/react";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
};

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 space-y-2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold tracking-tight"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-sm uppercase tracking-widest font-semibold"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
