"use client";
// import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "@/components/ui/toaster";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      currency="USD"
      shouldPersist={true}
      cartMode="client-only"
      successUrl="http://localhost:3000/sucess"
      cancelUrl="http://localhost:3000/error"
      billingAddressCollection={true}
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      language="en-US"
    >
      <Toaster />
      {children}
    </CartProvider>
  );
}
