import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ApplyButton } from "../ApplyButton";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "10%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "10%" }}
          className="fixed inset-0 z-[60] bg-neutral-950 p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-xl">2026 TechTalk Live</span>
            <button onClick={onClose}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-bold">
            <a href="#speaker" onClick={onClose}>
              Speaker
            </a>
            <a href="#schedule" onClick={onClose}>
              Schedule
            </a>
          </div>
          <div className="mt-auto">
            <ApplyButton className="w-full px-8 py-4 text-lg font-bold" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
