import ImageGallary from "@/app/Component/ImageGallary";
import { client } from "@/app/Lib/sanity";
import { fullProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
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

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block  text-gray-500 ">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
            </div>
            <div className="mb-6 flex items-center gap-4 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100 ">
                56 ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2 ">
                <span className="font-bold text-xl text-gray-900 md:text-2xl">
                  &#8358;{data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through font-bold">
                  &#8358; {data.price + 2000}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                incl.Vat plus shiping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2  text-gray-500">
              <Truck />
              <span className="text-sm">2-4 day shipping</span>
            </div>
            <div className="flex gap-2.5 ">
              <Button>Add to cart</Button>
              <Button variant={"secondary"}>Checkout Now</Button>
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
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
  "categoryName": category -> category,
  price,
  "slug":slug.current
  }`;

  const data = client.fetch(query);
  return data;
}
