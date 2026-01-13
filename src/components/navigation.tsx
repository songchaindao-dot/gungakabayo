'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/learning", label: "Learning Hub" },
  { href: "/barcode", label: "Barcode Generator" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/c41e88d1-2fb4-4aab-a583-33723ae343ba-GE3qdybf67pp7ZaZ1IivSIaK9ahwZO"
                alt="Gungakabayo Logo"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#007A3D] font-bold text-xl">
                Gungakabayo
              </div>
              <div className="text-[#8B5E3C] text-xs">Enterprise Limited</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#007A3D] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007A3D] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0570095686"
              className="text-[#007A3D] hover:text-[#D15B2C] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:Gungakabayo@gmail.com"
              className="text-[#007A3D] hover:text-[#D15B2C] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Link href="/cart" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#007A3D] hover:text-[#D15B2C] hover:bg-[#007A3D]/10"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#D15B2C] text-white text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/products">
              <Button className="bg-[#D15B2C] hover:bg-[#B14823] text-white">
                Shop Now
              </Button>
            </Link>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6 text-[#007A3D]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[#007A3D] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#007A3D] transition-colors flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                  {totalItems > 0 && (
                    <Badge className="bg-[#D15B2C] text-white">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:0570095686"
                    className="flex items-center space-x-2 text-[#007A3D]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>0570 095 686</span>
                  </a>
                  <a
                    href="mailto:Gungakabayo@gmail.com"
                    className="flex items-center space-x-2 text-[#007A3D]"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Gungakabayo@gmail.com</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

