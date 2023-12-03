import ImageGallary from "@/app/Component/ImageGallary";
import { client } from "@/app/Lib/sanity";
import { fullProduct } from "@/app/interface";
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
