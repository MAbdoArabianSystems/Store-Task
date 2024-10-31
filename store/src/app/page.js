"use client";

import { NotoKufiArabic, plusJakartaSans } from "@/helpers/next-fonts";

import { useRouter } from "next/navigation";

export default function Home() {
  const { locale } = useRouter();

  return (
    <main
      className={`${
        locale === "ar" ? NotoKufiArabic : plusJakartaSans
      } antialiased`}
    >
      <section className="m-auto max-w-[1600px] px-5 lg:h-[87vh]">welcome in app</section>
    </main>
  );
}
