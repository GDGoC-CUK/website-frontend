import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { schedule } from "../../data/eventData";

export function ScheduleSection() {
  return (
    <section id="schedule" className="mb-24">
      <SectionTitle subtitle="EVENT TIMELINE">The Program</SectionTitle>
      <div className="space-y-4">
        {schedule.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group"
          >
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="text-sm font-mono text-neutral-500 mb-2">{item.time}</div>
                <div className="w-px flex-1 bg-white/10 group-last:hidden" />
              </div>
              <div className="flex-1 pb-8">
                <div className="glass rounded-2xl p-5 group-hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-google-blue/80">{item.type}</span>
                    <Clock className="w-3 h-3 text-neutral-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  {item.speaker && <p className="text-neutral-500 text-sm">with {item.speaker}</p>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
