"use client";
import React from "react";
import { CartSummary } from "../Component/Cart-summary";
import { useShoppingCart } from "use-shopping-cart";
import { CartItems } from "../Component/Cart-items";
import { CartItemsEmpty } from "../Component/Cart-items-empty";

type Props = {};

const Cart = (props: Props) => {
  const { cartDetails } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);

  return (
    <>
      <main className="max-w-2xl mx-auto lg:max-w-7xl py-4 lg:py-8 px-4 lg:px-0">
        <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 capitalize">
          shopping cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="col-span-7">
            <h2 id="cart-heading" className="sr-only"></h2>
            <CartItems cart={cartItems} />
          </section>

          <CartSummary />
        </form>
      </main>
    </>
  );
};

export default Cart;
