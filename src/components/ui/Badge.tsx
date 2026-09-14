import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2";
  
  const variants = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-status-successBg text-status-success",
    warning: "bg-status-warningBg text-status-warning",
    error: "bg-status-errorBg text-status-error",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}

export { Badge };
