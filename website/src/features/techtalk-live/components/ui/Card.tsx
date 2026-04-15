import React from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn("glass rounded-3xl p-6", className)}>{children}</div>;
}
