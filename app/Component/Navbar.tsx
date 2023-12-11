"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

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
  const { cartCount } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex justify-between items-center mx-auto max-w-2xl lg:max-w-7xl max-lg:py-6 max-sm:px-4">
        <Link href="/">
          <h1 className=" text-2xl md:text-2xl font-bold tracking-tighter ">
            TEE <span className="text-primary text-sm"> ECOMMERT</span>{" "}
          </h1>
        </Link>

        <nav className="hidden lg:flex text-sm gap-12 2xl:ml-16 tracking-tighter">
          {links.map((link, idx) => (
            <div className="" key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className=" font-semibold text-primary underline-offset-1 "
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex">
          <div className="flex gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none ">
            <Link href="/Cart" className=" flex items-center">
              <ShoppingBagIcon className="mr-0.5" />
              <span className="text-sm text-gray-600">{cartCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
