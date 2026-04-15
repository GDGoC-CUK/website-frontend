import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { speakers } from "../../data/eventData";

export function SpeakerSection() {
  return (
    <section id="speaker" className="mb-24">
      <SectionTitle subtitle="TECH TALK SPEAKER">The Speaker</SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        {speakers.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Card className="items-start gap-5">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-google-blue via-google-red to-google-yellow" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-google-blue flex items-center justify-center border-4 border-neutral-950 shadow-xl">
                    <Zap className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                <p className="text-google-blue font-semibold text-sm mb-4">{item.job}</p>
                <p className="w-4/5 text-neutral-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
