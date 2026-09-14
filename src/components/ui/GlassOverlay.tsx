import * as React from "react";
import { cn } from "@/lib/utils";

export type GlassOverlayProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassOverlay({ className, ...props }: GlassOverlayProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/70 border border-white/20 shadow-sm rounded-xl",
        className
      )}
      {...props}
    />
  );
}
