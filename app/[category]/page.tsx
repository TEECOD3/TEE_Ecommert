import React from "react";
import { client } from "../Lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { formatCurrencyString } from "use-shopping-cart/core";
import FormattedPrice from "../Component/FormattedPrice";

type Props = {
  params: {
    category: string;
  };
};

export const dynamic = "force dynamic";

const CategoryPage = async ({ params }: Props) => {
  const data: simplifiedProduct[] = await GetCategorydata(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 py-4 sm:px-6  lg:px-0">
        <div className="flex justify-between items-center">
          <h2 className=" capitalize text-xl lg:text-3xl font-bold tracking-tighter text-gray-900">
            our Newest products for {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-8">
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
                  <h3 className="text-base lg:text-sm">
                    <Link href={`/Product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                </div>

                <div className="font-semibold">
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

export default CategoryPage;

async function GetCategorydata(slug: string) {
  const query = `*[_type == "product"  && category-> category == "${slug}"]{
  _id,
    name,
  "slug":slug.current,
    "categoryName": category-> category,
  price,"imageUrl":images[1].asset -> url,
}`;
  const categorydata = client.fetch(query);
  return categorydata;
}
