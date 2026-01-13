'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FloatingShopButton } from '@/components/floating-shop-button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      const message: string = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      const url: string = `mailto:Gungakabayo@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}`
      window.location.href = url

      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with us for inquiries, orders, or partnership opportunities
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#EAD6B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ScrollReveal>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007A3D] mb-4">Call Us</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <a href="tel:0570095686" className="hover:text-[#D15B2C] transition-colors">
                        0570 095 686
                      </a>
                    </p>
                    <p>
                      <a href="tel:0963327772" className="hover:text-[#D15B2C] transition-colors">
                        0963 327 772
                      </a>
                    </p>
                    <p>
                      <a href="tel:0950855845" className="hover:text-[#D15B2C] transition-colors">
                        0950 855 845
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#D15B2C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007A3D] mb-4">Email Us</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:Gungakabayo@gmail.com"
                      className="hover:text-[#D15B2C] transition-colors break-all"
                    >
                      Gungakabayo@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600 mt-2">
                    <a href="https://www.gungakabayo.store" className="hover:text-[#D15B2C] transition-colors">
                      www.gungakabayo.store
                    </a>
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007A3D] mb-4">Visit Us</h3>
                  <p className="text-gray-600">Lusaka, Zambia</p>
                  <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon - Sat: 8AM - 6PM</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <Card className="bg-white border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#007A3D] mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="+260 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 min-h-32"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#D15B2C] hover:bg-[#B14823] text-white text-lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="bg-white border-none shadow-xl overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246729.41092206968!2d28.160149149999998!3d-15.387525999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4a62fb4e2d9%3A0xb5d7ab96a3b41e94!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gungakabayo Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-gradient-to-r from-[#007A3D] to-[#005A2D] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to receive updates on new products, farming tips, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-14 text-gray-900 flex-1"
                required
              />
              <Button type="submit" className="h-14 bg-[#D15B2C] hover:bg-[#B14823] text-white px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
