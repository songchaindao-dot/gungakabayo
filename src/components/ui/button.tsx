'use client';

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#007A3D] disabled:opacity-60 disabled:cursor-not-allowed active:scale-95";

const variantClasses: Record<Variant, string> = {
  default: "bg-[#007A3D] text-white hover:bg-[#006030]",
  outline:
    "border border-[#007A3D] text-[#007A3D] bg-transparent hover:bg-[#007A3D]/10",
  ghost: "bg-transparent text-[#007A3D] hover:bg-[#007A3D]/10"
};

const sizeClasses: Record<Size, string> = {
  default: "h-10 px-5 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10"
};

export function Button(props: ButtonProps) {
  const { className, variant = "default", size = "default", ...rest } = props;
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    />
  );
}

