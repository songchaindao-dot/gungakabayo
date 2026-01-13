import type { Metadata } from 'next'
import '@coinbase/onchainkit/styles.css';
import './globals.css';
import { Providers } from './providers';
import { CartProvider } from '@/contexts/cart-context';
import { Toaster } from '@/components/ui/sonner';
import FarcasterWrapper from "@/components/FarcasterWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang="en">
          <body>
            <Providers>
              <CartProvider>
                <FarcasterWrapper>
                  {children}
                </FarcasterWrapper>
                <Toaster />
              </CartProvider>
            </Providers>
          </body>
        </html>
      );
}

export const metadata: Metadata = {
        title: "Gungakabayo Enterprise Limited",
        description: "Feeding the Nation, Naturally - Zambia's trusted name in organic and sustainable food production",
        other: { "fc:frame": JSON.stringify({"version":"next","imageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_miniapp_cmh11k2e008vnvxlh5u1wg2le-deDoQ0XgaSIplO11UFzO78LAi9T3B6","button":{"title":"Open with Ohara","action":{"type":"launch_frame","name":"Gungakabayo Enterprise Limited","url":"https://www.gungakabayo.store","splashImageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg","splashBackgroundColor":"#ffffff"}}}
        ) }
    };
