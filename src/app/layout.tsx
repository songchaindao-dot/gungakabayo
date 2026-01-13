import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Gungakabayo Enterprise Limited",
  description:
    "Feeding the Nation, Naturally - Zambia's trusted name in organic and sustainable food production"
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

