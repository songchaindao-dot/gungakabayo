import { ReactNode } from 'react';

type FarcasterWrapperProps = {
  children: ReactNode;
};

export default function FarcasterWrapper({ children }: FarcasterWrapperProps) {
  return <>{children}</>;
}

