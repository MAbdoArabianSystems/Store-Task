"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Index = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  //this function for controlling to back history
  const backToCategory = () => {
    history.back();
  };

  return (
    <div className="relative flex w-full flex-wrap items-center justify-between py-2 shadow-dark-mild text-white">
      <div className="max-w-[1600px] m-auto flex w-full flex-wrap items-center justify-between px-3">
        <div className="m-auto">
          <div
            onClick={backToCategory}
            className="text-xl flex flex-row gap-x-2"
          >
            <img
              src={`/assets/images/nav/arrow.png`}
              className={`w-8 transform scale-x-[-1]`}
              alt="arrow"
            />
            <p> {category ? category : "No Category Selected"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;