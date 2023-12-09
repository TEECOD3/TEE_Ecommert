import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
type Props = {};

const error = (props: Props) => {
  return (
    <div className="h-screen ">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <MdErrorOutline className="text-red-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h1 className="md:text-2xl text-base text-gray-900 font-semibold capitalize">
            something went wrong
          </h1>

          <Button asChild className="mt-5">
            <Link href="/Cart"> Go back to cart </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default error;
