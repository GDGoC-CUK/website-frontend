import { motion } from "motion/react";
import { SectionTitle } from "../ui/SectionTitle";

export function PresenterSection() {
  return (
    <section id="presenter" className="mb-24">
      <SectionTitle subtitle="EVENT PRESENTER">GDG on Campus CUK</SectionTitle>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}></motion.div>
    </section>
  );
}
