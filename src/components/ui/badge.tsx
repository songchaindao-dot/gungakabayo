import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge(props: HTMLAttributes<HTMLSpanElement>) {
  const { className, ...rest } = props;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#007A3D] px-3 py-1 text-xs font-semibold text-white",
        className
      )}
      {...rest}
    />
  );
}

