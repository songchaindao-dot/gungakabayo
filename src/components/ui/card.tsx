import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...rest}
    />
  );
}

export function CardHeader(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("px-6 pt-6 pb-2 flex flex-col gap-1", className)}
      {...rest}
    />
  );
}

export function CardTitle(props: HTMLAttributes<HTMLHeadingElement>) {
  const { className, ...rest } = props;
  return (
    <h3
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...rest}
    />
  );
}

export function CardDescription(props: HTMLAttributes<HTMLParagraphElement>) {
  const { className, ...rest } = props;
  return (
    <p
      className={cn("text-sm text-gray-600", className)}
      {...rest}
    />
  );
}

export function CardContent(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn("px-6 pb-6", className)} {...rest} />
  );
}

export function CardFooter(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("px-6 pb-6 pt-0 flex items-center", className)}
      {...rest}
    />
  );
}

