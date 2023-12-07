"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getsizeName } from "@/lib/utils";
import { ArrowRight, Star, Truck } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { fullProduct } from "../interface";

type Props = {
  data: fullProduct;
};

const ProductDetailsDesc = ({ data }: Props) => {
  const [SelectedSize, setSelectedSize] = useState(data.sizes[0]);
  const { addItem, cartDetails, incrementItem } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);
  console.log(cartItems);

  const isInCart = !!cartDetails?.[data._id];
  const { toast } = useToast();
  function Addtocart() {
    const item = {
      ...data,
      productdata: {
        size: SelectedSize,
      },
      sku: data.slug,
      currency: "USD",
    };
    isInCart ? incrementItem(item._id) : addItem(item);
    toast({
      title: `${isInCart ? "Added" : "Purchased"} ${data?.name}`,
      description: `You have added this product into your cart!`,
      action: (
        <Link href="/Cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>open cart </span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    });
  }
  return (
    <div className="">
      <div className="mt-4 mb-6 flex items-center gap-4 md:mb-4">
        <Button className="rounded-full gap-x-2">
          <span className="text-sm">4.2</span>
          <Star className="h-5 w-5" />
        </Button>
        <span className="text-sm text-gray-500 transition duration-100 ">
          56 ratings
        </span>
      </div>
      <div className="mb-2 md:mb-3">
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      </div>
      <div className="">
        <div className="flex items-center gap-2 ">
          <span className="font-bold text-xl text-gray-900 md:text-2xl">
            {formatCurrencyString({
              value: data.price!,
              currency: "USD",
              language: "en-US",
            })}
          </span>
          <span className=" text-red-500 line-through font-bold">
            {formatCurrencyString({
              value: data.price! + 2000,
              currency: "USD",
              language: "en-US",
            })}
          </span>
        </div>
      </div>
      <p className="mt-4 text-base  tracking-wide">{data.description}</p>

      <div className="my-4">
        <p className="">
          Size: <strong>{getsizeName(SelectedSize)} </strong>
        </p>
        {data.sizes.map((sizes, sizesidx) => (
          <Button
            key={sizesidx}
            variant={SelectedSize == sizes ? "default" : "outline"}
            className="mt-4 mr-2"
            onClick={() => {
              setSelectedSize(sizes);
            }}
          >
            {getsizeName(sizes)}
          </Button>
        ))}
      </div>

      <div className="flex gap-2.5 w-full">
        <Button className="w-full lg:w-[70%]" onClick={Addtocart}>
          Add to cart
        </Button>
      </div>

      <div className="mb-2 flex items-center gap-2  text-gray-500 mt-4">
        <Truck />
        <span className="text-sm">2-4 day shipping</span>{" "}
        <span className="text-sm text-gray-500">incl.Vat plus shiping</span>
      </div>
    </div>
  );
};

export default ProductDetailsDesc;
