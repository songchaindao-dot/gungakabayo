'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FloatingShopButton } from '@/components/floating-shop-button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download, Barcode as BarcodeIcon, Package } from 'lucide-react'

interface ProductType {
  id: string
  name: string
  baseCode: string
}

const productTypes: Array<ProductType> = [
  { id: 'chicken', name: 'Chicken Broilers', baseCode: '25753384' },
  { id: 'quail-eggs', name: 'Quail Eggs', baseCode: '25753385' },
  { id: 'quail-meat', name: 'Quail Meat Pre-Packs', baseCode: '25753386' },
  { id: 'goat', name: 'Goat Meat', baseCode: '25753387' },
  { id: 'duck', name: 'Duck Meat', baseCode: '25753388' },
  { id: 'turkey', name: 'Turkey', baseCode: '25753389' },
  { id: 'eggs', name: 'Free-range Eggs', baseCode: '25753390' },
  { id: 'maize', name: 'Maize', baseCode: '25753391' },
  { id: 'groundnuts', name: 'Groundnuts', baseCode: '25753392' },
  { id: 'cassava', name: 'Cassava', baseCode: '25753393' },
  { id: 'beans', name: 'Beans', baseCode: '25753394' },
  { id: 'sweet-potato', name: 'Sweet Potatoes', baseCode: '25753395' },
  { id: 'vegetables', name: 'Seasonal Vegetables', baseCode: '25753396' },
  { id: 'dried-meat', name: 'Dried Meats', baseCode: '25753397' },
  { id: 'flour', name: 'Organic Flours', baseCode: '25753398' },
  { id: 'feed', name: 'Animal Feed Supplements', baseCode: '25753399' },
]

