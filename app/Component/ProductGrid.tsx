import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fullProduct } from "../interface";

type Props = {
  products: any;
};

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-x-6 lg:gap-x-8 gap-y-10">
      {products.map((product: any) => (
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
              <h3 className="text-base lg:text-sm">
                <Link href={`/Product/${product.slug}`}>{product.name}</Link>
              </h3>

              <p className="text-sm">&#8358;{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
