'use client';

import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey="EUK6nliWVdB5Nkt4VuNXUsAV7VwBmtwR"
      projectId="1d0226d4-9f84-48d6-9486-b4381e220d9f"
      chain={base}
      config={{
        appearance: {
          name: 'Gungakabayo Enterprise',
          logo: 'https://ljysgitrpszygciwzhbu.supabase.co/storage/v1/object/public/agent-files/c2e3ba20-8f5f-444d-9e21-ebee03e33876/83296eee-aed0-45f7-b1c2-53e6a2a5e01c_GHD LOGO 2020 HD.png',
          mode: 'auto',
          theme: 'default',
        },
      }}
    >
      {children}
    </OnchainKitProvider>
  );
}
