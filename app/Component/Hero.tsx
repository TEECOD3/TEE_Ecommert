import React from "react";
import Image from "next/image";
import { client, urlFor } from "../Lib/sanity";
import Link from "next/link";

type Props = {};

const Hero = async (props: Props) => {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-8 lg:px-0 ">
      <div className="mb-8 flex-wrap flex justify-between md:mb-16">
        <div className="mb-6 w-full flex flex-col justify-center sm:mb-12 lg:lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-10 ">
          <h1 className="mb-4  text-4xl font-bold text-black sm:text-5xl md:text-6xl tracking-tighter capitalize max-lg:text-center ">
            Top Fashion For a top price
          </h1>
          <p className="lg:max-w-md mt-8 font-semibold text-gray-500 tracking-tighter max-lg:text-center text-base">
            we sell only the most exclusive and hight quality products for you.
            we are the best so come an shop with us
          </p>
          <div className=" mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex items-center justify-center h-12 w-[80%]  lg:w-64 divide-x overflow-hidden rounded-lg border font-semibold text-base">
              <Link
                href="/Men"
                className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Men
              </Link>
              <Link
                href="/Teen"
                className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Teen
              </Link>
              <Link
                href="/Women"
                className="flex w-1/3 items-center justify-center px-2 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Women
              </Link>

              <Link
                href="/All"
                className="flex w-1/3 items-center justify-center  text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                All
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
          <div className="relative left-12 top-12 -ml-12 overflow-hidden bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="heroimage"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={urlFor(data.image2).url()}
              alt="heroimage2"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

async function getData() {
  const query = "*[_type == 'heroImage' ] [0]";
  const data = await client.fetch(query);
  return data;
}
