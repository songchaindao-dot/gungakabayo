'use client'
import { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Shield, Heart, Award, TrendingUp, Users } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FloatingShopButton } from '@/components/floating-shop-button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { sdk } from "@farcaster/miniapp-sdk";

export default function HomePage(): JSX.Element {
    useEffect(() => {
      const initializeFarcaster = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 100));
          if (document.readyState !== 'complete') {
            await new Promise(resolve => {
              if (document.readyState === 'complete') {
                resolve(void 0);
              } else {
                window.addEventListener('load', () => resolve(void 0), { once: true });
              }

            });
          }

          await sdk.actions.ready();
          console.log("Farcaster SDK initialized successfully - app fully loaded");
        } catch (error) {
          console.error('Failed to initialize Farcaster SDK:', error);
          setTimeout(async () => {
            try {
              await sdk.actions.ready();
              console.log('Farcaster SDK initialized on retry');
            } catch (retryError) {
              console.error('Farcaster SDK retry failed:', retryError);
            }

          }, 1000);
        }

      };
      initializeFarcaster();
    }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/0de724b5-7c2b-4bc5-abe7-80a0626f3990-KJOSJQxNY5z6oehfyRRUEOpPSSUAwI)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-[#007A3D] rounded-full text-sm font-medium">
              🇿🇲 Proudly Made in Zambia
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Feeding the Nation,
              <span className="text-[#D15B2C]"> Naturally</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Gungakabayo Enterprise Limited — Zambia's trusted name in organic and sustainable food production
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-[#D15B2C] hover:bg-[#B14823] text-white text-lg px-8">
                  Shop Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/learning">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#007A3D] text-lg px-8">
                  Learn With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-4">Our Operations</h2>
              <p className="text-xl text-gray-600">See our sustainable farming practices in action</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/0de724b5-7c2b-4bc5-abe7-80a0626f3990-KJOSJQxNY5z6oehfyRRUEOpPSSUAwI"
                    alt="Cattle Grazing at Gungakabayo"
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-[#EAD6B7]">
                  <h3 className="text-xl font-bold text-[#007A3D] mb-2">Livestock Operations</h3>
                  <p className="text-gray-700">Our cattle graze on natural pastures, ensuring quality and sustainability</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/f49296dc-e8a9-451f-91a0-60003a9cde49-FevozgKWLyaCh79huWbOMj7JNjbA5R"
                    alt="Crop Farming at Gungakabayo"
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-[#EAD6B7]">
                  <h3 className="text-xl font-bold text-[#007A3D] mb-2">Crop Production</h3>
                  <p className="text-gray-700">Sustainable farming practices for healthy, organic produce</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/3147a87a-a163-485b-937e-6669f692771b-fCBiI0hx2OZRmaDDpeEwaTKd9PzxwR"
                    alt="Team at Work - Gungakabayo"
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-[#EAD6B7]">
                  <h3 className="text-xl font-bold text-[#007A3D] mb-2">Dedicated Team</h3>
                  <p className="text-gray-700">Hands-on approach to quality from field to table</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-[#EAD6B7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-4">Our Promise</h2>
              <div className="flex flex-wrap justify-center gap-4 text-2xl text-[#8B5E3C]">
                <span className="font-semibold">Quality</span>
                <span>•</span>
                <span className="font-semibold">Sustainability</span>
                <span>•</span>
                <span className="font-semibold">Health</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#007A3D] mb-4">Organic & Natural</h3>
                  <p className="text-gray-600">
                    100% organic farming methods ensuring the highest quality produce without harmful chemicals
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#D15B2C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#007A3D] mb-4">Food Safety</h3>
                  <p className="text-gray-600">
                    Rigorous quality controls and safety standards at every stage of production
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#007A3D] mb-4">Community Focus</h3>
                  <p className="text-gray-600">
                    Supporting local farmers and contributing to Zambia's food security and economy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-[#EAD6B7] rounded-full text-sm font-medium text-[#8B5E3C]">
                  About Our Company
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-6">
                  Cultivating Excellence Since 2019
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Gungakabayo Enterprise Limited is a proudly Zambian agribusiness company dedicated to producing
                  high-quality organic and sustainable food products. From livestock to crops to processed foods, we're
                  committed to feeding our nation naturally.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-[#D15B2C]" />
                    <span className="text-gray-700 font-medium">Quality Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-[#D15B2C]" />
                    <span className="text-gray-700 font-medium">Sustainable Growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-[#D15B2C]" />
                    <span className="text-gray-700 font-medium">Community Driven</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-6 h-6 text-[#D15B2C]" />
                    <span className="text-gray-700 font-medium">100% Organic</span>
                  </div>
                </div>
                <Link href="/about">
                  <Button size="lg" className="bg-[#007A3D] hover:bg-[#006030] text-white">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/78785ce8-938d-455d-bbab-df743741f6ac-SZxVQWTAu2zS70hcBYNVCv7KHszlpV"
                    alt="Gungakabayo Cattle"
                    width={600}
                    height={500}
                    unoptimized
                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#D15B2C] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Experience Natural Goodness?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Explore our wide range of organic products and join thousands of satisfied customers across Zambia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-[#D15B2C] hover:bg-[#B14823] text-white text-lg px-8">
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#007A3D] text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
