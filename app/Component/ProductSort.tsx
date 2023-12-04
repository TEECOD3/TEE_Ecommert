import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    </div>
  );
};

export default ProductSort;
