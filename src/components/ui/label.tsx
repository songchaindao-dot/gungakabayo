import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: LabelProps) {
  const { className, ...rest } = props;
  return (
    <label
      className={cn("text-sm font-medium text-gray-700", className)}
      {...rest}
    />
  );
}