export default function BarcodePage(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<string>('')
  const [stockNumber, setStockNumber] = useState<string>('')
  const [generatedCode, setGeneratedCode] = useState<string>('')
  const [barcodeGenerated, setBarcodeGenerated] = useState<boolean>(false)

  const generateBarcode = (): void => {
    if (!selectedProduct || !stockNumber) return

    const product = productTypes.find((p: ProductType) => p.id === selectedProduct)
    if (!product) return

    const paddedStock = stockNumber.padStart(5, '0')
    const fullCode = `${product.baseCode}${paddedStock}`
    setGeneratedCode(fullCode)
    setBarcodeGenerated(true)
  }

  const downloadBarcode = (): void => {
    if (!barcodeGenerated || !generatedCode) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 600
    canvas.height = 300

    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const barWidth = 3
    const startX = 50
    let currentX = startX

    ctx.fillStyle = 'black'
    for (let i = 0; i < generatedCode.length; i++) {
      const digit = parseInt(generatedCode[i], 10)
      const pattern = digit % 2 === 0 ? [1, 0, 1, 0] : [0, 1, 0, 1]
      
      pattern.forEach((bar: number) => {
        if (bar === 1) {
          ctx.fillRect(currentX, 50, barWidth, 150)
        }
        currentX += barWidth
      })
      currentX += 2
    }

    ctx.fillStyle = 'black'
    ctx.font = 'bold 24px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(generatedCode, canvas.width / 2, 230)

    const product = productTypes.find((p: ProductType) => p.id === selectedProduct)
    if (product) {
      ctx.font = '18px Arial'
      ctx.fillText(product.name, canvas.width / 2, 260)
      ctx.fillText(`Unit #${stockNumber}`, canvas.width / 2, 285)
    }

    canvas.toBlob((blob: Blob | null) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `barcode-${generatedCode}.jpg`
      link.click()
      URL.revokeObjectURL(url)
    }, 'image/jpeg', 0.95)
  }

  const resetForm = (): void => {
    setSelectedProduct('')
    setStockNumber('')
    setGeneratedCode('')
    setBarcodeGenerated(false)
  }

  const selectedProductData = productTypes.find((p: ProductType) => p.id === selectedProduct)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAD6B7] to-white">
      <Navigation />
      <FloatingShopButton />
      <WhatsAppButton />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#007A3D] rounded-full mb-4">
              <BarcodeIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#007A3D] mb-4">
              Product Barcode Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Generate unique product barcodes for Gungakabayo products. Each barcode includes a product-specific code and unit number for tracking and labeling.
            </p>
          </div>

          <Card className="shadow-xl border-none">
            <CardHeader className="bg-gradient-to-r from-[#007A3D] to-[#005A2D] text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Package className="w-6 h-6" />
                Generate Product Barcode
              </CardTitle>
              <CardDescription className="text-white/90">
                Select a product and enter the stock number to generate a unique barcode
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="product" className="text-lg font-semibold text-[#007A3D]">
                    Select Product
                  </Label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger id="product" className="mt-2 h-12 text-lg">
                      <SelectValue placeholder="Choose a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((product: ProductType) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} (Base Code: {product.baseCode})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedProduct && (
                  <div className="p-4 bg-[#EAD6B7] rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Base Code:</span> {selectedProductData?.baseCode}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Final barcode will be: {selectedProductData?.baseCode}
                      <span className="font-mono font-bold">XXXXX</span> (where XXXXX is the stock number)
                    </p>
                  </div>
                )}

                <div>
                  <Label htmlFor="stock-number" className="text-lg font-semibold text-[#007A3D]">
                    Stock Number
                  </Label>
                  <Input
                    id="stock-number"
                    type="number"
                    placeholder="e.g., 300"
                    value={stockNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStockNumber(e.target.value)}
                    className="mt-2 h-12 text-lg"
                    min="1"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter the unit number for this specific product (e.g., if this is chicken #300, enter 300)
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={generateBarcode}
                    disabled={!selectedProduct || !stockNumber}
                    className="flex-1 h-12 text-lg bg-[#007A3D] hover:bg-[#006030] text-white"
                  >
                    <BarcodeIcon className="w-5 h-5 mr-2" />
                    Generate Barcode
                  </Button>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="h-12 px-8 text-lg border-2 border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                  >
                    Reset
                  </Button>
                </div>

                {barcodeGenerated && generatedCode && (
                  <div className="mt-8 p-8 bg-white border-4 border-[#007A3D] rounded-lg">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[#007A3D] mb-2">
                        Barcode Generated Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Product: <span className="font-semibold">{selectedProductData?.name}</span>
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 mb-6">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-5xl font-mono font-bold text-[#007A3D] tracking-wider">
                          {generatedCode}
                        </div>
                        <div className="w-full max-w-md h-40 bg-white flex items-center justify-center border-2 border-gray-200 rounded">
                          <svg width="100%" height="100%" viewBox="0 0 600 200">
                            {generatedCode.split('').map((digit: string, index: number) => {
                              const x = 50 + index * 40
                              return (
                                <g key={index}>
                                  <rect x={x} y="30" width="4" height="100" fill="black" />
                                  <rect x={x + 8} y="30" width="4" height="100" fill="black" />
                                  <rect x={x + 16} y="30" width="4" height="100" fill="black" />
                                  <rect x={x + 24} y="30" width="4" height="100" fill="black" />
                                </g>
                              )
                            })}
                            <text x="300" y="160" fontSize="20" textAnchor="middle" fill="black">
                              {generatedCode}
                            </text>
                          </svg>
                        </div>
                        <div className="text-center text-gray-600">
                          <p className="font-semibold">{selectedProductData?.name}</p>
                          <p className="text-sm">Unit #{stockNumber}</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={downloadBarcode}
                      className="w-full h-14 text-lg bg-[#D15B2C] hover:bg-[#B14823] text-white"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Barcode as JPG
                    </Button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      The barcode will be downloaded as a high-quality JPG file ready for printing on product stickers
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#007A3D]/10 to-[#D15B2C]/10 rounded-lg">
                <h4 className="font-bold text-[#007A3D] mb-3 flex items-center gap-2">
                  <BarcodeIcon className="w-5 h-5" />
                  How It Works
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D15B2C] font-bold">1.</span>
                    Select the product type from the dropdown menu
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D15B2C] font-bold">2.</span>
                    Enter the specific unit/stock number (e.g., 300 for the 300th chicken)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D15B2C] font-bold">3.</span>
                    Click "Generate Barcode" to create the unique product code
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D15B2C] font-bold">4.</span>
                    Download the barcode as a JPG file to print on product stickers
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#007A3D] mb-2">Unique Tracking</h3>
                <p className="text-sm text-gray-600">
                  Each product gets a unique identifier for inventory management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#D15B2C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarcodeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#007A3D] mb-2">Easy Scanning</h3>
                <p className="text-sm text-gray-600">
                  Standard barcode format compatible with most scanners
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#007A3D] mb-2">Print Ready</h3>
                <p className="text-sm text-gray-600">
                  High-quality JPG format perfect for product sticker printing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
