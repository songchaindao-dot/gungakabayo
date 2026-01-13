'use client';

import { useState } from "react";
import type { ReactNode } from "react";
import {
  BookOpen,
  Sprout,
  Heart,
  Leaf,
  Download,
  Video,
  Clock
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingShopButton } from "@/components/floating-shop-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Article {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  icon: ReactNode;
}

interface TutorialVideo {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

interface Guide {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function LearningPage() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles: Article[] = [
    {
      title: "Benefits of Organic Farming",
      category: "Farming",
      excerpt:
        "Organic farming is more than a trend—it is a commitment to sustainable agriculture. Learn about the numerous benefits including improved soil health, reduced chemical exposure, enhanced biodiversity, and better nutrition in crops.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      readTime: "5 min read",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      title: "Quail Farming: A Beginner's Guide",
      category: "Livestock",
      excerpt:
        "Quail farming is an excellent venture for small-scale farmers. This comprehensive guide covers everything from setting up your quail housing, feeding requirements, breeding techniques, disease prevention, and maximizing egg production.",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
      readTime: "8 min read",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Sustainable Livestock Care",
      category: "Livestock",
      excerpt:
        "Proper livestock care is essential for both animal welfare and productivity. Discover sustainable practices including natural feeding, rotational grazing, disease prevention, stress reduction, and creating optimal living conditions for your animals.",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
      readTime: "6 min read",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Maximizing Crop Yields Naturally",
      category: "Farming",
      excerpt:
        "Increase your crop yields without harmful chemicals. Learn about companion planting, natural pest control, composting techniques, crop rotation, water conservation, and soil enrichment methods that work with nature.",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
      readTime: "7 min read",
      icon: <Sprout className="w-5 h-5" />
    },
    {
      title: "Nutritional Benefits of Quail Products",
      category: "Nutrition",
      excerpt:
        "Quail eggs and meat are nutritional powerhouses. Discover why these small products pack a big punch—rich in protein, vitamins B12 and A, iron, and selenium. Learn how to incorporate them into a healthy diet.",
      image:
        "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&q=80",
      readTime: "4 min read",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Safe Food Handling Practices",
      category: "Food Safety",
      excerpt:
        "Food safety starts at the source and continues in your kitchen. Learn essential practices for washing, storing, preparing, and cooking food to prevent contamination and ensure your family&apos;s health.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
      readTime: "5 min read",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const videos: TutorialVideo[] = [
    {
      title: "Organic Farming Techniques",
      description:
        "Learn the fundamentals of organic farming from experienced practitioners",
      thumbnail:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
      duration: "12:30"
    },
    {
      title: "Raising Healthy Chickens",
      description:
        "Complete guide to chicken care, feeding, and disease prevention",
      thumbnail:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
      duration: "15:45"
    },
    {
      title: "Sustainable Agriculture Practices",
      description:
        "Discover how to farm sustainably and protect the environment",
      thumbnail:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      duration: "18:20"
    }
  ];

  const guides: Guide[] = [
    {
      title: "Complete Organic Farming Guide",
      description:
        "A comprehensive PDF guide covering all aspects of organic farming",
      icon: <Download className="w-6 h-6" />
    },
    {
      title: "Livestock Care Manual",
      description:
        "Detailed manual for raising and caring for various livestock",
      icon: <Download className="w-6 h-6" />
    },
    {
      title: "Crop Planning Calendar",
      description:
        "Seasonal planting and harvesting guide for Zambian farmers",
      icon: <Download className="w-6 h-6" />
    },
    {
      title: "Food Safety Handbook",
      description:
        "Essential food safety practices for farmers and consumers",
      icon: <Download className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Learning Hub</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expand your knowledge with our educational resources on farming,
            sustainability, and healthy living
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#007A3D] mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Educational content to help you succeed in sustainable
                agriculture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ScrollReveal key={article.title} delay={index * 100}>
                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden group">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        unoptimized
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-[#007A3D] text-white flex items-center gap-1">
                          {article.icon}
                          <span>{article.category}</span>
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#007A3D] mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {expandedArticle === index
                          ? article.excerpt
                          : `${article.excerpt.substring(0, 100)}...`}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                        onClick={() =>
                          setExpandedArticle(
                            expandedArticle === index ? null : index
                          )
                        }
                      >
                        {expandedArticle === index ? "Show Less" : "Read More"}
                      </Button>
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
            <div className="text-center mb-12">
              <Video className="w-12 h-12 text-[#D15B2C] mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-[#007A3D] mb-4">
                Video Tutorials
              </h2>
              <p className="text-xl text-gray-700">
                Watch and learn from experienced farmers and experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <ScrollReveal key={video.title} delay={index * 100}>
                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden group cursor-pointer">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        unoptimized
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#D15B2C] flex items-center justify-center">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Badge className="bg-black/70 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#007A3D] mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600">{video.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Download className="w-12 h-12 text-[#D15B2C] mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-[#007A3D] mb-4">
                Downloadable Guides
              </h2>
              <p className="text-xl text-gray-600">
                Free PDF guides to take your farming knowledge to the next level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <ScrollReveal key={guide.title} delay={index * 100}>
                  <Card className="bg-[#EAD6B7] border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-6">
                      <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#007A3D] mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-3">
                          {guide.description}
                        </p>
                        <Button
                          size="sm"
                          className="bg-[#D15B2C] hover:bg-[#B14823] text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
