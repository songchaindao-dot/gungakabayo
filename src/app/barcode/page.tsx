'use client';

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingShopButton } from "@/components/floating-shop-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Download, Barcode as BarcodeIcon, Package } from "lucide-react";
import { barcodeProducts } from "@/data/products";
import JsBarcode from "jsbarcode";
import html2canvas from "html2canvas";
import { toast } from "sonner";

export default function BarcodePage() {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [stockNumber, setStockNumber] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedProduct = barcodeProducts.find(
    product => product.id === selectedProductId
  );

  useEffect(() => {
    if (!selectedProduct || !stockNumber || !svgRef.current) {
      return;
    }
    const paddedStock = stockNumber.padStart(6, "0");
    const fullCode = `${selectedProduct.baseCode}${paddedStock}`;
    setGeneratedCode(fullCode);
    JsBarcode(svgRef.current, fullCode, {
      format: "CODE128",
      width: 2,
      height: 80,
      displayValue: true,
      margin: 10
    });
  }, [selectedProduct, stockNumber]);

  const handleGenerate = () => {
    if (!selectedProduct || !stockNumber) {
      toast.error("Select a product and enter a stock number.");
      return;
    }
    if (!/^\d+$/.test(stockNumber)) {
      toast.error("Stock number must be digits only.");
      return;
    }
    if (stockNumber.length > 6) {
      toast.error("Stock number must be at most 6 digits.");
      return;
    }
    if (!svgRef.current) {
      return;
    }
    const paddedStock = stockNumber.padStart(6, "0");
    const fullCode = `${selectedProduct.baseCode}${paddedStock}`;
    setGeneratedCode(fullCode);
    JsBarcode(svgRef.current, fullCode, {
      format: "CODE128",
      width: 2,
      height: 80,
      displayValue: true,
      margin: 10
    });
    toast.success("Barcode generated");
  };

  const handleDownload = async () => {
    if (!generatedCode || !containerRef.current) {
      toast.error("Generate a barcode first.");
      return;
    }
    const canvas = await html2canvas(containerRef.current, {
      backgroundColor: "#ffffff",
      scale: 2
    });
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `barcode-${generatedCode}.jpg`;
    link.click();
  };

  const handleReset = () => {
    setSelectedProductId("");
    setStockNumber("");
    setGeneratedCode("");
  };

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
              Generate unique product barcodes for Gungakabayo products. Each
              barcode includes a product-specific base code and a 6-digit stock
              number for tracking and labeling.
            </p>
          </div>

          <Card className="shadow-xl border-none">
            <CardHeader className="bg-gradient-to-r from-[#007A3D] to-[#005A2D] text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Package className="w-6 h-6" />
                Generate Product Barcode
              </CardTitle>
              <CardDescription className="text-white/90">
                Select a product and enter the stock number to generate a
                14-digit CODE128 barcode
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div>
                <Label
                  htmlFor="product"
                  className="text-lg font-semibold text-[#007A3D]"
                >
                  Select Product
                </Label>
                <Select
                  value={selectedProductId}
                  onValueChange={setSelectedProductId}
                >
                  <SelectTrigger id="product" className="mt-2 h-12 text-lg">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {barcodeProducts.map(product => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name} (Base Code: {product.baseCode})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedProduct && (
                <div className="p-4 bg-[#EAD6B7] rounded-lg text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Base Code:</span>{" "}
                    {selectedProduct.baseCode}
                  </p>
                  <p>
                    Final barcode will be: {selectedProduct.baseCode}
                    <span className="font-mono font-bold">XXXXXX</span> (where
                    XXXXXX is the stock number padded to 6 digits)
                  </p>
                </div>
              )}

              <div>
                <Label
                  htmlFor="stock-number"
                  className="text-lg font-semibold text-[#007A3D]"
                >
                  Stock Number
                </Label>
                <Input
                  id="stock-number"
                  type="number"
                  placeholder="e.g., 300"
                  value={stockNumber}
                  onChange={event => setStockNumber(event.target.value)}
                  className="mt-2 h-12 text-lg"
                  min={1}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter the unit number for this specific product. It will be
                  padded to 6 digits in the final barcode.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleGenerate}
                  className="flex-1 h-12 text-lg bg-[#007A3D] hover:bg-[#006030] text-white"
                >
                  <BarcodeIcon className="w-5 h-5 mr-2" />
                  Generate Barcode
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="h-12 px-8 text-lg border-2 border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white"
                >
                  Reset
                </Button>
              </div>

              {generatedCode && (
                <div className="mt-8 p-8 bg-white border-4 border-[#007A3D] rounded-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#007A3D] mb-2">
                      Barcode Generated Successfully
                    </h3>
                    <p className="text-gray-600">
                      Product:{" "}
                      <span className="font-semibold">
                        {selectedProduct?.name}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Code:{" "}
                      <span className="font-mono font-bold">
                        {generatedCode}
                      </span>
                    </p>
                  </div>

                  <div
                    ref={containerRef}
                    className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 mb-6 flex flex-col items-center gap-4"
                  >
                    <svg
                      ref={svgRef}
                      width="300"
                      height="120"
                    />
                    <div className="text-center text-gray-600">
                      <p className="font-semibold">
                        {selectedProduct?.name}
                      </p>
                      <p className="text-sm">
                        Unit #
                        {stockNumber.padStart(6, "0")}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleDownload}
                    className="w-full h-14 text-lg bg-[#D15B2C] hover:bg-[#B14823] text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Barcode as JPG
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    The barcode will be downloaded as a high-quality JPG file
                    named <span className="font-mono">barcode-{generatedCode}.jpg</span> ready
                    for printing on product stickers.
                  </p>
                </div>
              )}

              <div className="mt-8 p-6 bg-gradient-to-br from-[#007A3D]/10 to-[#D15B2C]/10 rounded-lg">
                <h4 className="font-bold text-[#007A3D] mb-3 flex items-center gap-2">
                  <BarcodeIcon className="w-5 h-5" />
                  How It Works
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    1. Select the product type from the dropdown menu.
                  </li>
                  <li>
                    2. Enter the specific unit or stock number (up to 6 digits).
                  </li>
                  <li>
                    3. Click &quot;Generate Barcode&quot; to create the
                    14-digit product code.
                  </li>
                  <li>
                    4. Download the barcode as a JPG file to print on product
                    stickers.
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
                <h3 className="font-bold text-[#007A3D] mb-2">
                  Unique Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Each product gets a unique identifier for inventory management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#D15B2C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarcodeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#007A3D] mb-2">CODE128 Standard</h3>
                <p className="text-sm text-gray-600">
                  Uses the widely supported CODE128 barcode format.
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
                  High-quality JPG format perfect for product sticker printing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

