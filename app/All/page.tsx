import React from "react";
import ProductSort from "../Component/ProductSort";

type Props = {};

const Allproducrs = (props: Props) => {
  return (
    <div className="px-4 lg:px-0 max-w-2xl lg:max-w-7xl mx-auto py-4 lg:py-8 ">
      <div className="flex justify-between border-b border-b-gray-300 pb-4">
        <h1 className=" capitalize text-xl sm:text-2xl font-bold tracking-tight">
          products
        </h1>
        <div className="lg:block">
          <ProductSort />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2"></div>
    </div>
  );
};

export default Allproducrs;
