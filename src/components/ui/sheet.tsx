'use client';

import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Sheet(props: SheetProps) {
  const { open, onOpenChange, children } = props;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

export function SheetTrigger(props: { children: ReactNode; asChild?: boolean }) {
  const { children, asChild } = props;
  return (
    <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>
  );
}

export function SheetContent(props: {
  side?: "right" | "left";
  className?: string;
  children: ReactNode;
}) {
  const { side = "right", className, children } = props;
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40" />
      <Dialog.Content
        className={cn(
          "fixed z-50 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full",
          side === "left" && "left-0 -translate-x-full data-[state=open]:translate-x-0",
          side === "right" && "right-0",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

