"use client";
import React from "react";
import { formatCurrencyString } from "use-shopping-cart";

type Props = {
  totalamount: number;
};

const FormattedPrice = ({ totalamount }: Props) => {
  return (
    <p className="text-sm">
      {formatCurrencyString({
        value: totalamount,
        currency: "USD",
        language: "en-US",
      })}
    </p>
  );
};

export default FormattedPrice;
