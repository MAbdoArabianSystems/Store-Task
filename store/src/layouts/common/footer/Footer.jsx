'use client'
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
      <div className="max-w-[1600px] m-auto">
        <div className="w-full p-4 text-center">
          © 2024 Copyright : {" "}
          <Link href="/">Singleclic LLC</Link>
        </div>
      </div>
  );
};

export default Index;
