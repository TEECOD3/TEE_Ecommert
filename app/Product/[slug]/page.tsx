import ImageGallary from "@/app/Component/ImageGallary";
import { client } from "@/app/Lib/sanity";
import { fullProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { getsizeName } from "@/lib/utils";
import { Star, Truck } from "lucide-react";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Productdetail = async ({ params }: Props) => {
  const data: fullProduct = await getProductDetails(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-0">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallary images={data.images} />
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
                  &#8358;{data.price}
                </span>
                <span className=" text-red-500 line-through font-bold">
                  &#8358; {data.price + 2000}
                </span>
              </div>
            </div>
            <p className="mt-4 text-base  tracking-wide">{data.description}</p>

            <div className="my-4">
              <p className="">
                Size: <strong>{getsizeName(data.sizes[0])} </strong>
              </p>
              {data.sizes.map((sizes, sizesidx) => (
                <Button key={sizesidx} variant="outline" className="mt-4 mr-2">
                  {getsizeName(sizes)}
                </Button>
              ))}
            </div>

            <div className="flex gap-2.5 w-full">
              <Button className="w-full lg:w-[70%]">Add to cart</Button>
            </div>

            <div className="mb-2 flex items-center gap-2  text-gray-500 mt-4">
              <Truck />
              <span className="text-sm">2-4 day shipping</span>{" "}
              <span className="text-sm text-gray-500">
                incl.Vat plus shiping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;

async function getProductDetails(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
_id,
  name,
  images,
  description,
  sizes,
  "categoryName": category -> category,
  price,
  "slug":slug.current
  }`;

  const data = client.fetch(query);
  return data;
}
