"use client";
import { Input } from "@/components/ui/input";
import React, { SyntheticEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const defaultsearch = searchparams.get("search") ?? "";

  function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const searchquery = formdata.get("search");
    router.replace(`/All/?search=${searchquery}`);
  }

  return (
    <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
      <Input
        id="search"
        name="search"
        type="search"
        autoComplete="off"
        placeholder="Search products..."
        className="h-10 lg:w-[300px]"
        defaultValue={defaultsearch}
      />
    </form>
  );
};

export default SearchBar;
