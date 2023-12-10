"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";

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
    name: "Sizes",
    options: [
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },
    ],
  },
];

const ProductFilter = (props: Props) => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const searchvalues = Array.from(searchparams.entries());

  return (
    <form className="sticky top-20">
      {fillteroptions.map((options, optionsidx) => (
        <Accordion type="single" collapsible key={optionsidx}>
          <AccordionItem value={`item-${optionsidx}`}>
            <AccordionTrigger>
              {options.name}
              <span className="  -ml-1 text-xs text-gray-400 uppercase font-extrabold">
                {searchparams.get(options.id)
                  ? `( ${searchparams.get(options.id)})`
                  : ""}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {options.options.map((choice, choiceidx) => (
                  <div key={choice.value} className="flex items-center gap-x-4">
                    <Checkbox
                      id={`filter-${options.id}-${choiceidx}`}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchparams);
                        const checked =
                          event.currentTarget.dataset.state === "checked";
                        checked
                          ? params.delete(options.id)
                          : params.set(options.id, choice.value);
                        router.replace(`/All/?${params.toString()}`);
                      }}
                      checked={searchvalues.some(
                        ([key, value]) =>
                          key == options.id && value == choice.value
                      )}
                    />
                    <label
                      htmlFor={`filter-${options.id}-${choiceidx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
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
