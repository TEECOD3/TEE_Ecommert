import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {};

const fillteroptions = [
  {
    id: "category",
    name: "category",
    options: [
      {
        value: "Men",
        label: "Men",
      },
      {
        value: "Women",
        label: "Women",
      },
      {
        value: "Teen",
        label: "Teen",
      },
    ],
  },

  {
    id: "Sizes",
    name: "Size",
    options: [
      { value: "xs", label: "X-Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },
    ],
  },
];

const ProductFilter = (props: Props) => {
  return (
    <form className="sticky top-20">
      {fillteroptions.map((options, optionsidx) => (
        <Accordion type="single" collapsible key={optionsidx}>
          <AccordionItem value={`item-${optionsidx}`}>
            <AccordionTrigger>
              {options.name}
              <span className=" mr-1 text-xs text-gray-600"></span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {options.options.map((choice, choiceidx) => (
                  <div key={choiceidx} className="flex items-center gap-x-4">
                    <Checkbox />
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {choice.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  );
};

export default ProductFilter;
