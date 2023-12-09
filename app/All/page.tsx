import React, { Suspense } from "react";
import ProductSort from "../Component/ProductSort";
import ProductFilter from "../Component/Product-filter";
import { client } from "../Lib/sanity";
import ProductGrid from "../Component/ProductGrid";
import { Input } from "@/components/ui/input";

type Props = {};

const Allproducrs = async (props: Props) => {
  const allproduct = await getAllProducts();

  return (
    <div className="px-4 lg:px-0 max-w-2xl lg:max-w-7xl mx-auto py-4 lg:py-8 ">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
        <h1 className=" capitalize text-xl sm:text-2xl font-bold tracking-tight">
          products
        </h1>

        <form className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-10 lg:w-[300px]"
          />
        </form>
        <div className="">
          <ProductSort />
        </div>
      </div>
      <div
        className={` mt-4 lg:gap-x-4 grid grid-cols-1 ${
          allproduct.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-[1fr_3fr]"
        }`}
      >
        <div className="hidden lg:block">
          <ProductFilter />
        </div>
        <ProductGrid products={allproduct} />
      </div>
    </div>
  );
};

export default Allproducrs;

async function getAllProducts() {
  const query = `*[_type == "product"]{
     _id,
   name,
   price,
  "slug": slug.current,
  "imageUrl":images[1].asset -> url,
  "categoryName": category -> category,
  }`;

  const data = await client.fetch(query);
  return data;
}
