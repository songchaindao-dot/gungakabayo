'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton(): JSX.Element {
  const phoneNumber: string = '260570095686'
  const message: string = 'Hello Gungakabayo! I would like to inquire about your products.'

  const handleClick = (): void => {
    const url: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  )
}
