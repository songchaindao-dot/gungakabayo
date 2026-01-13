'use client';

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tabs(props: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
}) {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.Root
      className={cn("w-full", className)}
      {...rest}
    />
  );
}

export function TabsList(props: { className?: string; children: ReactNode }) {
  const { className, children } = props;
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#EAD6B7] p-1",
        className
      )}
    >
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger(props: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value, children, className } = props;
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        "inline-flex min-w-[80px] items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#007A3D]",
        className
      )}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent(props: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value, children, className } = props;
  return (
    <TabsPrimitive.Content
      value={value}
      className={cn("mt-6", className)}
    >
      {children}
    </TabsPrimitive.Content>
  );
}

