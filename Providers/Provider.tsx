"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "@/components/ui/toaster";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <CartProvider
        currency="USD"
        mode="payment"
        shouldPersist={true}
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
        successUrl="http://localhost:3000/sucess"
        cancelUrl="http://localhost:3000/error"
        billingAddressCollection={true}
        language="en-US"
      >
        <Toaster />
        {children}
      </CartProvider>
    </NextUIProvider>
  );
}
