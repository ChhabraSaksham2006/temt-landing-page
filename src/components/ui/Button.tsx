import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-indigo text-white hover:bg-brand-indigo/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
      secondary: "bg-brand-navy text-white hover:bg-brand-navy/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
      outline: "border border-border-subtle bg-white text-brand-navy hover:bg-slate-50 hover:-translate-y-0.5",
      ghost: "text-brand-navy hover:bg-slate-100",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as HTMLMotionProps<"button">)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
