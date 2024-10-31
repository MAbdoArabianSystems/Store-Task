"use client";

import { NotoKufiArabic, plusJakartaSans } from "@/helpers/next-fonts";
import { useRouter } from "next/navigation";

const index = () => {

  const {locale} = useRouter();

  return (
    <main
      className={`${
        locale === "ar" ? NotoKufiArabic : plusJakartaSans
      } antialiased`}
    >
      <section className="m-auto max-w-[1600px] px-5 lg:h-[87vh]">
        <div className="">About Page</div>
      </section>
    </main>
  );
};

export default index;
