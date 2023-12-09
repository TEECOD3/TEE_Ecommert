import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const sucess = (props: Props) => {
  return (
    <div className="h-screen ">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h1 className="md:text-2xl text-base text-gray-900 font-semibold capitalize">
            payment done!
          </h1>
          <h3 className="text-gray-600 my-2">thank you for your patronage </h3>
          <p>have a great day</p>
          <Button asChild className="mt-5">
            <Link href="/"> Go back </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default sucess;
