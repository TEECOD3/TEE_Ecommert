import React from "react";
import { client } from "../Lib/sanity";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";
import FormattedPrice from "./FormattedPrice";
type Props = {};

// export const dynamic = "force dynamic";

const Newest = async (props: Props) => {
  const data: simplifiedProduct[] = await getNewest();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className=" capitalize text-xl lg:text-3xl font-bold tracking-tighter text-gray-900">
            our Newest products
          </h2>
          <Link
            href="/All"
            className="capitalize text-primary text-base font-bold tracking-tighter  flex items-center gap-x-1"
          >
            see all
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square rounded-lg max-sm:pointer-events-none w-full cursor-pointer transition transform duration-300 ease-in-out  overflow-hidden rounded-mg bg-gray-200 group-hover:rotate-[1deg] lg:h-80 ">
                <Image
                  src={product.imageUrl || ""}
                  alt="product name"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center hover:scale-105 transition transform duration-300 ease-in-out lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between ">
                <div className=" text-gray-700 font-semibold">
                  <h3 className="text-sm">
                    <Link href={`/Product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <FormattedPrice totalamount={product.price} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
export const revalidate = 60;

//data fetching function using groq
async function getNewest() {
  const query = `*[_type == "product"] [0...4] | order(_createdAt desc){
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
