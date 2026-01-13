'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, CreditCard, Wallet as WalletIcon, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useCart } from '@/contexts/cart-context';
import { FundCard } from '@coinbase/onchainkit/fund';
import { Wallet, ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance, Identity } from '@coinbase/onchainkit/identity';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [orderProcessing, setOrderProcessing] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  const totalPrice = getTotalPrice();
  const formattedTotal = totalPrice.toFixed(2);

  const handleProcessOrder = async (): Promise<void> => {
    setOrderProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderProcessing(false);
      setOrderComplete(true);
      clearCart();
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">Add some products to get started!</p>
              <Button onClick={() => router.push('/products')} className="bg-[#007A3D] hover:bg-[#006030]">
                Browse Products
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (orderComplete) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-[#007A3D]">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Successful!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your order. We&apos;ll contact you shortly to arrange delivery.
                </p>
                <p className="text-sm text-gray-500">Redirecting to home page...</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-[#EAD6B7] to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#007A3D] mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Your Order ({items.length} items)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.category}</p>
                          <p className="text-[#007A3D] font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Section */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="card">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Card
                      </TabsTrigger>
                      <TabsTrigger value="crypto">
                        <WalletIcon className="w-4 h-4 mr-2" />
                        Base Pay
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800 mb-4">
                          <strong>Purchase using Coinbase, Apple Pay, or Debit Card</strong>
                        </p>
                        <FundCard
                          assetSymbol="ETH"
                          country="US"
                          currency="USD"
                        />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+260 XXX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address</Label>
                        <Input id="address" placeholder="Street address" />
                      </div>
                    </TabsContent>

                    <TabsContent value="crypto" className="space-y-4">
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <p className="text-sm text-indigo-800 mb-4">
                          <strong>Pay with cryptocurrency on Base blockchain</strong>
                        </p>
                        <Wallet>
                          <ConnectWallet className="w-full">
                            <Avatar className="h-6 w-6" />
                            <Name />
                          </ConnectWallet>
                          <WalletDropdown>
                            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                              <Avatar />
                              <Name />
                              <Address />
                              <EthBalance />
                            </Identity>
                            <WalletDropdownDisconnect />
                          </WalletDropdown>
                        </Wallet>
                        <p className="text-xs text-gray-600 mt-4">
                          All funds will be sent to the Ohara wallet linked to this account.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label htmlFor="crypto-name">Full Name</Label>
                        <Input id="crypto-name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="crypto-phone">Phone Number</Label>
                        <Input id="crypto-phone" placeholder="+260 XXX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="crypto-address">Delivery Address</Label>
                        <Input id="crypto-address" placeholder="Street address" />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${formattedTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery</span>
                      <span className="font-semibold">TBD</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#007A3D]">${formattedTotal}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleProcessOrder}
                    disabled={orderProcessing}
                    className="w-full bg-[#007A3D] hover:bg-[#006030] text-white"
                  >
                    {orderProcessing ? 'Processing...' : 'Place Order'}
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    By placing this order, you agree to our terms and conditions.
                    We&apos;ll contact you to confirm delivery details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
