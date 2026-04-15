import React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-google-blue text-white hover:bg-google-blue/90",
      secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
      outline: "border border-white/20 text-white hover:bg-white/5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-full font-medium transition-all active:scale-95 flex items-center justify-center gap-2",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
