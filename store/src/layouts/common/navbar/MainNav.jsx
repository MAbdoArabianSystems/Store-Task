"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "new-in", title: "new in" },
  { id: "shop-by", title: "shop by" },
  { id: "women", title: "women" },
  { id: "men", title: "men" },
  { id: "designers", title: "designers" },
  { id: "shoes", title: "shoes" },
  { id: "bags", title: "bags" },
  { id: "accessories", title: "accessories" },
  { id: "jewellery", title: "jewellery" },
];

const Index = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setActive(category ? `${category}` : "");
  }, [category]);

  return (
    <div className="flex py-6 justify-between items-center navbar bg-white">
      {/* Desktop Navigation */}
      <ul className="max-w-[1600px] m-auto list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] md:text-[14px] lg:text-[16px] ${
              active === nav.id ? "text-[#5742f6]" : "text-[#000]"
            } ${index === navLinks.length - 1 ? "mr-0" : "lg:mr-10 md:mr-4"}`}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            <Link href={`?category=${nav.id}`} className="font-bold">
              {nav.title?.toLocaleUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-row justify-evenly w-full px-5">
        {/* Logo */}
        <Link href="/" className="w-8 h-8">
          <Image src={`/assets/images/login/logo.png`} alt="logo" className="w-full h-full" />
        </Link>
        <div className="flex flex-1 justify-end items-center">
          <Image
            src={
              toggle
                ? `/assets/images/nav/icons-close.png`
                : `/assets/images/nav/icons-menu.png`
            }
            alt="icon-nav"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-white w-full h-full absolute top-20 left-0 min-w-[140px] sidebar`}
          >
            <ul className="list-none flex justify-start items-start flex-1 flex-col px-5">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#5742f6]" : "text-[#000]"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <Link href={`?category=${nav.id}`}>
                    {nav.title?.toLocaleUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
