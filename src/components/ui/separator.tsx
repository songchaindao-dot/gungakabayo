import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Separator(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("h-px w-full bg-gray-200", className)}
      {...rest}
    />
  );
}

