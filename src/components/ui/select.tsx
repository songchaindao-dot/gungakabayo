'use client';

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Select(props: {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}) {
  const { children, ...rest } = props;
  return <SelectPrimitive.Root {...rest}>{children}</SelectPrimitive.Root>;
}

export function SelectTrigger(props: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const { className, children, id } = props;
  return (
    <SelectPrimitive.Trigger
      id={id}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A3D] focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent(props: {
  children: ReactNode;
}) {
  const { children } = props;
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="z-50 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem(props: {
  value: string;
  children: ReactNode;
}) {
  const { value, children } = props;
  return (
    <SelectPrimitive.Item
      value={value}
      className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-gray-900 outline-none transition-colors data-[highlighted]:bg-[#EAD6B7]"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export function SelectValue(props: { placeholder?: string }) {
  const { placeholder } = props;
  return <SelectPrimitive.Value placeholder={placeholder} />;
}

