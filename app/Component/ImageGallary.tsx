"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../Lib/sanity";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  images: any;
};

const ImageGallary = ({ images }: Props) => {
  const [bigimage, setbigimage] = useState(images[0]);
  const handleimagechange = (image: any) => {
    setbigimage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5 ">
      <AnimatePresence>
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((image: any, id: any) => (
            <motion.div
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg bg-gray-100"
              key={id}
            >
              <Image
                onClick={() => {
                  handleimagechange(image);
                }}
                src={urlFor(image).url()}
                alt="product detail image"
                width={200}
                height={300}
                className="w-full h-full object-cover object-center cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-[400px] lg:h-[600px] transition-all duration-500 ease-in-out "
      >
        <Image
          src={urlFor(bigimage).url()}
          alt="bigimage"
          className="h-full w-full object-cover object-top"
          width={500}
          height={400}
        />
        <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          {" "}
          sale
        </span>
      </motion.div>
    </div>
  );
};

export default ImageGallary;
