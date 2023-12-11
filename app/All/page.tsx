import React, { Suspense, SyntheticEvent } from "react";
import ProductSort from "../Component/ProductSort";
import ProductFilter from "../Component/Product-filter";
import { client } from "../Lib/sanity";
import ProductGrid from "../Component/ProductGrid";
import { Input } from "@/components/ui/input";
import { BsCartX } from "react-icons/bs";
import SearchBar from "../Component/SearchBar";

type Props = {
  searchParams: {
    date?: string;
    price?: string;
    category?: string;
    Sizes?: string;
    search?: string;
  };
};

const Allproducts = async ({ searchParams }: Props) => {
  const { date, price, Sizes, category, search } = searchParams;
  const priceOrder = price ? `| order(price ${price})` : " ";
  const dateOrder = date ? `| order(_createdAt ${date})` : " ";
  const order = `${priceOrder} ${dateOrder}`;

  const productfilter = `_type == "product"`;
  const sizefilter = Sizes ? `&& "${Sizes}" in sizes` : " ";
  const categoryfilter = category
    ? `&& category-> category == "${category}"`
    : " ";

  const searchfilter = search ? ` && name match "${search}"` : "";
  const filter = `*[${productfilter} ${sizefilter} ${categoryfilter} ${searchfilter}] `;
  const allproduct = await getAllProducts(order, filter);

  // if (
  //   allproduct.length === 0 ||
  //   allproduct === undefined ||
  //   allproduct === null
  // ) {
  //   return (
  //     <div className="flex h-[450px] shrink-0 items-center justify-center  rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
  //       <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
  //         <BsCartX className="h-10 w-10 text-muted-foreground" />
  //         <h3 className="mt-4 text-lg font-semibold">No products found!</h3>
  //         <p className="mb-4 mt-2 text-sm text-muted-foreground">
  //           search again
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="px-4 lg:px-0 max-w-2xl lg:max-w-7xl mx-auto py-4 lg:py-8 ">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
        <h1 className=" capitalize text-xl sm:text-2xl font-bold tracking-tight">
          products
        </h1>
        <SearchBar />
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
        {allproduct.length === 0 ? (
          <div className="flex h-[450px] shrink-0 items-center justify-center  rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <BsCartX className="h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No products found!</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground capitalize">
                Search again...🤧
              </p>
            </div>
          </div>
        ) : (
          <ProductGrid products={allproduct} />
        )}
      </div>
    </div>
  );
};

export default Allproducts;

async function getAllProducts(order: string, filter: string) {
  const query = `${filter} ${order} {
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

export const revalidate = 60;
