import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import ProductFilter from "./Product-filter";

type Props = {};

const Sortingoptions = [
  { name: "Newest", value: "/?date=desc" },
  { name: "Price low to high", value: "/?price=asc" },
  { name: "Price high to low", value: "/?price=desc" },
];

const ProductSort = (props: Props) => {
  return (
    <div className="flex items-center">
      <Select>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="sort by" />
        </SelectTrigger>
        <SelectContent>
          {Sortingoptions.map((options, optionsidx) => (
            <SelectItem value={options.value} key={optionsidx}>
              {options.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">Filters</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>search for anything</SheetTitle>
            <ProductFilter />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductSort;
