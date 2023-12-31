'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import { CartItems } from './Cart-items';

export function CartSummary() {
  const {
    formattedTotalPrice,
    redirectToCheckout,
    totalPrice,
    cartDetails,
    cartCount,
  } = useShoppingCart();
  const [isLoading, setIsLoading] = useState(false);
  const Isdisabled = cartCount! === 0 || isLoading;
  const shippingAmount = cartCount! > 0 ? 500 : 0;
  const totalamount = shippingAmount + totalPrice!;

  async function onCheckout(event: any) {
    event?.preventDefault();
    setIsLoading(true);
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log('result');
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-white px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order Summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({
              value: shippingAmount,
              currency: 'USD',
              language: 'en-US',
            })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {formatCurrencyString({
              value: totalamount,
              currency: 'USD',
              language: 'en-US',
            })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button className="w-full" onClick={onCheckout} disabled={Isdisabled}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? 'Loading...' : 'checkout'}
        </Button>
      </div>
    </section>
  );
}
