import { useEffect, useState } from "react";
import { Navigation } from "../features/techtalk-live/components/layout/Navigation";
import { MobileMenu } from "../features/techtalk-live/components/layout/MobileMenu";
import { MobileStickyBar } from "../features/techtalk-live/components/layout/MobileStickyBar";
import { HeroSection } from "../features/techtalk-live/components/sections/HeroSection";
import { SpeakerSection } from "../features/techtalk-live/components/sections/SpeakerSection";
import { ScheduleSection } from "../features/techtalk-live/components/sections/ScheduleSection";
import { VenueSection } from "../features/techtalk-live/components/sections/VenueSection";
import { PresenterSection } from "../features/techtalk-live/components/sections/PresenterSection";
import { FinalCtaSection } from "../features/techtalk-live/components/sections/FinalCtaSection";
import { Footer } from "../features/techtalk-live/components/sections/Footer";

export default function TechTalkLive2026Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 bg-mesh selection:bg-google-blue/30">
      <Navigation scrolled={scrolled} onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="pt-32 pb-32 px-6 max-w-lg mx-auto">
        <HeroSection />
        <SpeakerSection />
        <ScheduleSection />
        <VenueSection />
        <PresenterSection />
        <FinalCtaSection />
        <Footer />
      </main>

      <MobileStickyBar scrolled={scrolled} />
    </div>
  );
}
