"use client";

import Cookies from "js-cookie";
import { Suspense, useEffect } from "react";
import HomePage from "@/modules/home";

export default function Home() {
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      window.location = "/login";
    }
  }, [token]);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="m-auto max-w-[1600px] px-5 lg:h-[87vh]">
          <HomePage />
        </section>
      </Suspense>
    </main>
  );
}
