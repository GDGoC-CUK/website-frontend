import { Menu } from "lucide-react";
import { ApplyButton } from "../ApplyButton";
import { cn } from "../../lib/utils";
import gdgSquare from "../../assets/gdg_square.png";

type NavigationProps = {
  scrolled: boolean;
  onOpenMobileMenu: () => void;
};

export function Navigation({ scrolled, onOpenMobileMenu }: NavigationProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <img src={gdgSquare} alt="GDG" className="w-8 h-8 object-cover" />
        <span className="font-bold text-lg tracking-tight">TechTalk Live</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        <a href="#speaker" className="hover:text-white transition-colors">
          Speaker
        </a>
        <a href="#schedule" className="hover:text-white transition-colors">
          Schedule
        </a>
        <ApplyButton className="py-2 px-5 text-sm" />
      </div>

      <button className="md:hidden p-2 text-white" onClick={onOpenMobileMenu}>
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
