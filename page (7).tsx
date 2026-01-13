'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Package } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FloatingShopButton } from '@/components/floating-shop-button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCart } from '@/contexts/cart-context'
import { toast } from 'sonner'

interface Product {
  id: string
  name: string
  category: string
  quantity: string
  unit: string
  price: number
  image: string
  description: string
  available: boolean
}

export default function ProductsPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { addToCart } = useCart()

  const products: Array<Product> = [
    {
      id: 'quail-eggs',
      name: 'Quail Eggs',
      category: 'livestock',
      quantity: '120,000',
      unit: 'trays',
      price: 15.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aic14wmvxlhdf4q6igt-SnbA5uJ1AhgKuqA4ljVdr7ktWD0vGs.jpg?download=1',
      description: 'Premium quail eggs rich in nutrients and protein. Perfect for healthy eating.',
      available: true,
    },
    {
      id: 'quail-meat',
      name: 'Quail Meat Pre-Packs',
      category: 'livestock',
      quantity: '200,000',
      unit: 'packs',
      price: 12.50,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh36zybt14whvxlhdbexdfk8-QdKcZB6IVSVZts6eOianiU5lktV1Q9.jpg?download=1',
      description: 'Fresh, pre-packaged quail meat. Lean and delicious protein source.',
      available: true,
    },
    {
      id: 'chicken-broilers',
      name: 'Chicken Broilers',
      category: 'livestock',
      quantity: '150,000',
      unit: 'birds',
      price: 8.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1',
      description: 'Free-range chicken broilers raised with care and quality feed.',
      available: true,
    },
    {
      id: 'goat-meat',
      name: 'Goat Meat',
      category: 'livestock',
      quantity: '50,000',
      unit: 'kg',
      price: 6.75,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh36zyg114wivxlh4vmyc2cy-SUEHc1dSv5JmaKZHxWBZQl2EAaeWi6.jpg?download=1',
      description: 'Fresh goat meat from naturally raised livestock.',
      available: true,
    },
    {
      id: 'duck-meat',
      name: 'Duck Meat',
      category: 'livestock',
      quantity: '30,000',
      unit: 'kg',
      price: 9.25,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370ahx14wlvxlhf2vj2he3-G3z6UiZr18DsjdwOF2YEueUi8CnxaY.jpg?download=1',
      description: 'Premium duck meat with rich flavor and nutrition.',
      available: true,
    },
    {
      id: 'turkey',
      name: 'Turkey',
      category: 'livestock',
      quantity: '20,000',
      unit: 'birds',
      price: 18.50,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5m14wsvxlh69zifb0f-kQNY0PeE9kRcGKpN6HJk3fMbOneKx0.jpg?download=1',
      description: 'Farm-raised turkeys perfect for family meals.',
      available: true,
    },
    {
      id: 'free-range-eggs',
      name: 'Free-range Eggs',
      category: 'livestock',
      quantity: '90,000',
      unit: 'trays',
      price: 11.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5u14wtvxlh3w939cu6-6fMPu58vTEwyZZGvnddTx1HACrlVvO.jpg?download=1',
      description: 'Fresh eggs from free-range chickens. Natural and nutritious.',
      available: true,
    },
    {
      id: 'maize',
      name: 'Maize',
      category: 'crops',
      quantity: '200',
      unit: 'tons',
      price: 350.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x6y14wuvxlhdk9085a6-uvlCloGkY64yxvlpzg9OA9YxEbvxNl.jpg?download=1',
      description: 'Organic maize grown using sustainable farming practices.',
      available: true,
    },
    {
      id: 'groundnuts',
      name: 'Groundnuts',
      category: 'crops',
      quantity: '150',
      unit: 'tons',
      price: 425.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3711un14wvvxlh7p89dl5t-CoI4Gw8hAld1GPsnruWQLjgTIoiwS6.jpg?download=1',
      description: 'High-quality groundnuts perfect for various uses.',
      available: true,
    },
    {
      id: 'cassava',
      name: 'Cassava',
      category: 'crops',
      quantity: '100',
      unit: 'tons',
      price: 280.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x3j14wrvxlhev32a3ws-Cc4c8MRy4HIPXwKdl3Kx56POs26k7i.jpg?download=1',
      description: 'Fresh cassava roots from our organic farms.',
      available: true,
    },
    {
      id: 'beans',
      name: 'Beans',
      category: 'crops',
      quantity: '80',
      unit: 'tons',
      price: 385.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371kn014xbvxlhhymsdr3m-d0Rxcj50FmJ8D1ivdel3mAaF6mlLmu.jpg?download=1',
      description: 'Various bean varieties rich in protein and fiber.',
      available: true,
    },
    {
      id: 'sweet-potatoes',
      name: 'Sweet Potatoes',
      category: 'crops',
      quantity: '60',
      unit: 'tons',
      price: 310.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ko714xcvxlh7s7idypc-C3xzLLiNq74JL7LajhYH0eTQX3eSWI.jpg?download=1',
      description: 'Nutritious sweet potatoes grown organically.',
      available: true,
    },
    {
      id: 'seasonal-vegetables',
      name: 'Seasonal Vegetables',
      category: 'crops',
      quantity: '40',
      unit: 'tons',
      price: 290.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ks514xdvxlh1kt38r2r-tMqXQiWiwPOCmTWlbl7HGYnEXOkdHT.jpg?download=1',
      description: 'Fresh seasonal vegetables harvested at peak ripeness.',
      available: true,
    },
    {
      id: 'dried-meats',
      name: 'Dried Meats',
      category: 'processed',
      quantity: '10,000',
      unit: 'packs',
      price: 14.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3727b214xhvxlhclct64db-HvqiiJZFX8EYbf9On8NJLjd7F2KEoB.jpg?download=1',
      description: 'Naturally dried meat products with no preservatives.',
      available: true,
    },
    {
      id: 'organic-flours',
      name: 'Organic Flours',
      category: 'processed',
      quantity: '15,000',
      unit: 'bags',
      price: 22.50,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3727ob14xivxlhdczq8rx3-vMIqxbHurWSDFAvODrQYzBfuegkarm.jpg?download=1',
      description: 'Stone-ground organic flours from various grains.',
      available: true,
    },
    {
      id: 'animal-feed',
      name: 'Animal Feed Supplements',
      category: 'processed',
      quantity: '8,000',
      unit: 'packs',
      price: 35.75,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uwi14xsvxlhanvaf9je-cBTMJFQUBcTsfXpu2zWjMeowZeZfcw.jpg?download=1',
      description: 'Natural feed supplements for livestock health.',
      available: true,
    },
    {
      id: 'wheat',
      name: 'Wheat',
      category: 'grains',
      quantity: '60',
      unit: 'tons',
      price: 395.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372utp14xovxlhf4c27386-WA0cBXh3HQEWAQLaO0hMd8V3uyxqqT.jpg?download=1',
      description: 'Premium quality wheat for milling and baking.',
      available: true,
    },
    {
      id: 'millet',
      name: 'Millet',
      category: 'grains',
      quantity: '50',
      unit: 'tons',
      price: 340.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uv714xqvxlh0lynacgd-ci99rFROamEHdTclxpjyMAcJToWSe2.jpg?download=1',
      description: 'Nutritious millet grains rich in minerals.',
      available: true,
    },
    {
      id: 'sorghum',
      name: 'Sorghum',
      category: 'grains',
      quantity: '40',
      unit: 'tons',
      price: 325.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uum14xpvxlhay8pd3ai-w5bB1FF0Zf3zwOvgG0zoApUwYw6TIh.jpg?download=1',
      description: 'High-quality sorghum for various applications.',
      available: true,
    },
    {
      id: 'rice',
      name: 'Rice',
      category: 'grains',
      quantity: '70',
      unit: 'tons',
      price: 425.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uvr14xrvxlh7h2felu3-DZxcdaGWuAf2p7rhdXw9xf88B00LaK.jpg?download=1',
      description: 'Premium rice varieties grown organically.',
      available: true,
    },
    {
      id: 'quail-chicks',
      name: 'Quail Chicks',
      category: 'livestock',
      quantity: '50,000',
      unit: 'chicks',
      price: 2.50,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aic14wmvxlhdf4q6igt-SnbA5uJ1AhgKuqA4ljVdr7ktWD0vGs.jpg?download=1',
      description: 'Healthy quail chicks perfect for starting your own quail farm.',
      available: true,
    },
    {
      id: 'ducks-and-chicks',
      name: 'Ducks and Chicks',
      category: 'livestock',
      quantity: '30,000',
      unit: 'birds',
      price: 4.50,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370ahx14wlvxlhf2vj2he3-G3z6UiZr18DsjdwOF2YEueUi8CnxaY.jpg?download=1',
      description: 'Mixed ducks and chicks for diverse poultry farming.',
      available: true,
    },
    {
      id: 'exotic-village-chickens',
      name: 'Exotic Village Chickens',
      category: 'livestock',
      quantity: '25,000',
      unit: 'birds',
      price: 7.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1',
      description: 'Premium exotic village chickens with unique characteristics.',
      available: true,
    },
    {
      id: 'day-old-village-chickens',
      name: 'Day Old Village Chickens',
      category: 'livestock',
      quantity: '40,000',
      unit: 'chicks',
      price: 1.99,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1',
      description: 'Fresh day-old village chickens ready for raising.',
      available: true,
    },
    {
      id: 'guineafowls-eggs-chicks',
      name: 'Guineafowls Eggs and Chicks',
      category: 'livestock',
      quantity: '15,000',
      unit: 'units',
      price: 5.75,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5u14wtvxlh3w939cu6-6fMPu58vTEwyZZGvnddTx1HACrlVvO.jpg?download=1',
      description: 'Guineafowl eggs and chicks, great for pest control and meat.',
      available: true,
    },
    {
      id: 'sunflower',
      name: 'Sunflower',
      category: 'crops',
      quantity: '45',
      unit: 'tons',
      price: 365.00,
      image: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ks514xdvxlh1kt38r2r-tMqXQiWiwPOCmTWlbl7HGYnEXOkdHT.jpg?download=1',
      description: 'High-quality sunflower seeds for oil production and consumption.',
      available: true,
    },
  ]

  const filteredProducts: Array<Product> = products.filter((product) => {
    const matchesSearch: boolean = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory: boolean = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product: Product): void => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
    })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#007A3D] to-[#005A2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Our Products</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center mb-8">
            Explore our comprehensive range of organic and sustainable products
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#EAD6B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
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
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ScrollReveal key={product.id} delay={index * 50}>
                      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                        <div className="relative h-48 overflow-hidden group">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-[#007A3D] text-white">
                              {product.available ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-[#007A3D] mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-3xl font-bold text-[#D15B2C]">${product.price.toFixed(2)}</div>
                              <div className="text-sm text-gray-500">{product.quantity} {product.unit} available</div>
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
  )
}
