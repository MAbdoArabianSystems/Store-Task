"use client";

import { NotoKufiArabic, plusJakartaSans } from "@/helpers/next-fonts";
import { useRouter } from "next/navigation";

const index = () => {
  const { locale } = useRouter();

  return (
    <section
      className={`${
        locale === "ar" ? NotoKufiArabic : plusJakartaSans
      } antialiased`}
    >
        <div>login form</div>
    </section>
  );
};

export default index;
