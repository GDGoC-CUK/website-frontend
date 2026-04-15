import { motion } from "motion/react";
import { ApplyButton } from "../ApplyButton";

type MobileStickyBarProps = {
  scrolled: boolean;
};

export function MobileStickyBar({ scrolled }: MobileStickyBarProps) {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden">
      <div className="glass rounded-2xl p-3 flex items-center justify-between shadow-2xl">
        <div className="px-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Upcoming Event</p>
          <p className="text-xs font-bold">4월 30일 목요일</p>
        </div>
        <ApplyButton className="text-sm font-bold" />
      </div>
    </motion.div>
  );
}
