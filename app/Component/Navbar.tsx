"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";

type Props = {};
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teen",
  },
  {
    name: "All",
    href: "/All",
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex justify-between items-center mx-auto max-w-2xl lg:max-w-7xl max-lg:py-6 max-sm:px-4">
        <Link href="/">
          <h1 className=" text-2xl md:text-3xl font-bold tracking-tighter ">
            TEE <span className="text-primary"> ECOMMERT</span>{" "}
          </h1>
        </Link>

        <nav className="hidden lg:flex gap-12 2xl:ml-16 tracking-tighter">
          {links.map((link, idx) => (
            <div className="" key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            size="icon"
            variant="outline"
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none "
          >
            <ShoppingBagIcon />
            <span className="hidden sm:block text-gray-500 font-semibold text-xs ">
              cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
