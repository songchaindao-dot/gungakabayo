'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingShopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link href="/products">
      <Button
        className={`fixed bottom-6 right-6 z-40 bg-[#D15B2C] hover:bg-[#B14823] text-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        size="lg"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Shop Now
      </Button>
    </Link>
  )
}
