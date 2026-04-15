import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mb-32">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
          </span>
          GDG on Campus CUK 6th
        </div>

        <h1 className="text-5xl font-black leading-[0.95] mb-8">
          2026 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-yellow to-google-red">
            TechTalk Live
          </span>
        </h1>

        <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w">
          GDG on Campus CUK에서 주관하는 IT 현직자 초청 강연, 테크톡 라이브에 여러분을 초대합니다!
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-google-blue">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white">2026년 4월 30일 목요일</p>
              <p className="text-neutral-500">18:50 - 21:50 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-google-red">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white">가톨릭대학교 성심교정</p>
              <p className="text-neutral-500">강의실 개별 안내</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
