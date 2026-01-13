'use client';

import { useState } from "react";
import { Search, ShoppingCart, Package } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingShopButton } from "@/components/floating-shop-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { useCart } from "@/contexts/cart-context";
import { toast } from "sonner";
import { products, type Product } from "@/data/products";
import Image from "next/image";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  const filteredProducts: Product[] = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Our Products
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center mb-8">
            Explore our comprehensive range of organic and sustainable products
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              className="pl-12 h-14 text-lg bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#EAD6B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setSelectedCategory}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="livestock">Livestock</TabsTrigger>
              <TabsTrigger value="crops">Crops</TabsTrigger>
              <TabsTrigger value="processed">Processed</TabsTrigger>
              <TabsTrigger value="grains">Grains</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory}>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ScrollReveal
                      key={product.id}
                      delay={index * 50}
                    >
                      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                        <div className="relative h-48 overflow-hidden group">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            unoptimized
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-[#007A3D] text-white">
                              {product.available ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-[#007A3D] mb-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-3xl font-bold text-[#D15B2C]">
                                ${product.price.toFixed(2)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {product.quantity} {product.unit} available
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 flex gap-2">
                          <Button
                            className="flex-1 bg-[#007A3D] hover:bg-[#006030] text-white"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

