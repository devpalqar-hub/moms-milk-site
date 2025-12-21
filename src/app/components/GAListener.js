"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GAListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-XEDZEVL353", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
