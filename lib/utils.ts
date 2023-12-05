import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getsizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-small";
    case "s":
      return "small";
    case "m":
      return "Medium";
    case "l":
      return "Large";
    case "xl":
      return "X-Large";
    case "one-size":
      return "One Size";
  }
}
