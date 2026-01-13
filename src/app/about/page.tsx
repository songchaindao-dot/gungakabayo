'use client';

import Image from "next/image";
import type { ReactNode } from "react";
import {
  Leaf,
  Shield,
  Heart,
  Users,
  Target,
  Eye,
  Handshake,
  Sparkles,
  Award,
  DollarSign
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingShopButton } from "@/components/floating-shop-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

interface Value {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Reason {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AboutPage() {
  const coreValues: Value[] = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "Committed to environmentally friendly practices that protect our planet for future generations"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality",
      description:
        "Delivering premium products that meet the highest standards of excellence"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Integrity",
      description:
        "Operating with honesty, transparency, and ethical business practices"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Welfare",
      description: "Ensuring humane treatment and care for all livestock"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "Supporting local farmers and contributing to community development"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our methods and products"
    }
  ];

  const whyChooseUs: Reason[] = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Products",
      description: "Premium organic produce"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable Practices",
      description: "Eco-friendly farming methods"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Locally Sourced",
      description: "Supporting Zambian farmers"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Fair and affordable rates"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Variety of Products",
      description: "Wide product selection"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Food Safety",
      description: "Rigorous quality controls"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Service",
      description: "Dedicated support team"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description: "Open and honest operations"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovative Products",
      description: "Creative solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Focus",
      description: "Building stronger communities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/3fae52f8-2abc-46b8-8ba3-0001a8302794-tx5dMUGAllhzd4VNcl5UDqlK1bbK8t)"
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Gungakabayo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            A proudly Zambian agribusiness company dedicated to sustainable and
            organic food production since 2019
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/78785ce8-938d-455d-bbab-df743741f6ac-SZxVQWTAu2zS70hcBYNVCv7KHszlpV"
                  alt="Gungakabayo Cattle"
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#007A3D] mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2019, Gungakabayo Enterprise Limited emerged from a
                  vision to transform Zambian agriculture. We started with a
                  simple belief: that organic, sustainable farming methods could
                  provide healthier food while protecting our environment.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Today, we have grown into one of Zambia&apos;s most trusted
                  names in agribusiness, providing everything from premium quail
                  products to organic crops and processed foods. Our commitment
                  to quality, sustainability, and community has remained
                  unchanged.
                </p>
                <p className="text-lg text-gray-600">
                  We work closely with local farmers, employ sustainable
                  practices, and continuously innovate to bring the best
                  products to Zambian families while contributing to national
                  food security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/f49296dc-e8a9-451f-91a0-60003a9cde49-FevozgKWLyaCh79huWbOMj7JNjbA5R"
            alt="Gungakabayo Farm Operations"
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#007A3D]/70 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Proudly Zambian
              </h2>
              <p className="text-xl md:text-2xl">
                Sustainable farming practices since 2019
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-[#EAD6B7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-[#007A3D] text-white rounded-full text-sm font-medium">
                  Our Vision
                </div>
                <h2 className="text-4xl font-bold text-[#007A3D] mb-6">
                  To be Zambia&apos;s Leading Agribusiness
                </h2>
                <p className="text-lg text-gray-700">
                  We envision a future where Gungakabayo Enterprise Limited is
                  recognized as the premier provider of organic and sustainable
                  food products throughout Zambia, setting the standard for
                  quality, innovation, and environmental responsibility in the
                  agricultural sector.
                </p>
              </div>

              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-[#D15B2C] text-white rounded-full text-sm font-medium">
                  Our Mission
                </div>
                <h2 className="text-4xl font-bold text-[#007A3D] mb-6">
                  Feeding the Nation Naturally
                </h2>
                <p className="text-lg text-gray-700">
                  Our mission is to produce and distribute high-quality organic
                  food products using sustainable farming practices, while
                  supporting local communities, promoting food security, and
                  maintaining the highest standards of animal welfare and
                  environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and action we
                take
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <Card className="bg-white border-2 border-[#EAD6B7] hover:border-[#007A3D] transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center mb-6 text-white">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#007A3D] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-[#EAD6B7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Ten compelling reasons to partner with Gungakabayo Enterprise
                Limited
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((reason, index) => (
                <ScrollReveal key={reason.title} delay={index * 50}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="w-12 h-12 bg-[#D15B2C] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {reason.icon}
                    </div>
                    <h3 className="font-bold text-[#007A3D] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
